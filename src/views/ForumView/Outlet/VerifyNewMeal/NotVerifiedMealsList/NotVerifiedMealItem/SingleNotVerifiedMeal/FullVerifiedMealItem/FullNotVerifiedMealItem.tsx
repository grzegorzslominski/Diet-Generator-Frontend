import React, { useState } from "react";
import * as S from "./FullNotVerifiedMealItem.style";
import Label from "../../../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../../../themes/mainTheme";
import { ReactComponent as Comment } from "../../../../../../../../assets/icons/CommentIcon.svg";
import { ReactComponent as Heart } from "../../../../../../../../assets/icons/heart.svg";
import ActionButton from "../../../../../../../../components/UI/ActionButton/ActionButton";
import { recipeViewFullI } from "../../../../../../PostsList/const/Posts";
import CheckMark from "../../../../../../../../assets/icons/checkMark.svg";
import XIcon from "../../../../../../../../assets/icons/XIcon.svg";
import Button from "../../../../../../../../components/UI/Button/Button";
import { useDispatch } from "react-redux";
import axiosFoodieInstance from "../../../../../../../../axios/axiosFoodieInstance";
import { ENDPOINTS_FORUM } from "../../../../../../../../navigation/endpoints";
import { setNotification } from "../../../../../../../../redux/slices/notification";

type FullPostItem = {
    recipe: recipeViewFullI;
    close: () => void;
};

const FullNotVerifiedMealItem = ({ recipe, close }: FullPostItem) => {
    const dispatch = useDispatch();
    const [isLoading,setIsLoading] = useState(false);
    const verifyNotVerifiedMeal = () => {
        setIsLoading(true);

        axiosFoodieInstance
          .get(`${ENDPOINTS_FORUM.verifyMeal}/${recipe.recipeView.id}`)
          .then((response) => {
              if(response.status === 200){
                  dispatch(
                    setNotification({
                        label: "unverified meal",
                        header: "Success",
                        message: "meal was verified",
                        timeout: 5000,
                    }),
                  );
              }
          })
          .catch((err) => {
              const errorMessage = err.response.data?.message
                ? err.response.data.message
                : "Cannot verify meal";

              dispatch(
                setNotification({
                    label: "unverified meal",
                    header: "Failed",
                    message: errorMessage,
                    timeout: 5000,
                }),
              );
          })
          .finally(() => {
              setIsLoading(false);
          });
    }
    return (
        <S.Container>
            <S.Post>
                <S.Header>
                    {recipe.userProfilePicture ? (
                        <img src={recipe.userProfilePicture} alt='' />
                    ) : null}
                    <Label
                        fontSize='1rem'
                        textAlign='center'
                        fontWeight='600'
                        color={mainTheme.colors.mainBlack}
                    >
                        Posted by :
                        {recipe.author && recipe.author.firstName && recipe.author.lastName
                            ? `${recipe.author.firstName} ${recipe.author.lastName}`
                            : `user${recipe.author.id}`}
                    </Label>
                </S.Header>
                <Label textAlign='center' fontWeight='600' color={mainTheme.colors.mainBlack}>
                    {recipe.recipeView.title}
                </Label>
                <Label textAlign='center'>{recipe.recipeView.instructions}</Label>
                <S.Table>
                    <S.TableItem isOpen={recipe.recipeView.vegetarian}>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Vegetarian
                        </Label>
                        {recipe.recipeView.vegetarian ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='XIcon' />
                        )}
                    </S.TableItem>
                    <S.TableItem isOpen={recipe.recipeView.vegan}>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Vegan
                        </Label>
                        {recipe.recipeView.vegan ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='XIcon' />
                        )}
                    </S.TableItem>
                    <S.TableItem isOpen={recipe.recipeView.glutenFree}>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Gluten free
                        </Label>
                        {recipe.recipeView.glutenFree ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='XIcon' />
                        )}
                    </S.TableItem>
                    <S.TableItem isOpen={recipe.recipeView.dairyFree}>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Dairy free
                        </Label>
                        {recipe.recipeView.dairyFree ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='XIcon' />
                        )}
                    </S.TableItem>
                    <S.TableItem isOpen={recipe.recipeView.veryHealthy}>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Healthy
                        </Label>
                        {recipe.recipeView.veryHealthy ? (
                            <img src={CheckMark} alt='checkMark' />
                        ) : (
                            <img src={XIcon} alt='XIcon' />
                        )}
                    </S.TableItem>
                </S.Table>
                <S.Servings>
                    <Label
                        textAlign='center'
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize=' 0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                    >
                        Servings: {recipe.recipeView.servings}
                    </Label>
                    <Label
                        textAlign='center'
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize=' 0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                    >
                        Ready in minutes: {recipe.recipeView.readyInMinutes}
                    </Label>
                </S.Servings>
                <S.Table>
                    <S.TableUnits>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Calories
                        </Label>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            {recipe.recipeView.calories} kcal
                        </Label>
                    </S.TableUnits>
                    <S.TableUnits>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Carbs
                        </Label>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            {recipe.recipeView.carbs} g
                        </Label>
                    </S.TableUnits>
                    <S.TableUnits>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Fat
                        </Label>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            {recipe.recipeView.fat} g
                        </Label>
                    </S.TableUnits>
                    <S.TableUnits>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            Proteins
                        </Label>
                        <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize=' 0.8rem'
                            lineHeight='1rem'
                            color={mainTheme.colors.mainBlack}
                        >
                            {recipe.recipeView.protein} g
                        </Label>
                    </S.TableUnits>
                </S.Table>
                <S.Footer>
                    <Button
                        width='80px'
                        styleType='primaryFull'
                        fontSize='0.8rem'
                        size='small'
                        background={mainTheme.gradients.buttonGradient}
                        onClick={verifyNotVerifiedMeal}
                        isLoading={isLoading}
                    >
                        <Label
                            textAlign='center'
                            color={mainTheme.colors.mainBlack}
                            fontSize='0.8rem'
                            fontWeight='400'
                        >
                            Verify meal
                        </Label>
                    </Button>
                </S.Footer>
            </S.Post>
            <S.ClosingContainer>
                <ActionButton type='remove' onClick={close} />
            </S.ClosingContainer>
        </S.Container>
    );
};

export default FullNotVerifiedMealItem;
