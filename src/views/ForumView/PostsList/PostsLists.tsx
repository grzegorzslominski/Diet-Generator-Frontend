import React from "react";
import * as S from "./PostsList.style";
import { Posts } from "./const/Posts";
import PostItem from "./PostItem/PostItem";
const PostsLists = () => {
    return (
        <S.Container>
            {Posts.map((item) => {
                return (
                    <PostItem
                        key={item.id}
                        id={item.id}
                        userName={item.userName}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        comments={item.comments}
                    />
                );
            })}
        </S.Container>
    );
};

export default PostsLists;
