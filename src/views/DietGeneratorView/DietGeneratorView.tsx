import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setNotification } from "../../redux/slices/notification";

import { BASIC_GENERATOR_DATA, GeneratorI } from "../../models/Generator/GeneratorI";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_USER } from "../../navigation/endpoints";
import { ReactComponent as MealPerDay } from "../../assets/dietGenerator/images/mealPerDay.svg";

import GenerateYourOwnDiet from "./components/GenerateYourOwnDiet/GenerateYourOwnDiet";
import ChooseYourGoal from "./components/Choose your goal/ChooseYourGoal";
import Button from "../../components/UI/Button/Button";

import * as S from "./DietGeneratorView.style";
import ChooseExcercise from "./components/ChooseExcercise/ChooseExcercise";
import { useQuery } from "@tanstack/react-query";
import {
    diet,
    getDietProducts,
    getExcludedProducts,
    ProductType,
} from "./components/Choose your goal/Goals/const/data";
import Label from "../../components/UI/Label/Label";
import { mainTheme } from "../../themes/mainTheme";
import ScrollBox from "../../components/UI/ScrollBox/ScrollBox";
import Input from "../../components/UI/Input/Input";
import ModalPortal from "../../components/UI/ModalPortal/ModalPortal";
import Information from "./components/Modal/Information";

