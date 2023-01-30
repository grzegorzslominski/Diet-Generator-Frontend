import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setNotification } from "../../redux/slices/notification";
import { BASIC_GENERATOR_DATA, GeneratorI } from "../../models/Generator/GeneratorI";
import { NAVIGATION } from "../../navigation/paths";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_USER } from "../../navigation/endpoints";
import ExclusionProducts from "../../components/ExclusionProducts/ExclusionProducts";
import { ReactComponent as MealPerDay } from "../../assets/dietGenerator/images/mealPerDay.svg";
import { RECIPE_TYPE_PRESET } from "../../models/Meal/Recipe";
import { mainTheme } from "../../themes/mainTheme";
import { GoalItem } from "./components/Choose your goal/Goals/Goal.style";

import Label from "../../components/UI/Label/Label";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import ViewBox from "../../components/UI/ViewBox/ViewBox";
import BoxPad from "../../components/UI/BoxPad/BoxPad";
import Goal from "./components/Choose your goal/Goals/Goal";
import Excercise from "./components/ChooseExcercise/Excercise/Excercise";
import Switch from "../../components/Switch/Switch";

import {
    DIET_TYPE_ICONS,
    getExcludedProducts,
    ProductType,
} from "./components/Choose your goal/Goals/const/data";
import { Product } from "../../models/Meal/Exclusions";

import * as S from "./DietGeneratorView.style";

