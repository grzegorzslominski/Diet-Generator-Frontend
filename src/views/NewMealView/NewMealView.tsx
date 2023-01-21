import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
    UNITS,
    USER_PROFILE_NEW_MEAL,
    UserNewMeal,
    IngredientType,
    getDietProducts, UserNewMealValidation, USER_MEAL_VALIDATION_DATA
} from "../../models/Meal/NewMeal";

import { mainTheme } from "../../themes/mainTheme";

import SelectOption from "../../components/UI/Select/SelectOption";
import ScrollBox from "../../components/UI/ScrollBox/ScrollBox";
import TextArea from "../../components/UI/TextArea/TextArea";
import CheckMark from "../../assets/icons/checkMark.svg";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/Select";
import Input from "../../components/UI/Input/Input";
import Label from "../../components/UI/Label/Label";
import XIcon from "../../assets/icons/XIcon.svg";

import * as S from "./NewMealView.style";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_MEALS } from "../../navigation/endpoints";
import { setNotification } from "../../redux/slices/notification";
import { useDispatch } from "react-redux";

const NewMealView = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const [newMeal, setNewMeal] = useState<UserNewMeal>(USER_PROFILE_NEW_MEAL);
    const {
        data: products,
        isLoading,
        error,
    } = useQuery(["getAllProducts"], () => getDietProducts());

    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [filteredResults, setFilteredResults] = useState<IngredientType[]>();
    const [userMealValidation, setUserMealValidation] = useState<UserNewMealValidation>(
      USER_MEAL_VALIDATION_DATA
    )

    useEffect(() => {
        if (products && searchValue) {
            const currentFilteredResults = products.filter((product: IngredientType) =>
                product.name.includes(searchValue),
            );
            setFilteredResults(currentFilteredResults);
        }
    }, [searchValue]);

    useEffect(() => {
        if (products) {
            setFilteredResults(products);
        }
    }, [products]);

    const handleResults = (value: string) => {
        setSearchValue(value);
    };

    const handleOnChange = (property: string, value: any, index?: number) => {
        const currentMeal: UserNewMeal = JSON.parse(JSON.stringify(newMeal));
        if (property === "ingredients") {
            const findedIndex = currentMeal[property].findIndex(
                (ingridient) => ingridient.id === value.id,
            );
            if (findedIndex === -1) {
                currentMeal[property].push({
                    ...value,
                    unit: "g",
                });
            } else {
                currentMeal[property].splice(findedIndex, 1);
            }
        } else if (index !== undefined) {
            currentMeal.ingredients[index][property] = value;
        } else {
            currentMeal[property] = value;
        }
        setNewMeal(currentMeal);
    };

    const dataValidation = (): boolean => {
        let validationPassed = true;
        const currentValidation: UserNewMealValidation = JSON.parse(
          JSON.stringify(USER_MEAL_VALIDATION_DATA),
        );
        const currentMeal: UserNewMeal = JSON.parse(JSON.stringify(newMeal))
        Object.keys(currentValidation).forEach((key: string) => {
            if(key === "ingredients"){
                currentMeal[key].forEach((product: IngredientType, index: number) => {
                    if(!product.amount){
                        currentValidation['ingredients'][index] = "This field is required"
                        validationPassed = false;
                    }
                })
            }else if(key === 'isIngredient' && !currentMeal['ingredients'].length){
                currentValidation.isIngredient = "Minimum 1 ingredient"
                validationPassed = false;
            }
            else if (!currentMeal[key] && key !== 'isIngredient') {
                currentValidation[key] = "This field is required";
                validationPassed = false;
            }
        })

        setUserMealValidation(currentValidation)
        return validationPassed;
    }

    const handleSubmit = async () => {
        setLoading(true)
        const validationPassed = dataValidation();

        if(validationPassed){
            newMeal['ingredients'].forEach((ingredient) => {
                delete ingredient.id
            })
            await axiosFoodieInstance
              .post(`${ENDPOINTS_MEALS.addMeal}`, newMeal)
              .then((response) => {
                  if (response.status === 201) {
                      setNewMeal(USER_PROFILE_NEW_MEAL)
                      dispatch(
                        setNotification({
                            label: "Add new meal",
                            header: "Success",
                            message: "New meal was created",
                            timeout: 5000,
                        }),
                      );
                  }
              })
              .catch((err) => {
                  const errorMessage = err.response.data?.message
                    ? err.response.data.message
                    : "Cannot add new meal";

                  dispatch(
                    setNotification({
                        label: "new meal",
                        header: "Failed",
                        message: errorMessage,
                        timeout: 5000,
                    }),
                  );
              })
        }
        setLoading(false);
    }

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
                            onChange={(e) => handleOnChange("title", e.target.value)}
                            label='Meal name'
                            value={newMeal.title}
                            error={userMealValidation.title}
                        />
                        <Input
                            placeholder='Type title'
                            onChange={(e) => handleOnChange("servings", e.target.value)}
                            label='servings'
                            type='number'
                            value={newMeal.servings}
                            error={userMealValidation.servings}
                        />
                        <Input
                            placeholder='amount of time to prepare'
                            onChange={(e) => handleOnChange("readyInMinutes", e.target.value)}
                            label='ready in minutes'
                            type='number'
                            value={newMeal.readyInMinutes}
                            error={userMealValidation.readyInMinutes}

                        />
                        <Input
                            placeholder='Type title'
                            onChange={(e) => handleOnChange("imagePath", e.target.value)}
                            label='image'
                            value={newMeal.imagePath}
                            error={userMealValidation.imagePath}

                        />
                    </S.InputRow>
                    <TextArea
                        onChange={(e) => handleOnChange("instructions", e.target.value)}
                        label='description'
                        placeholder='give instructions'
                        value={newMeal.instructions}
                        width='100%'
                        error={userMealValidation.instructions}
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
                        isOpen={Boolean(newMeal.dairyFree)}
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
                            error={userMealValidation.calories}

                        />
                        <Input
                            placeholder='Fat'
                            onChange={(e) => handleOnChange("fat", e.target.value)}
                            label='Fat in grams'
                            type='number'
                            value={newMeal.fat}
                            error={userMealValidation.fat}

                        />
                        <Input
                            placeholder='Proteins'
                            onChange={(e) => handleOnChange("proteins", e.target.value)}
                            label='Proteins in grams'
                            type='number'
                            value={newMeal.proteins}
                            error={userMealValidation.proteins}

                        />
                        <Input
                            placeholder='Carbs'
                            onChange={(e) => handleOnChange("carbs", e.target.value)}
                            label='Carbs  in grams'
                            type='number'
                            value={newMeal.carbs}
                            error={userMealValidation.carbs}

                        />
                    </S.InputRow>
                </S.InputContainer>
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
                    <ScrollBox scrollDistance={40} height={280} mobileScrollDistance={30}>
                        <S.ProductsList>
                            {filteredResults &&
                                filteredResults.map((product) => {
                                    return (
                                        <S.productItem
                                            key={product.name}
                                            isOpen={newMeal.ingredients
                                                .map((item) => item.name)
                                                .includes(product.name)}
                                            onClick={() => handleOnChange("ingredients", product)}
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
                {newMeal.ingredients.map((product, index) => {
                    return (
                        <S.InputContainer key={product.id}>
                            <Label
                                fontSize='1rem'
                                textAlign='center'
                                fontWeight='700'
                                fontFamily='Lato'
                                color={mainTheme.colors.mainBlack}
                            >
                                {product.name}
                            </Label>
                            <S.InputRow key={product.name}>
                                <Input
                                    placeholder='Amount'
                                    onChange={(e) =>
                                        handleOnChange("amount", e.target.value, index)
                                    }
                                    label='Amount'
                                    type='number'
                                    value={newMeal.ingredients[index].amount}
                                    error={userMealValidation.ingredients[index]}

                                />
                                <Select
                                    borderRadius='0'
                                    onChange={(unit: string) => handleOnChange("unit", unit, index)}
                                    value={newMeal.ingredients[index].unit}
                                    width='100%'
                                    label='Unit'
                                    size='medium'
                                >
                                    {UNITS.map((unit: string) => (
                                        <SelectOption
                                            key={unit}
                                            onChange={(unit: string) =>
                                                handleOnChange("unit", unit, index)
                                            }
                                            value={unit}
                                        >
                                            {unit}
                                        </SelectOption>
                                    ))}

                                </Select>
                            </S.InputRow>
                        </S.InputContainer>
                    );
                })}
                {userMealValidation.isIngredient && !newMeal.ingredients.length &&
                  <Label
                  fontSize='1rem'
                  textAlign='center'
                  fontWeight='700'
                  fontFamily='Lato'
                  color={mainTheme.colors.error}
                >
                    {userMealValidation.isIngredient}
                </Label>}
                <Button
                    isLoading={loading}
                    width='12rem'
                    styleType='gradientFull'
                    onClick={handleSubmit}
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
