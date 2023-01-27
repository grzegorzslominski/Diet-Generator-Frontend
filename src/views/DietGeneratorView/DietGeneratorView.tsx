import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setNotification } from "../../redux/slices/notification";
import { BASIC_GENERATOR_DATA, GeneratorI } from "../../models/Generator/GeneratorI";
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
import ModalPortal from "../../components/UI/ModalPortal/ModalPortal";
import Information from "./components/Modal/Information";
import ViewBox from "../../components/UI/ViewBox/ViewBox";
import BoxPad from "../../components/UI/BoxPad/BoxPad";
import Goal from "./components/Choose your goal/Goals/Goal";
import Excercise from "./components/ChooseExcercise/Excercise/Excercise";

import {
    DIET_TYPE_ICONS,
    getExcludedProducts,
    ProductType,
} from "./components/Choose your goal/Goals/const/data";
import { Product } from "../../models/Meal/Exclusions";

import * as S from "./DietGeneratorView.style";

const DietGeneratorView = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [failed, setFailed] = useState<boolean>(false);
    const [data, setIsData] = useState<GeneratorI>(BASIC_GENERATOR_DATA);
    const [currentExcludedProducts, setCurrentExcludedProducts] = useState<Product[]>([]);

    const { data: excludedProducts } = useQuery(["getExcludedProducts"], () =>
        getExcludedProducts(),
    );

    useEffect(() => {
        setCurrentExcludedProducts(currentExcludedProducts);
    }, [excludedProducts]);

    const handleChangeOpenModal = () => setIsOpen((prev) => !prev);
    const handleChangeFailedModal = () => setFailed((prev) => !prev);

    const handleChange = (property: string, value: any) => {
        const currentData = JSON.parse(JSON.stringify(data));
        if (property === "exclusions") {
            const id = currentData[property].findIndex((id: number) => id === value);
            id === -1 ? currentData[property].push(value) : currentData[property].splice(id, 1);
        } else {
            currentData[property] = value;
        }

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

    const onSubmit = () => {
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
        };
        axiosFoodieInstance
            .post(ENDPOINTS_USER.generator, currentData)
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    dispatch(
                        setNotification({
                            label: "Generator",
                            header: "Success",
                            message: "Diet was created",
                            timeout: 5000,
                        }),
                    );
                    setIsOpen(true);
                    setIsData(JSON.parse(JSON.stringify(BASIC_GENERATOR_DATA)));
                }
                if (response.status === 204) {
                    setFailed(true);
                }
            })
            .catch((err) => {
                const errorMessage = err.response.data?.message
                    ? err.response.data.message
                    : "Cannot create diet";

                dispatch(
                    setNotification({
                        label: "Generator",
                        header: "Failed",
                        message: errorMessage,
                        timeout: 5000,
                    }),
                );
                setFailed(true);
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
                                    Specify the number of meals per day
                                </Label>
                                <S.MealCount>
                                    <Label
                                        width='100%'
                                        fontSize='15px'
                                        fontFamily='Lato'
                                        whiteSpace='nowrap'
                                        fontWeight='500'
                                        color={mainTheme.colors.mainBlack}
                                    >
                                        {"By default it's 3 but you can choose between 3-5"}
                                    </Label>
                                    <Input
                                        width='100px'
                                        min={3}
                                        max={5}
                                        value={data.mealsPerDay}
                                        placeholder='meals per day'
                                        type='number'
                                        onChange={(e) =>
                                            handleChange("mealsPerDay", +e.target.value)
                                        }
                                    />
                                    <MealPerDay />
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
                {isOpen && (
                    <ModalPortal
                        blurLevel='normal'
                        blurBackground={true}
                        close={handleChangeOpenModal}
                    >
                        <Information success={true} close={handleChangeOpenModal} />
                    </ModalPortal>
                )}
                {failed && (
                    <ModalPortal
                        blurLevel='normal'
                        blurBackground={true}
                        close={handleChangeFailedModal}
                    >
                        <Information close={handleChangeOpenModal} />
                    </ModalPortal>
                )}
            </S.Container>
        </ViewBox>
    );
};

export default DietGeneratorView;
