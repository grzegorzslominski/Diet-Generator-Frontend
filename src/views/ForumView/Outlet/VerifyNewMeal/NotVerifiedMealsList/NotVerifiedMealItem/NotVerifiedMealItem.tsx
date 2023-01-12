import React, { useState } from "react";
import {
    recipeNotVerifiedBasicI,
} from "../../../../PostsList/const/Posts";
import * as S from "./NotVerifiedMealItem.style";
import Label from "../../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../../themes/mainTheme";
import Button from "../../../../../../components/UI/Button/Button";
import SingleNotVerifiedMeal from "./SingleNotVerifiedMeal/SingleNotVerifiedMeal";

const MealItem = ({
    id,
    title,
    timestamp,
    author,
    userProfilePicture,
    description,
    commentsCount,
    likesCount,
}: recipeNotVerifiedBasicI) => {
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
            {openModal ? <SingleNotVerifiedMeal id={id} close={handleChangeOpenModal} /> : null}
        </S.Container>
    );
};

export default MealItem;
