import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Label from "../../components/UI/Label/Label";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import TextArea from "../../components/UI/TextArea/TextArea";
import { mainTheme } from "../../themes/mainTheme";
import CheckMark from "../../assets/icons/checkMark.svg";
import XIcon from "../../assets/icons/XIcon.svg";


import * as S from "./NewMealView.style";


import { getDietProducts, USER_PROFILE_NEW_MEAL, UserNewMeal } from "../../models/User/UserForm";
import ScrollBox from "../../components/UI/ScrollBox/ScrollBox";

const NewMealView = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const [newMeal, setNewMeal] = useState<UserNewMeal>(USER_PROFILE_NEW_MEAL);
    const {
        data: products,
        isLoading,
        error
    } = useQuery(["getAllProducts"], () => getDietProducts());



    const handleOnChange = (property: string, value: any) => {
        const currentMeal: UserNewMeal = JSON.parse(JSON.stringify(newMeal));
        if(property === 'products'){
            currentMeal.products.push(value)
        }else {
            currentMeal[property] = value;
        }

        setNewMeal(currentMeal);
        console.log(newMeal);
    };

    return (
        <S.Container>
            <S.Border>
                <Label
                    fontFamily='Lato'
                    fontSize='1.2rem'
                    color={mainTheme.colors.mainBlack}
                    textAlign='center'
                >
                    Add new meal
                </Label>
                <S.InputContainer>
                    <S.InputRow>
                        <Input
                            placeholder='Type title'
                            onChange={(e) => handleOnChange("mealName", e.target.value)}
                            label='Meal name'
                            value={newMeal.mealName}
                        />
                        <Input
                            placeholder='Type title'
                            onChange={(e) => handleOnChange("servings", e.target.value)}
                            label='servings'
                            type='number'
                            value={newMeal.servings}
                        />
                        <Input
                            placeholder='amount of time to prepare'
                            onChange={(e) => handleOnChange("readyInMinutes", e.target.value)}
                            label='ready in minutes'
                            type='number'
                            value={newMeal.readyInMinutes}
                        />
                        <Input
                            placeholder='Type title'
                            onChange={(e) => handleOnChange("image", e.target.value)}
                            label='image'
                            value={newMeal.image}
                        />
                    </S.InputRow>
                    <TextArea
                        onChange={(e) => handleOnChange("instructions", e.target.value)}
                        label='description'
                        placeholder='give instructions'
                        value={newMeal.instructions}
                        width='100%'
                    />
                </S.InputContainer>
                <S.Table>
                    <S.TableItem
                        isOpen={newMeal.vegetarian}
                        onClick={() => handleOnChange("vegetarian", !newMeal.vegetarian)}
                    >
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Vegetarian
                        </Label>
                        {newMeal.vegetarian ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='checkMark' />
                        )}
                    </S.TableItem>
                    <S.TableItem
                        isOpen={newMeal.vegan}
                        onClick={() => handleOnChange("vegan", !newMeal.vegan)}
                    >
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Vegan
                        </Label>
                        {newMeal.vegan ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='checkMark' />
                        )}
                    </S.TableItem>
                    <S.TableItem
                        isOpen={newMeal.glutenFree}
                        onClick={() => handleOnChange("glutenFree", !newMeal.glutenFree)}
                    >
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Gluten free
                        </Label>
                        {newMeal.glutenFree ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='checkMark' />
                        )}
                    </S.TableItem>
                    <S.TableItem
                        isOpen={newMeal.dairyFree}
                        onClick={() => handleOnChange("dairyFree", !newMeal.dairyFree)}
                    >
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Dairy free
                        </Label>
                        {newMeal.dairyFree ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='checkMark' />
                        )}
                    </S.TableItem>
                    <S.TableItem
                        isOpen={newMeal.veryHealthy}
                        onClick={() => handleOnChange("veryHealthy", !newMeal.veryHealthy)}
                    >
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Very healthy
                        </Label>
                        {newMeal.veryHealthy ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='checkMark' />
                        )}
                    </S.TableItem>
                </S.Table>
                <S.InputContainer>
                    <S.InputRow>
                        <Input
                            placeholder='Calories'
                            onChange={(e) => handleOnChange("calories", e.target.value)}
                            label='Calories'
                            type='number'
                            value={newMeal.calories}
                        />
                        <Input
                            placeholder='Fat'
                            onChange={(e) => handleOnChange("fat", e.target.value)}
                            label='Fat in grams'
                            type='number'
                            value={newMeal.fat}
                        />
                        <Input
                            placeholder='Proteins'
                            onChange={(e) => handleOnChange("proteins", e.target.value)}
                            label='Proteins in grams'
                            type='number'
                            value={newMeal.proteins}
                        />
                        <Input
                            placeholder='Carbs'
                            onChange={(e) => handleOnChange("carbs", e.target.value)}
                            label='Carbs  in grams'
                            type='number'
                            value={newMeal.carbs}
                        />
                    </S.InputRow>
                </S.InputContainer>
                <S.ProductsContainer>
                    <ScrollBox scrollDistance={40} height={280} mobileScrollDistance={30}>
                        <S.ProductsList>
                        {
                           products ? products.map(product => {
                                return <S.productItem key={product.name} onClick={() => handleOnChange("products",product)}>
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
                            }) : null
                        }
                        </S.ProductsList>
                    </ScrollBox>
                </S.ProductsContainer>
                <Button
                    isLoading={loading}
                    width='12rem'
                    styleType='gradientFull'
                    onClick={() => {}}
                    borderRadius='15px'
                    fontSize='1rem'
                    size='small'
                >
                    Add new meal
                </Button>
            </S.Border>
        </S.Container>
    );
};

export default NewMealView;
