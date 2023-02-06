import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

import { getForumPosts } from "../../../models/Forum/Forum";

import RightSection from "./RightSection/RightSection";
import ForumPostsList from "./ForumPostsList/ForumPostsList";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ViewBox from "../../../components/UI/ViewBox/ViewBox";

import { User } from "../../../models/User/User";

import * as S from "./PostsSection.style";

type PostsSectionProps = {
    user: User;
};

const PostsSection = ({ user }: PostsSectionProps) => {
    const { data: posts, isLoading } = useQuery(["forumPosts"], () => getForumPosts());

    return (
        <ViewBox>
            <S.Container>
                {isLoading ? (
                    <Spinner size='big' color='secondary' />
                ) : (
                    posts && (
                        <>
                            <ForumPostsList posts={posts} user={user} />
                            <RightSection
                                mostLikedPost={
                                    posts.sort((a, b) => b.postLikes.length - a.postLikes.length)[0]
                                }
                            />
                            <Outlet />
                        </>
                    )
                )}
            </S.Container>
        </ViewBox>
    );
};

export default PostsSection;