const DietGeneratorView = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [data, setIsData] = useState<GeneratorI>(BASIC_GENERATOR_DATA);
    const [currentExcludedProducts, setCurrentExcludedProducts] = useState<Product[]>([]);
    const queryClient = useQueryClient();

    const { data: excludedProducts } = useQuery(["excludedProducts"], () => getExcludedProducts());

    useEffect(() => {
        setCurrentExcludedProducts(currentExcludedProducts);
    }, [excludedProducts]);

    const handleChange = (property: string, value: any) => {
        const currentData = JSON.parse(JSON.stringify(data));
        currentData[property] = value;
        setIsData(currentData);
    };

    const handleForm = () => {
        let validationPassed = true;
        if (data.goal === "") {
            validationPassed = false;
        }
        if (data.exercise === "") {
            validationPassed = false;
        }
        if (data.mealsPerDay > 5 || data.mealsPerDay < 3) {
            validationPassed = false;
        }
        if (
            data.veryHealthy &&
            data.glutenFree &&
            data.dairyFree &&
            data.vegetarian &&
            data.vegan
        ) {
            validationPassed = false;
        }
        return validationPassed;
    };

    const onSubmit = async () => {
        setLoading(true);
        const readyToSendExcludedProducts: ProductType[] = [];
        currentExcludedProducts.forEach((item) => {
            readyToSendExcludedProducts.push({
                id: item?.id ? item.id : 0,
                name: item.name,
            });
        });
        const currentData = {
            dietGoal: data.goal,
            physicalActivity: data.exercise,
            mealsPerDay: data.mealsPerDay,
            vegan: data.vegan,
            vegetarian: data.vegetarian,
            glutenFree: data.glutenFree,
            dairyFree: data.dairyFree,
            veryHealthy: data.veryHealthy,
            excludedProductsList: readyToSendExcludedProducts,
            personalized: data.personalized,
            makroCheck: data.makroCheck,
        };
        await axiosFoodieInstance
            .post(ENDPOINTS_USER.generator, currentData)
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    queryClient.invalidateQueries(["current-diet"], {
                        refetchType: "all",
                    });
                    dispatch(
                        setNotification({
                            label: "Generating a diet",
                            header: "Success",
                            message:
                                "Diet was created, you will be redirected to the page with the generated diet",
                            timeout: 5000,
                        }),
                    );
                    setIsData(JSON.parse(JSON.stringify(BASIC_GENERATOR_DATA)));
                    setTimeout(() => {
                        navigation(NAVIGATION.myDiet);
                    }, 5000);
                }
                if (response.status === 204) {
                    dispatch(
                        setNotification({
                            label: "Generating a diet",
                            header: "Failed",
                            message: "Failed to generate diet, change settings or try again later",
                            timeout: 5000,
                        }),
                    );
                }
            })
            .catch((err) => {
                const errorMessage = err.response.data?.message
                    ? err.response.data.message
                    : "Cannot create diet";
                dispatch(
                    setNotification({
                        label: "Generating a diet",
                        header: "Failed",
                        message: errorMessage,
                        timeout: 5000,
                    }),
                );
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const onChangeExclusions = (selectedExclusions: Product[]) => {
        setCurrentExcludedProducts(selectedExclusions);
    };

    return (
        <ViewBox>
            <S.Container>
                <Label
                    color={mainTheme.colors.mainBlack}
                    width='100%'
                    fontSize='22px'
                    fontWeight='500'
                >
                    Diet generator
                </Label>
                <Label
                    width='100%'
                    fontSize='14px'
                    lineHeight='20px'
                    color={mainTheme.colors.mainBlack}
                >
                    Welcome to diet generator page. You can here personalize your diet and also pick
                    your preferences and goals. All you have to do is: <br />
                    - pick your goal <br />
                    - pick items that will be excluded from your diet
                    <br />
                    - answer couple of questions
                    <br />
                </Label>
                <S.GenerateStep>
                    <Label
                        fontSize='20px'
                        fontWeight='500'
                        color={mainTheme.colors.mainBlack}
                        width='100%'
                    >
                        Step 1
                    </Label>
                    <BoxPad width='100%'>
                        <S.StepContent>
                            <S.Substep>
                                <Label
                                    width='100%'
                                    fontSize='16px'
                                    fontFamily='Lato'
                                    fontWeight='600'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    Choose your goal
                                </Label>
                                <Goal handleChange={handleChange} />
                            </S.Substep>
                            <S.Substep>
                                <Label
                                    width='100%'
                                    fontSize='16px'
                                    fontFamily='Lato'
                                    fontWeight='600'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    Determine your level of physical activity
                                </Label>
                                <Excercise handleChange={handleChange} />
                            </S.Substep>

                            <S.Substep>
                                <Label
                                    width='100%'
                                    fontSize='16px'
                                    fontFamily='Lato'
                                    fontWeight='600'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    What kind of diet would you like
                                </Label>
                                <S.MealCount>
                                    {Object.keys(RECIPE_TYPE_PRESET).map((recipeTypeKey: any) => {
                                        return (
                                            <GoalItem
                                                key={recipeTypeKey}
                                                selected={Boolean(data[recipeTypeKey])}
                                                onClick={() =>
                                                    handleChange(
                                                        recipeTypeKey,
                                                        !data[recipeTypeKey],
                                                    )
                                                }
                                            >
                                                {DIET_TYPE_ICONS[recipeTypeKey]}

                                                <Label
                                                    fontFamily='Lato'
                                                    fontWeight='600'
                                                    fontSize='12px'
                                                    lineHeight='20px'
                                                    color={mainTheme.colors.secondaryColor}
                                                    textAlign='center'
                                                >
                                                    {RECIPE_TYPE_PRESET[
                                                        recipeTypeKey
                                                    ].toUpperCase()}
                                                </Label>
                                            </GoalItem>
                                        );
                                    })}
                                </S.MealCount>
                            </S.Substep>
                            <S.Substep>
                                <Label
                                    width='100%'
                                    fontSize='16px'
                                    fontFamily='Lato'
                                    fontWeight='600'
                                    color={mainTheme.colors.mainBlack}
                                >
                                    Specify the number of meals per day
                                </Label>
                                <S.MealCount>
                                    <S.MealCountContainer>
                                        <>
                                            {Array.from(Array(3)).map((value, index) => (
                                                <S.MealCountItem
                                                    key={index + 3}
                                                    checked={data.mealsPerDay === index + 3}
                                                    onClick={() =>
                                                        handleChange("mealsPerDay", index + 3)
                                                    }
                                                >
                                                    <Label
                                                        fontWeight='500'
                                                        fontSize='18px'
                                                        color={mainTheme.colors.secondaryColor}
                                                    >
                                                        {index + 3}
                                                    </Label>
                                                </S.MealCountItem>
                                            ))}
                                        </>
                                    </S.MealCountContainer>
                                </S.MealCount>
                            </S.Substep>
                            <S.SettingsContainer>
                                <S.SettingItem>
                                    <Label fontSize='12px'>Makro</Label>
                                    <Switch
                                        onClick={() => handleChange("makroCheck", !data.makroCheck)}
                                        activeState={data.makroCheck}
                                    />
                                </S.SettingItem>
                                <S.SettingItem>
                                    <Label fontSize='12px'>Personalized</Label>
                                    <Switch
                                        onClick={() =>
                                            handleChange("personalized", !data.personalized)
                                        }
                                        activeState={data.personalized}
                                    />
                                </S.SettingItem>
                            </S.SettingsContainer>
                        </S.StepContent>
                    </BoxPad>
                </S.GenerateStep>

                <S.GenerateStep>
                    <Label
                        fontSize='20px'
                        fontWeight='500'
                        color={mainTheme.colors.mainBlack}
                        width='100%'
                    >
                        Step 2
                    </Label>
                    <ExclusionProducts
                        currentExclusions={currentExcludedProducts}
                        onChange={(exclusions) => onChangeExclusions(exclusions)}
                        size='big'
                        type='variable'
                    />
                </S.GenerateStep>

                <Button
                    onClick={onSubmit}
                    styleType='gradientFull'
                    isLoading={loading}
                    width='12rem'
                    borderRadius='10px'
                    fontSize='1rem'
                    disabled={!handleForm()}
                >
                    Generate diet
                </Button>
            </S.Container>
        </ViewBox>
    );
};

export default DietGeneratorView;
