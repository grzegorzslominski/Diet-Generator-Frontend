import PostItem from "./PostItem/PostItem";

import { BasicPostI } from "./const/Posts";

import * as S from "./PostsList.style";

interface props {
    basicPosts: BasicPostI[];
}

const PostsLists = ({ basicPosts }: props) => {
    return (
        <S.Container>
            {basicPosts.map((item: BasicPostI) => {
                return (
                    <PostItem
                        key={item.id}
                        id={item.id}
                        author={item.author}
                        title={item.title}
                        description={item.description}
                        userProfilePicture={item.userProfilePicture}
                        likesCount={item.likesCount}
                        commentsCount={item.commentsCount}
                        timestamp={item.timestamp}
                    />
                );
            })}
        </S.Container>
    );
};

export default PostsLists;
