import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams } from "react-router-dom";
import { getForumPosts } from "../../PostsList/const/Posts";

import PostsLists from "../../PostsList/PostsLists";
import RightSection from "../RightSection/RightSection";

import * as S from "./NewestPosts.style";

const NewestPosts = () => {
    const { postID } = useParams();

    const { data: basicPosts, isLoading, error } = useQuery(["forumPosts"], () => getForumPosts());

    return (
        <S.Container>
            {basicPosts ? (
                <>
                    <S.Posts>
                        <PostsLists basicPosts={basicPosts} />
                    </S.Posts>
                    <RightSection basicPosts={basicPosts} />
                    <Outlet />
                </>
            ) : null}
        </S.Container>
    );
};

export default NewestPosts;
