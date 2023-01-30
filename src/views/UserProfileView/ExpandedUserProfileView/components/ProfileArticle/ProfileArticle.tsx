import { useNavigate } from "react-router-dom";

import { mainTheme } from "../../../../../themes/mainTheme";
import noPhoto from "../../../../../assets/no-photo.jpg";
import { NAVIGATION } from "../../../../../navigation/paths";

import Label from "../../../../../components/UI/Label/Label";
import BoxPad from "../../../../../components/UI/BoxPad/BoxPad";
import RedirectButton from "../../../../../components/UI/RedirectButton/RedirectButton";

import { Post, PostAuthor } from "../../../../../models/Forum/Post";

import * as S from "./ProfileArticlestyle";

type ProfileArticleProps = {
    post: Post;
    author?: PostAuthor;
};

const ProfileArticle = ({ post, author }: ProfileArticleProps) => {
    const navigate = useNavigate();

    return (
        <BoxPad width='100%'>
            <S.Container>
                <img
                    src={post.postImagePath ? post.postImagePath : noPhoto}
                    alt={`Post: ${post.title}`}
                />
                <S.ContentWrapper>
                    <S.Content>
                        <Label
                            fontFamily='Lato'
                            fontSize='20px'
                            fontWeight='600'
                            color={mainTheme.colors.mainBlack}
                        >
                            {post.title}
                        </Label>
                        <Label fontSize='14px' color={mainTheme.colors.inputText}>
                            {post.description}
                        </Label>
                    </S.Content>
                    <S.ActionContainer>
                        <S.AuthorBox>
                            <img src={post?.userImagePath ? post?.userImagePath : noPhoto} />
                            <Label
                                fontSize='16px'
                                fontWeight='600'
                                color={mainTheme.colors.mainBlack}
                            >
                                {!author
                                    ? `${post.author.firstName} ${post.author.lastName}`
                                    : `${author.firstName} ${author.lastName}`}
                            </Label>
                        </S.AuthorBox>

                        <RedirectButton
                            label='Read full article'
                            onClick={() => navigate(`${NAVIGATION.forumPosts}/${post.id}`)}
                        />
                    </S.ActionContainer>
                </S.ContentWrapper>
            </S.Container>
        </BoxPad>
    );
};

export default ProfileArticle;
