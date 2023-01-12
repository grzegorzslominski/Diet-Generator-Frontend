import React, { useState } from "react";
import { BasicPostI, recipeVerifiedBasicI } from "../../../../PostsList/const/Posts";
import * as S from "./MealItem.style";
import Label from "../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../themes/mainTheme";
import { ReactComponent as Comment } from "../../../../../../assets/icons/CommentIcon.svg";
import { ReactComponent as Heart } from "../../../../../../assets/icons/heart.svg";
import Button from "../../../../../../components/UI/Button/Button";
import SingleVerifiedMeal from "../SingleVerifiedMeal/SingleVerifiedMeal";

const MealItem = ({
  id,
  title,
  timestamp,
  author,
  userProfilePicture,
  description,
  commentsCount,
  likesCount,
}: recipeVerifiedBasicI) => {
  const [openModal, setOpenModal] = useState(false);

  const handleChangeOpenModal = () => setOpenModal((prev) => !prev);

  return (
    <S.Container>
      <S.Header>
        {userProfilePicture ? <img src={userProfilePicture} alt='' /> : null}

        <Label
          fontSize='1rem'
          textAlign='center'
          fontWeight='600'
          color={mainTheme.colors.mainBlack}
        >
          Posted by :
          {author && author.firstName && author.lastName
            ? `${author.firstName} ${author.lastName}`
            : `user${author.id}`}
        </Label>
      </S.Header>
      <S.Title>
        <Label
          textAlign='center'
          fontSize='1rem'
          fontWeight='400'
          color={mainTheme.colors.mainBlack}
        >
          {title}
        </Label>
      </S.Title>
      <S.Description>
        <Label
          textAlign='center'
          width='80%'
          fontSize='0.8rem'
          fontWeight='400'
          color={mainTheme.colors.mainBlack}
        >
          {description}
        </Label>
      </S.Description>
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
              {commentsCount}
            </Label>
          </S.IconWrapper>
          <S.IconWrapper>
            <Heart />
            <Label
              fontSize='1rem'
              fontWeight='400'
              color={mainTheme.colors.mainBlack}
              textAlign='center'
            >
              {likesCount}
            </Label>
          </S.IconWrapper>
        </S.FfirstItem>
        <S.FsecondItem>
          <Button
            width='80px'
            styleType='primaryFull'
            fontSize='0.8rem'
            size='extraSmall'
            background={mainTheme.gradients.buttonGradient}
            onClick={() => handleChangeOpenModal()}
          >
            <Label
              textAlign='center'
              color={mainTheme.colors.mainBlack}
              fontSize='0.8rem'
              fontWeight='400'
            >
              Join
            </Label>
          </Button>
        </S.FsecondItem>
      </S.Footer>
      {openModal ? <SingleVerifiedMeal id={id} close={handleChangeOpenModal} /> : null}
    </S.Container>
  );
};

export default MealItem;