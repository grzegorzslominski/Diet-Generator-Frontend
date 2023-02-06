import PostItem from "./PostItem/PostItem";

import { Post } from "../../../../models/Forum/Post";
import { User } from "../../../../models/User/User";

import * as S from "./ForumPostsList.style";

type ForumPostsListProps = {
    user: User;
    posts: Post[];
};

const ForumPostsList = ({ user, posts }: ForumPostsListProps) => {
    return (
        <S.Container>
            {posts.map((item: Post) => {
                return <PostItem key={item.id} post={item} />;
            })}
        </S.Container>
    );
};

export default ForumPostsList;
