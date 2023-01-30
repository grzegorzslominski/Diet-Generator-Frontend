import PostItem from "./PostItem/PostItem";

import { Post } from "./const/Posts";

import * as S from "./PostsList.style";

type PostsListsProps = {
    basicPosts: Post[];
    postID?: string;
};

const PostsLists = ({ basicPosts, postID }: PostsListsProps) => {
    return (
        <S.Container>
            {basicPosts.map((item: Post) => {
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
