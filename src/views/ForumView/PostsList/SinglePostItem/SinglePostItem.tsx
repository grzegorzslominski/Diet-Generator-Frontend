import React from "react";
import ModalPortal from "../../../../components/UI/ModalPortal/ModalPortal";
import FullPostItem from "../PostItem/FullPostItem/FullPostItem";
import { PostsI, Posts } from "../const/Posts";
import { useNavigate, useParams } from "react-router-dom";

interface props {
    path: string;
    list: PostsI[];
}
const SinglePostItem = ({ list, path }: props) => {
    const { postId } = useParams();
    const post = list.find((item) => item.id === postId);
    const navigate = useNavigate();

    const handleIsOpen = () => {
        navigate(path);
    };
    if (!post) return null;
    return (
        <ModalPortal blurBackground={true} close={handleIsOpen}>
            <FullPostItem
                key={post.id}
                id={post.id}
                userName={post.userName}
                title={post.title}
                description={post.description}
                image={post.image}
                likes={post.likes}
                comments={post.comments}
            />
        </ModalPortal>
    );
};

export default SinglePostItem;
