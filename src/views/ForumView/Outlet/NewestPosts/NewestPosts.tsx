import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";
import { getForumPosts } from "../../PostsList/const/Posts";

import PostsLists from "../../PostsList/PostsLists";
import RightSection from "./RightSection/RightSection";
import Spinner from "../../../../components/UI/Spinner/Spinner";

import * as S from "./NewestPosts.style";

const NewestPosts = () => {
    const { postID } = useParams();

    const { data: basicPosts, isLoading } = useQuery(["forumPosts"], () => getForumPosts());

    return (
        <S.Container>
            {isLoading ? (
                <Spinner size='big' color='secondary' />
            ) : (
                basicPosts && (
                    <>
                        <S.Posts>
                            <PostsLists basicPosts={basicPosts} postID={postID} />
                        </S.Posts>
                        <RightSection basicPosts={basicPosts} />
                        <Outlet />
                    </>
                )
            )}
        </S.Container>
    );
};

export default NewestPosts;
