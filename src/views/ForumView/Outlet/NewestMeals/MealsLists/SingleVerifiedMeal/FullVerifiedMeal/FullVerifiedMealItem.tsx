import { useDispatch, useSelector } from "react-redux";

import Label from "../../../../../../../components/UI/Label/Label";
import CommentsList from "../../../../../PostsList/PostItem/FullPostItem/CommentsList/CommentsList";
import ActionButton from "../../../../../../../components/UI/ActionButton/ActionButton";
import CheckMark from "../../../../../../../assets/icons/checkMark.svg";
import XIcon from "../../../../../../../assets/icons/XIcon.svg";

import { mainTheme } from "../../../../../../../themes/mainTheme";
import { ReactComponent as Comment } from "../../../../../../../assets/icons/CommentIcon.svg";
import { ReactComponent as HeartEmptyIcon } from "../../../../../../../assets/icons/heart-empty.svg";
import { ReactComponent as HeartFullIcon } from "../../../../../../../assets/icons/heart-full.svg";

import { ingredientsI, recipeViewFullI } from "../../../../../PostsList/const/Posts";

import AddNewVerifiedComment from "./AddNewVerifiedComment/AddNewVerifiedComment";
import axiosFoodieInstance from "../../../../../../../axios/axiosFoodieInstance";
import { setNotification } from "../../../../../../../redux/slices/notification";

import * as S from "./FullVerifiedMealItem.style";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { TStore } from "../../../../../../../redux/store/store";

type FullPostItem = {
    recipe: recipeViewFullI;
    close: () => void;
};

const FullVerifiedMealItem = ({ recipe, close }: FullPostItem) => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const [isLike, setIsLike] = useState(recipe.recipeLikes);
    const user = useSelector((state: TStore) => state?.userReducer);
    useEffect(() => {
        setIsLike(recipe.recipeLikes);
    }, [recipe.recipeLikes]);

    const addLike = () => {
        axiosFoodieInstance
            .get(`/forum/recipe/like/${recipe.recipeView.id}`)
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    dispatch(
                        setNotification({
                            label: "Like post",
                            header: "Success",
                            message: "Like was added",
                            timeout: 5000,
                        }),
                    );
                    queryClient.invalidateQueries(
                        [`forumRecipeVerified-${recipe.recipeView.id}`, recipe.recipeView.id],
                        {
                            refetchType: "all",
                        },
                    );
                    queryClient.invalidateQueries(["getForumPostsMeals"], {
                        refetchType: "all",
                    });
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
                        {recipe.author && recipe.author.firstName && recipe.author.lastName
                            ? `${recipe.author.firstName} ${recipe.author.lastName}`
                            : `user${recipe.author.id}`}
                    </Label>
                </S.Header>
                <Label textAlign='center' fontWeight='600' color={mainTheme.colors.mainBlack}>
                    {recipe.recipeView.title}
                </Label>
                <img src={recipe.recipeView.imagePath} alt='meal image' />
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
                            {recipe.recipeView.calories} calories
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
                <S.LabelContainer>
                    <Label
                        textAlign='center'
                        fontFamily='Montserrat'
                        fontWeight='600'
                        fontSize=' 0.8rem'
                        lineHeight='1rem'
                        color={mainTheme.colors.mainBlack}
                    >
                        Ingredients:
                    </Label>
                </S.LabelContainer>
                {recipe.recipeView.ingredients.map((ingredient: ingredientsI) => {
                    return (
                        <S.Ingredient key={ingredient.name}>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize=' 0.8rem'
                                lineHeight='1rem'
                            >
                                name: {ingredient.name}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize=' 0.8rem'
                                lineHeight='1rem'
                            >
                                Amount: {ingredient.amount}
                            </Label>
                            <Label
                                fontFamily='Montserrat'
                                fontWeight='600'
                                fontSize=' 0.8rem'
                                lineHeight='1rem'
                            >
                                Unit: {ingredient.unit ? ingredient.unit : "grams"}
                            </Label>
                        </S.Ingredient>
                    );
                })}
                <S.Footer>
                    <S.FfirstItem>
                        <S.IconWrapper>
                            <Comment />
                            <Label
                                fontSize='1rem'
                                fontWeight='400'
                                color={mainTheme.colors.mainBlack}
                                textAlign='center'
                            >
                                {recipe.recipeComments?.length}
                            </Label>
                        </S.IconWrapper>
                        <S.IconWrapper>
                            {isLike && user && isLike.find((item) => item.user.id === user.id) ? (
                                <HeartFullIcon onClick={addLike} />
                            ) : (
                                <HeartEmptyIcon onClick={addLike} />
                            )}
                            <Label
                                fontSize='1rem'
                                fontWeight='400'
                                color={mainTheme.colors.mainBlack}
                                textAlign='center'
                            >
                                {recipe.recipeLikes?.length}
                            </Label>
                        </S.IconWrapper>
                    </S.FfirstItem>
                </S.Footer>
            </S.Post>
            <S.Comments>
                <AddNewVerifiedComment id={recipe.recipeView.id} />
                <CommentsList comments={recipe.recipeComments} />
            </S.Comments>
            <S.ClosingContainer>
                <ActionButton type='remove' onClick={close} />
            </S.ClosingContainer>
        </S.Container>
    );
};

export default FullVerifiedMealItem;
