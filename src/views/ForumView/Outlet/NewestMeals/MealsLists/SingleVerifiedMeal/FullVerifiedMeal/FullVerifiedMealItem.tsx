import React from "react";
import * as S from "../../../../../PostsList/PostItem/FullPostItem/FullPostItem.style";
import Label from "../../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../../themes/mainTheme";
import { ReactComponent as Comment } from "../../../../../../../assets/icons/CommentIcon.svg"
import { ReactComponent as Heart } from "../../../../../../../assets/icons/heart.svg"
import CommentsList from "../../../../../PostsList/PostItem/FullPostItem/CommentsList/CommentsList";
import ActionButton from "../../../../../../../components/UI/ActionButton/ActionButton";
import {  recipeViewFullI } from "../../../../../PostsList/const/Posts";
import CheckMark from "../../../../../../../assets/icons/checkMark.svg";
import XIcon from "../../../../../../../assets/icons/XIcon.svg";
import AddNewVerifiedComment from "./AddNewVerifiedComment/AddNewVerifiedComment";
import axiosFoodieInstance from "../../../../../../../axios/axiosFoodieInstance";
import { setNotification } from "../../../../../../../redux/slices/notification";
import { useDispatch } from "react-redux";


type FullPostItem = {
  recipe: recipeViewFullI;
  close: () => void;
};

const FullVerifiedMealItem = ({ recipe, close }: FullPostItem) => {
  const dispatch = useDispatch();

  const addLike = () => {
    axiosFoodieInstance.get(`/forum/recipe/like/${recipe.recipeView.id}`)
      .then((response) => {
        if (response.status === 201) {
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
      })
  }
  return (
    <S.Container>
      <S.Post>
        <S.Header>
          {recipe.userProfilePicture ? <img src={recipe.userProfilePicture} alt='' /> : null}
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
        <Label
          textAlign='center'
          fontWeight='600'
          color={mainTheme.colors.mainBlack}>
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
          <S.TableItem isOpen={recipe.recipeView.glutenFree }>
            <Label
              fontFamily='Montserrat'
              fontWeight='600'
              fontSize=' 0.8rem'
              lineHeight='1rem'
              color={mainTheme.colors.mainBlack}
            >
              Gluten free
            </Label>
            {recipe.recipeView.glutenFree? (
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
            {recipe.recipeView.dairyFree  ? (
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
        >Servings: {recipe.recipeView.servings}
        </Label>
          <Label
            textAlign='center'
            fontFamily='Montserrat'
            fontWeight='600'
            fontSize=' 0.8rem'
            lineHeight='1rem'
            color={mainTheme.colors.mainBlack}
          >Ready in minutes: {recipe.recipeView.readyInMinutes}
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
              <Heart onClick={addLike}/>
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
        <AddNewVerifiedComment id={recipe.recipeView.id}/>
        <CommentsList comments={recipe.recipeComments} />
      </S.Comments>
      <S.ClosingContainer>
        <ActionButton type='remove' onClick={close} />
      </S.ClosingContainer>
    </S.Container>
  );
};

export default FullVerifiedMealItem;