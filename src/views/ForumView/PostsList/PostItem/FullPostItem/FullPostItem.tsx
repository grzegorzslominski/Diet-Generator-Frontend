import Label from "../../../../../components/UI/Label/Label";
import CommentsList from "./CommentsList/CommentsList";
import AddNewComment from "./AddNewComment/AddNewComment";
import ActionButton from "../../../../../components/UI/ActionButton/ActionButton";

import { ReactComponent as Comment } from "../../../../../assets/icons/CommentIcon.svg";
import { mainTheme } from "../../../../../themes/mainTheme";
import { ReactComponent as Heart } from "../../../../../assets/icons/heart.svg";

import { FullPostI } from "../../const/Posts";

import * as S from "./FullPostItem.style";

type FullPostItem = {
    post: FullPostI;
    close: () => void;
};

const FullPostItem = ({ post, close }: FullPostItem) => {
    console.log(post.likesCount)
    return (
        <S.Container>
            <S.Post>
                <S.Header>
                    {post.userProfilePicture ? <img src={post.userProfilePicture} alt='' /> : null}
                    <Label
                        fontSize='1rem'
                        textAlign='center'
                        fontWeight='600'
                        color={mainTheme.colors.mainBlack}
                    >
                        Posted by :
                        {post.author && post.author.firstName && post.author.lastName
                            ? `${post.author.firstName} ${post.author.lastName}`
                            : `user${post.author.id}`}
                    </Label>
                </S.Header>
                <Label textAlign='center'>{post.title}</Label>
                <Label textAlign='center'>{post.description}</Label>
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
                                {post.commentsCount}
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
                                {post.likesCount}
                            </Label>
                        </S.IconWrapper>
                    </S.FfirstItem>
                </S.Footer>
            </S.Post>
            <S.Comments>
                <AddNewComment />
                <CommentsList comments={post.postComments} />
            </S.Comments>
            <S.ClosingContainer>
                <ActionButton type='remove' onClick={close} />
            </S.ClosingContainer>
        </S.Container>
    );
};

export default FullPostItem;