const DietGeneratorView = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [isOpen,setIsOpen] = useState<boolean>(true);
    const [failed,setFailed] = useState<boolean>(false);
    const [data, setIsData] = useState<GeneratorI>(BASIC_GENERATOR_DATA);
    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredResults, setFilteredResults] = useState<ProductType[]>();
    const [currentExcludedProducts, setCurrentExcludedProducts] = useState<ProductType[]>([]);
    const dispatch = useDispatch();

    const {
        data: excludedProducts,
        isLoading: loadingExcludedProducts,
        error: errorExcludedProducts,
    } = useQuery(["getExcludedProducts"], () => getExcludedProducts());

    const {
        data: products,
        isLoading: loadingAllProducts,
        error: errorAllProducts,
    } = useQuery(["getAllProducts"], () => getDietProducts());

    useEffect(() => {
        if (products) {
            const currentFilteredResults = products.filter((product: ProductType) =>
                product.name.includes(searchValue),
            );
            currentFilteredResults.map((product: ProductType) => {
                product.selected = !!excludedProducts?.listOfExcludedProducts?.find(
                    (excludedProduct) => excludedProduct.name === product.name,
                );
                return products;
            });

            setFilteredResults(currentFilteredResults);
        }
    }, [searchValue, products]);

    useEffect(() => {
        if (excludedProducts) {
            setCurrentExcludedProducts(excludedProducts.listOfExcludedProducts);
        }
    }, [excludedProducts]);

    const handleResults = (value: string) => {
        setSearchValue(value);
    };

    const handleChangeOpenModal = () => setIsOpen((prev) => !prev);
    const handleChangeFailedModal = () => setFailed((prev) => !prev)


    const handleChangeExcludedProducts = (id: number) => {
        const findIndex = currentExcludedProducts.findIndex((product) => product.id === id);
        const excludedProductsCopy: ProductType[] = JSON.parse(
            JSON.stringify(currentExcludedProducts),
        );
        const product = products?.find((product) => product.id === id);
        if (findIndex > -1) {
            excludedProductsCopy.splice(findIndex, 1);
        } else if (product) {
            excludedProductsCopy.push({
                id: product.id,
                name: product.name,
            });
        }
        setCurrentExcludedProducts(excludedProductsCopy);
    };
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
                id: item.id,
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
                    setIsOpen(true)
                    setIsData(JSON.parse(JSON.stringify(BASIC_GENERATOR_DATA)))
                }
                if(response.status === 204){
                    setFailed(true)
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
                setFailed(true)
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <S.Container>
            <GenerateYourOwnDiet />
            <ChooseYourGoal handleChange={handleChange} />
            <ChooseExcercise handleChange={handleChange} />
            <S.ContainerVegan>
                <Label
                    fontSize='1.5rem'
                    fontFamily='Lato'
                    fontWeight='700'
                    lineHeight='2.3rem'
                    color={mainTheme.colors.mainBlack}
                >
                    {"Step 3: How many meals per day ?"}
                </Label>
                <S.ProductsVegan>
                    <S.InputContainer>
                        <Input
                            value={data.mealsPerDay}
                            placeholder='meals per day'
                            label='Meals per day'
                            type='number'
                            onChange={(e) => handleChange("mealsPerDay", +e.target.value)}
                        />
                    </S.InputContainer>
                    <MealPerDay />
                    <Label>{"By default it's 3 but you can choose between 3-5"}</Label>
                </S.ProductsVegan>
            </S.ContainerVegan>
            <S.ContainerVegan>
                <Label
                    fontSize='1.5rem'
                    fontFamily='Lato'
                    fontWeight='700'
                    lineHeight='2.3rem'
                    color={mainTheme.colors.mainBlack}
                >
                    {"Step 4: What kind of diet would you like ?"}
                </Label>
                <S.ProductsVegan>
                    <S.Content
                        selected={data.vegan}
                        onClick={() => handleChange("vegan", !data.vegan)}
                    >
                        {diet[0].image}
                        <S.Border>
                            <Label
                                fontFamily='Lato'
                                fontWeight='600'
                                fontSize='1rem'
                                lineHeight='1.5rem'
                                color='white'
                                textAlign='center'
                            >
                                {diet[0].name}
                            </Label>
                        </S.Border>
                    </S.Content>
                    <S.Content
                        selected={data.vegetarian}
                        onClick={() => handleChange("vegetarian", !data.vegetarian)}
                    >
                        {diet[1].image}
                        <S.Border>
                            <Label
                                fontFamily='Lato'
                                fontWeight='600'
                                fontSize='1rem'
                                lineHeight='1.5rem'
                                color='white'
                                textAlign='center'
                            >
                                {diet[1].name}
                            </Label>
                        </S.Border>
                    </S.Content>
                    <S.Content
                        selected={data.dairyFree}
                        onClick={() => handleChange("dairyFree", !data.dairyFree)}
                    >
                        {diet[2].image}
                        <S.Border>
                            <Label
                                fontFamily='Lato'
                                fontWeight='600'
                                fontSize='1rem'
                                lineHeight='1.5rem'
                                color='white'
                                textAlign='center'
                            >
                                {diet[2].name}
                            </Label>
                        </S.Border>
                    </S.Content>
                    <S.Content
                        selected={data.glutenFree}
                        onClick={() => handleChange("glutenFree", !data.glutenFree)}
                    >
                        {diet[3].image}
                        <S.Border>
                            <Label
                                fontFamily='Lato'
                                fontWeight='600'
                                fontSize='1rem'
                                lineHeight='1.5rem'
                                color='white'
                                textAlign='center'
                            >
                                {diet[3].name}
                            </Label>
                        </S.Border>
                    </S.Content>
                    <S.Content
                        selected={data.veryHealthy}
                        onClick={() => handleChange("veryHealthy", !data.veryHealthy)}
                    >
                        {diet[4].image}
                        <S.Border>
                            <Label
                                fontFamily='Lato'
                                fontWeight='600'
                                fontSize='1rem'
                                lineHeight='1.5rem'
                                color='white'
                                textAlign='center'
                            >
                                {diet[4].name}
                            </Label>
                        </S.Border>
                    </S.Content>
                </S.ProductsVegan>
            </S.ContainerVegan>
            <S.ContainerWrapper>
                <Label
                    fontSize='1.5rem'
                    fontFamily='Lato'
                    fontWeight='700'
                    lineHeight='2.3rem'
                    color={mainTheme.colors.mainBlack}
                >
                    {"Step 5: Choose exclusions"}
                </Label>
                <S.ProductsWrapper>
                    <S.SearchContainer>
                        <S.Search>
                            <Input
                                placeholder='results'
                                onChange={(e) => handleResults(e.target.value)}
                                label='Search'
                                value={searchValue}
                            />
                        </S.Search>
                    </S.SearchContainer>
                    <S.ProductsContainer>
                        <ScrollBox scrollDistance={40} height={240} mobileScrollDistance={40}>
                            <S.ProductsList>
                                {filteredResults &&
                                    filteredResults.map((product, index) => {
                                        return (
                                            <S.productItem
                                                key={product.name}
                                                isOpen={
                                                    !!currentExcludedProducts.find(
                                                        (item) => item.id === product.id,
                                                    )
                                                }
                                                onClick={() =>
                                                    handleChangeExcludedProducts(product.id)
                                                }
                                            >
                                                <Label
                                                    fontSize='0.8rem'
                                                    textAlign='center'
                                                    fontWeight='400'
                                                    fontFamily='Lato'
                                                    color={mainTheme.colors.secondaryColor}
                                                >
                                                    {product.name}
                                                </Label>
                                            </S.productItem>
                                        );
                                    })}
                            </S.ProductsList>
                        </ScrollBox>
                    </S.ProductsContainer>
                </S.ProductsWrapper>
            </S.ContainerWrapper>
            <Button
                onClick={onSubmit}
                styleType='gradientFull'
                isLoading={loading}
                width='12rem'
                borderRadius='15px'
                fontSize='1rem'
                disabled={!handleForm()}
            >
                Submit your answers
            </Button>
            {
                isOpen ? <ModalPortal blurLevel='normal' blurBackground={true} close={handleChangeOpenModal}>
                    <Information success={true} close={handleChangeOpenModal}/>
                </ModalPortal> : null
            }
            {
                failed ? <ModalPortal blurLevel='normal' blurBackground={true} close={handleChangeFailedModal}>
                    <Information close={handleChangeOpenModal}/>
                </ModalPortal> : null
            }
        </S.Container>
    );
};

export default DietGeneratorView;
