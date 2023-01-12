import React, { useState } from "react";
import * as S from "./NewMealView.style";
import Label from "../../components/UI/Label/Label";
import { mainTheme } from "../../themes/mainTheme";
import Input from "../../components/UI/Input/Input";
import { useForm } from "../../hooks/useForm";
import { NewMeal, UNITS } from "../../models/User/User";
import CheckMark from "../../assets/icons/checkMark.svg";
import XIcon from "../../assets/icons/XIcon.svg";
import TextArea from "../../components/UI/TextArea/TextArea";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/Select";
import SelectOption from "../../components/UI/Select/SelectOption";
import { BASIC_NEW_INGREDIENT, Ingredient, USER_PROFILE_NEW_MEAL, UserNewMeal } from "../../models/User/UserForm";

const NewMealView = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [vegan, setVegan] = useState<boolean>(false);
    const [glutenFree, setGlutenFree] = useState<boolean>(false);
    const [dairyFree, setDairyFree] = useState<boolean>(false);
    const [veryHealthy, setVeryHealthy] = useState<boolean>(false);

    const [testValue, setTestValue] = useState<string>();
    const [newMeal, setNewMeal] = useState<UserNewMeal>(
      USER_PROFILE_NEW_MEAL,
    )
    const handleAddNewIngredient = () => {
        const currentMeal: UserNewMeal = JSON.parse(JSON.stringify(newMeal));
        currentMeal.ingredients.push(BASIC_NEW_INGREDIENT)

        setNewMeal(currentMeal)

    }

    const handleOnChange = (property: string, value: any, index?: number) => {
        const currentMeal: UserNewMeal = JSON.parse(JSON.stringify(newMeal));
        if(index !== undefined){
            currentMeal.ingredients[index][property] = value;
            console.log(currentMeal.ingredients[index][property]);
        }else {
            currentMeal[property] = value
        }


        setNewMeal(currentMeal)
        // console.log(newMeal)
    }
    const handleTestChange = (value: string) => {
        setTestValue(value);
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
                        onChange={(e) => handleOnChange("mealName",e.target.value)}
                        label='Meal name'
                        value={newMeal.mealName}
                      />
                      <Input
                        placeholder='Type title'
                        onChange={(e) => handleOnChange("servings",e.target.value)}
                        label='servings'
                        value={newMeal.servings}
                      />
                  </S.InputRow>
                  <S.InputRow>
                      <Input
                        placeholder='amount of time to prepare'
                        onChange={(e) => handleOnChange("readyInMinutes",e.target.value)}
                        label='ready in minutes'
                        type='number'
                        value={newMeal.readyInMinutes}
                      />
                      <Input
                        placeholder='Type title'
                        onChange={(e) => handleOnChange("image",e.target.value)}
                        label='image'
                        value={newMeal.image}
                      />
                  </S.InputRow>
                  <TextArea
                    onChange={(e) => handleOnChange("instructions",e.target.value)}
                    label='description'
                    placeholder='give instructions'
                    value={newMeal.instructions}
                    width='100%'
                  />
              </S.InputContainer>
              <S.Table>
                  <S.TableItem isOpen={newMeal.vegetarian} onClick={() => handleOnChange("vegetarian", !newMeal.vegetarian)}>
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
                  <S.TableItem isOpen={vegan} onClick={() => setVegan((prev) => !prev)}>
                      <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize='0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                      >
                          Vegan
                      </Label>
                      {vegan ? (
                        <img src={CheckMark} alt='checkMark' />
                      ) : (
                        <img src={XIcon} alt='checkMark' />
                      )}
                  </S.TableItem>
                  <S.TableItem isOpen={glutenFree} onClick={() => setGlutenFree((prev) => !prev)}>
                      <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize='0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                      >
                          Gluten free
                      </Label>
                      {glutenFree ? (
                        <img src={CheckMark} alt='checkMark' />
                      ) : (
                        <img src={XIcon} alt='checkMark' />
                      )}
                  </S.TableItem>
                  <S.TableItem isOpen={dairyFree} onClick={() => setDairyFree((prev) => !prev)}>
                      <Label
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize='0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                      >
                          Dairy free
                      </Label>
                      {dairyFree ? (
                        <img src={CheckMark} alt='checkMark' />
                      ) : (
                        <img src={XIcon} alt='checkMark' />
                      )}
                  </S.TableItem>
                  <S.TableItem
                    isOpen={veryHealthy}
                    onClick={() => setVeryHealthy((prev) => !prev)}
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
                      {veryHealthy ? (
                        <img src={CheckMark} alt='checkMark' />
                      ) : (
                        <img src={XIcon} alt='checkMark' />
                      )}
                  </S.TableItem>
              </S.Table>
              <S.InputContainer>
                  <S.InputRowForUnits>
                      <Input
                        placeholder='Calories'
                        onChange={(e) => handleOnChange("calories",e.target.value)}
                        label='Calories'
                        value={newMeal.calories}
                      />
                      <Select
                        borderRadius='0'
                        onChange={(value: string) => handleTestChange(value)}
                        value={testValue}
                        width='90%'
                        label='Unit'
                      >
                          {UNITS.map((unit: string) => (
                            <SelectOption
                              key={unit}
                              onChange={(value: string) => handleTestChange(value)}
                              value={unit}
                            >
                                {unit}
                            </SelectOption>
                          ))}
                      </Select>
                  </S.InputRowForUnits>
                  <S.InputRowForUnits>
                      <Input
                        placeholder='Carbs'
                        onChange={(e) => handleOnChange("carbs",e.target.value)}
                        label='Carbs'
                        value={newMeal.carbs}
                      />
                      <Select
                        borderRadius='0'
                        onChange={(value: string) => handleTestChange(value)}
                        value={testValue}
                        width='90%'
                        label='Unit'
                      >
                          {UNITS.map((unit: string) => (
                            <SelectOption
                              key={unit}
                              onChange={(value: string) => handleTestChange(value)}
                              value={unit}
                            >
                                {unit}
                            </SelectOption>
                          ))}
                      </Select>
                  </S.InputRowForUnits>
                  <S.InputRowForUnits>
                      <Input
                        placeholder='Fat'
                        onChange={(e) => handleOnChange("fat",e.target.value)}
                        label='Fat'
                        value={newMeal.fat}
                      />
                      <Select
                        borderRadius='0'
                        onChange={(value: string) => handleTestChange(value)}
                        value={testValue}
                        width='90%'
                        label='Unit'
                      >
                          {UNITS.map((unit: string) => (
                            <SelectOption
                              key={unit}
                              onChange={(value: string) => handleTestChange(value)}
                              value={unit}
                            >
                                {unit}
                            </SelectOption>
                          ))}
                      </Select>
                  </S.InputRowForUnits>
                  <S.InputRowForUnits>
                      <Input
                        placeholder='Proteins'
                        onChange={(e) => handleOnChange("proteins",e.target.value)}
                        label='Proteins'
                        value={newMeal.proteins}
                      />
                      <Select
                        borderRadius='0'
                        onChange={(value: string) => handleTestChange(value)}
                        value={testValue}
                        width='90%'
                        label='Unit'
                      >
                          {UNITS.map((unit: string) => (
                            <SelectOption
                              key={unit}
                              onChange={(value: string) => handleTestChange(value)}
                              value={unit}
                            >
                                {unit}
                            </SelectOption>
                          ))}
                      </Select>
                  </S.InputRowForUnits>
              </S.InputContainer>
              <Button
                width='12rem'
                styleType='gradientFull'
                onClick={handleAddNewIngredient}
                borderRadius='15px'
                fontSize='1rem'
                size='small'
              >Add new ingredient
              </Button>
              {
                  newMeal.ingredients.map((ingredient: Ingredient, index) => {
                      return  <S.InputRowForUnits key={index}>
                          <Input
                            placeholder='ingredient'
                            onChange={(e) => handleOnChange("name",e.target.value,index)}
                            label='Ingredients'
                            value={newMeal.ingredients[index].name}
                          />
                          <Input
                            placeholder='amount'
                            onChange={(e) => handleOnChange("amount",e.target.value,index)}
                            label='Amount'
                            value={newMeal.ingredients[index].amount}
                          />
                          <Select
                            borderRadius='0'
                            onChange={(value: string) =>handleOnChange("unit",value,index)}
                            value={newMeal.ingredients[index].unit}
                            width='90%'
                            label='Unit'
                          >
                              {UNITS.map((unit: string) => (
                                <SelectOption
                                  key={unit}
                                  onChange={(value: string) =>handleOnChange("unit",value,index)}
                                  value={newMeal.ingredients[index].unit}
                                >
                                    {newMeal.ingredients[index].unit}
                                </SelectOption>
                              ))}
                          </Select>

                      </S.InputRowForUnits>
                  })
              }
              <Button
                isLoading={isLoading}
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
