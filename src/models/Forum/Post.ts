import { ENDPOINTS_FORUM } from "./../../navigation/endpoints";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { PublicUser } from "../User/ExpandedUser";

export type PostBase = {
    id: number;
    timestamp: number;
    title: string;
    description: string;
    author: PublicUser;
    postComments: [];
    postImagePath: string | null;
    userImagePath: string | null;
    userProfilePicture?: string | null;
};

export type Post = PostBase & {
    postLikes: PostLike[];
};

export type FullPost = PostBase & {
    likes: PostLike[];
};

export type PostLike = {
    id: number;
    timestamp: number;
    user: PublicUser;
};

export const likePost = async (postID: number) => {
    const response = await axiosFoodieInstance.get(`${ENDPOINTS_FORUM.likePost}/${postID}`);
    return response.data;
};
