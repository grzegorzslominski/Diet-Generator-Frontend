import PostItem from "./PostItem/PostItem";

import { BasicPostI } from "./const/Posts";

import * as S from "./PostsList.style";

type PostsListsProps = {
    basicPosts: BasicPostI[];
    postID?: string;
};

const PostsLists = ({ basicPosts, postID }: PostsListsProps) => {
    return (
        <S.Container>
            {basicPosts.map((item: BasicPostI) => {
                return (
                    <PostItem
                        key={item.id}
                        post={item}
                        openPost={postID && item.id === +postID ? true : false}
                    />
                );
            })}
        </S.Container>
    );
};

export default PostsLists;
