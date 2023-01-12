import { useState } from "react";

import { mainTheme } from "../../../../themes/mainTheme";
import { ReactComponent as Heart } from "../../../../assets/icons/heart.svg";
import { ReactComponent as Comment } from "../../../../assets/icons/CommentIcon.svg";

import Label from "../../../../components/UI/Label/Label";
import Button from "../../../../components/UI/Button/Button";

import { BasicPostI } from "../const/Posts";

import * as S from "./PostItem.style";
import SinglePostItem from "../SinglePostItem/SinglePostItem";
import axiosFoodieInstance from "../../../../axios/axiosFoodieInstance";
import { setNotification } from "../../../../redux/slices/notification";
import { useDispatch } from "react-redux";

const PostItem = ({
    id,
    title,
    timestamp,
    author,
    userProfilePicture,
    description,
    commentsCount,
    likesCount,
}: BasicPostI) => {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();
    const addLike = () => {
        axiosFoodieInstance.get(`/forum/post/like/${id}`)
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
                        <Heart onClick={addLike}/>
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
            {openModal ? <SinglePostItem id={id} close={handleChangeOpenModal} /> : null}
        </S.Container>
    );
};

export default PostItem;
