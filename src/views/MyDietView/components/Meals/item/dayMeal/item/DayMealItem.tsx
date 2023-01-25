import React, { useState } from "react";
import * as S from "./DayMealItem.style";
import Label from "../../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../../themes/mainTheme";
import PieChart from "./chart/PieChart";
import { ReactComponent as HeartEmptyIcon } from "../../../../../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../../../../../assets/icons/heart-full.svg";
import { ReactComponent as Info } from "../../../../../../../assets/icons/infoIcon.svg";
import ModalPortal from "../../../../../../../components/UI/ModalPortal/ModalPortal";
import DayMealDetailsItem from "./DayMealDetailsItem/DayMealDetailsItem";
import { RecipeIngredientsI } from "../../../const/meal";
import axiosFoodieInstance from "../../../../../../../axios/axiosFoodieInstance";
import { useDispatch } from "react-redux";
import { setNotification } from "../../../../../../../redux/slices/notification";

const DayMealItem = ({
    id,
    title,
    servings,
    readyInMinutes,
    imagePath,
    instructions,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    veryHealthy,
    verified,
    calories,
    carbs,
    fat,
    protein,
    recipesIngredients,
    recipeLikes,
    loggedUserID,
}: RecipeIngredientsI) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleIsOpen = () => setIsOpen((current) => !current);
    const [isLike, setIsLike] = useState(recipeLikes);
    const dispatch = useDispatch();
    const addLike = () => {
        axiosFoodieInstance
            .get(`/forum/recipe/like/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(
                        setNotification({
                            label: "Like post",
                            header: "Success",
                            message: "Like was added",
                            timeout: 5000,
                        }),
                    );
                }
            })
            .catch((err) => {
                const errorMessage = err.response.data?.message
                    ? err.response.data.message
                    : "Cannot add like";

                dispatch(
                    setNotification({
                        label: "add like to post",
                        header: "Failed",
                        message: errorMessage,
                        timeout: 5000,
                    }),
                );
            });
    };

    return (
        <S.Container>
            <S.Content>
                <img src={imagePath} alt='image' />
                <S.SecondItem>
                    <S.LabelsContainer>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='1.25rem'
                            lineHeight='1.5rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            {title}
                        </Label>
                    </S.LabelsContainer>
                    <S.SecondItemsContent>
                        <S.SecondSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                lineHeight='0.75rem'
                                textAlign='center'
                                fontSize='0.7rem'
                                color={mainTheme.colors.mainBlack}
                            >
                                Calories
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize='0.6rem'
                                lineHeight='1rem'
                                textAlign='center'
                                color={mainTheme.colors.mainBlack}
                            >
                                {calories}
                            </Label>
                            <S.FooterCalories />
                        </S.SecondSingleItem>
                        <S.SecondSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                lineHeight='0.75rem'
                                textAlign='center'
                                fontSize='0.7rem'
                                color={mainTheme.colors.mainBlack}
                            >
                                Proteins
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize='0.6rem'
                                lineHeight='1rem'
                                textAlign='center'
                                color={mainTheme.colors.mainBlack}
                            >
                                {protein}
                            </Label>
                            <S.FooterProteins />
                        </S.SecondSingleItem>
                        <S.SecondSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                lineHeight='0.75rem'
                                textAlign='center'
                                fontSize='0.7rem'
                                color={mainTheme.colors.mainBlack}
                            >
                                Carbs
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize='0.6rem'
                                lineHeight='1rem'
                                textAlign='center'
                                color={mainTheme.colors.mainBlack}
                            >
                                {carbs}
                            </Label>
                            <S.FooterCarbs />
                        </S.SecondSingleItem>
                        <S.SecondSingleItem>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                lineHeight='0.75rem'
                                textAlign='center'
                                fontSize='0.7rem'
                                color={mainTheme.colors.mainBlack}
                            >
                                Fat
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize='0.6rem'
                                lineHeight='1rem'
                                textAlign='center'
                                color={mainTheme.colors.mainBlack}
                            >
                                {fat}
                            </Label>
                            <S.FooterFat />
                        </S.SecondSingleItem>
                    </S.SecondItemsContent>
                </S.SecondItem>
                <S.ThirdAndForthContent>
                    <PieChart protein={protein} carbs={carbs} fat={fat} />
                    <S.ThirdItemContainer>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.7rem'
                            lineHeight='1rem'
                            color='white'
                        >
                            Basic ingredients:
                        </Label>
                        <S.ThirdItemUl>
                            {recipesIngredients.slice(0, 3).map((item, index: number) => {
                                return (
                                    <S.ThirdItemLi key={index}>
                                        <Label
                                            fontFamily='Montserrat'
                                            fontWeight='500'
                                            fontSize='0.7rem'
                                            lineHeight='0.9rem'
                                            color='white'
                                        >
                                            {item.name}
                                        </Label>
                                    </S.ThirdItemLi>
                                );
                            })}
                        </S.ThirdItemUl>
                    </S.ThirdItemContainer>
                </S.ThirdAndForthContent>
                <S.FourthContainer>
                    <S.FourthContainerItem>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='400'
                            fontSize='1.2rem'
                            lineHeight='0.9rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            {recipeLikes ? recipeLikes.length : 0}
                        </Label>
                        {isLike && isLike.find((item) => item.user.id === loggedUserID) ? (
                            <HeartFullIcon onClick={addLike} />
                        ) : (
                            <HeartEmptyIcon onClick={addLike} />
                        )}
                        <Info onClick={handleIsOpen} />
                    </S.FourthContainerItem>
                </S.FourthContainer>
            </S.Content>
            {isOpen ? (
                <ModalPortal close={handleIsOpen}>
                    <DayMealDetailsItem
                        close={() => setIsOpen(false)}
                        key={id}
                        id={id}
                        title={title}
                        servings={servings}
                        readyInMinutes={readyInMinutes}
                        imagePath={imagePath}
                        instructions={instructions}
                        vegetarian={vegetarian}
                        vegan={vegan}
                        glutenFree={glutenFree}
                        dairyFree={dairyFree}
                        veryHealthy={veryHealthy}
                        verified={verified}
                        calories={calories}
                        carbs={carbs}
                        fat={fat}
                        protein={protein}
                        recipesIngredients={recipesIngredients}
                    />
                </ModalPortal>
            ) : null}
        </S.Container>
    );
};

export default DayMealItem;
