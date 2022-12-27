import React from "react";
import * as S from "./PostsList.style";
import { PostsI } from "./const/Posts";
import PostItem from "./PostItem/PostItem";
import { LinksContainer } from "../../../components/Footer/Footer.style";

interface props {
    data: PostsI[]
}
const PostsLists = ({data}: props) => {
    return (
        <S.Container>
            {data.map((item: PostsI) => {
                return (
                    <PostItem
                        key={item.id}
                        id={item.id}
                        userName={item.userName}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        likes={item.likes}
                        comments={item.comments}
                    />
                );
            })}
        </S.Container>
    );
};

export default PostsLists;
