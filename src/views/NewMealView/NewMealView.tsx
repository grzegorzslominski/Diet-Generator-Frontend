import React, { useState } from "react";
import * as S from "./NewMealView.style";
import Label from "../../components/UI/Label/Label";
import { mainTheme } from "../../themes/mainTheme";
import Input from "../../components/UI/Input/Input";
import { useForm } from "../../hooks/useForm";
import { NewMeal, NewMealType } from "../../models/User/User";
import CheckMark from "../../assets/icons/checkMark.svg";
import XIcon from "../../assets/icons/XIcon.svg";
import TextArea from "../../components/UI/TextArea/TextArea";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/Select";
import SelectOption from "../../components/UI/Select/SelectOption";
const NewMealView = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [vegan, setVegan] = useState<boolean>(false);
    const [vegetarian, setVegetarian] = useState<boolean>(false);
    const [glutenFree, setGlutenFree] = useState<boolean>(false);
    const [dairyFree, setDairyFree] = useState<boolean>(false);
    const [veryHealthy, setVeryHealthy] = useState<boolean>(false);

    const {
      handleSubmit,
      handleChange,
      data: NewMealData,
      errors
    } = useForm<NewMeal>({});
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
                            onChange={handleChange("mealName")}
                            label='Meal name'
                            value={NewMealData.mealName}
                            error={errors.mealName}
                        />
                        <Input
                            placeholder='Type title'
                            onChange={handleChange("servings")}
                            label='servings'
                            value={NewMealData.servings}
                            error={errors.servings}
                        />
                    </S.InputRow>

                    <S.InputRow>
                        <Input
                            placeholder='Type title'
                            onChange={handleChange("readyInMinutes")}
                            label='ready in mintues'
                            value={NewMealData.readyInMinutes}
                            error={errors.readyInMinutes}
                        />
                        <Input
                            placeholder='Type title'
                            onChange={handleChange("image")}
                            label='image'
                            value={NewMealData.image}
                            error={errors.image}
                        />
                    </S.InputRow>
                    <TextArea
                        onChange={handleChange("instructions")}
                        label='description'
                        placeholder='give instructions'
                        value={NewMealData.instructions}
                        error={errors.instructions}
                        width='100%'
                    />
                </S.InputContainer>
                <S.Table>
                    <S.TableItem isOpen={vegetarian} onClick={() => setVegetarian((prev) => !prev)}>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Vegetarian
                        </Label>
                        {vegetarian ? (
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
                    <S.InputRow>
                        <Input
                            placeholder='Type title'
                            onChange={handleChange("mealName")}
                            label='image'
                            value={NewMealData.mealName}
                            error={errors.mealName}
                        />
                      <Select
                        borderRadius='0'
                        onChange={(gender: string) => {}}
                        value="ml"
                        width='90%'
                        label='Gender'
                        size='auto'
                      >
                        {NewMealType.map((mealType: string) => (
                          <SelectOption
                            key={mealType}
                            onChange={(gender: string) => {}}
                            value="ml"
                          >
                            {mealType}
                          </SelectOption>
                        ))}
                      </Select>
                        <Input
                            placeholder='Type title'
                            onChange={handleChange("mealName")}
                            label='image'
                            value={NewMealData.mealName}
                            error={errors.mealName}
                        />
                        <Input
                            placeholder='Type title'
                            onChange={handleChange("mealName")}
                            label='image'
                            value={NewMealData.mealName}
                            error={errors.mealName}
                        />
                        <Input
                            placeholder='Type title'
                            onChange={handleChange("mealName")}
                            label='image'
                            value={NewMealData.mealName}
                            error={errors.mealName}
                        />
                    </S.InputRow>
                </S.InputContainer>
                <Button
                    isLoading={isLoading}
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
