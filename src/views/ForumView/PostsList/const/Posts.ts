import axiosFoodieInstance from "../../../../axios/axiosFoodieInstance";
import { PublishedRecipe } from "../../../../models/User/ExpandedUser";

export type Post = {
    id: number;
    title: string;
    timestamp: number;
    author: ForumUserI;
    userProfilePicture: string | null;
    description: string | undefined;
    commentsCount: number;
    likesCount: number;
    postImagePath?: string;
    postComments: CommentI[] | null;
    likes: LikesI[] | null;
};

export interface recipeVerifiedBasicI {
    id: number;
    title: string;
    description: string | undefined;
    timestamp: number;
    author: ForumUserI;
    userProfilePicture: string | null;
    commentsCount: number;
    likesCount: number;
}

export interface ForumUserI {
    id: number;
    firstName: string | null;
    lastName: string | null;
    userProfilePicture: string | null;
}

export interface ingredientsI {
    id: number;
    name: string;
    amount: number;
    unit: string;
}

export interface CommentI {
    id: string;
    content: string;
    timestamp: number;
    user: ForumUserI;
}

export interface LikesI {
    id: number;
    timestamp: number;
    user: ForumUserI;
}

export interface recipeNotVerifiedBasicI {
    id: number;
    title: string;
    description: string;
    timestamp: number;
    author: ForumUserI;
    userProfilePicture: string;
    commentsCount: number;
    likesCount: number;
}

export const getForumPostsMeals = async () => {
    return await axiosFoodieInstance
        .get<recipeVerifiedBasicI[][]>(`/forum/recipe/verified`)
        .then((response) => {
            if (response.status === 200) {
                return response.data[0]
                    .sort((a, b) => {
                        return a.id && b.id ? b.id - a.id : -1;
                    })
                    .concat(
                        response.data[1].sort((a, b) => {
                            return a.id && b.id ? b.id - a.id : -1;
                        }),
                    );
            }
        });
};
export const getForumFullMeal = async (postID: number | undefined) => {
    return await axiosFoodieInstance
        .get<PublishedRecipe>(`/forum/recipe/${postID}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};

export const getForumUnverifiedPostsMeals = async () => {
    return await axiosFoodieInstance
        .get<recipeNotVerifiedBasicI[][]>(`/forum/recipe/notVerified`)
        .then((response) => {
            if (response.status === 200) {
                return response.data[0].concat(response.data[1]);
            }
        });
};

export const getForumUnverifiedPostMeal = async (postID: number | undefined) => {
    return await axiosFoodieInstance
        .get<PublishedRecipe>(`/forum/recipe/${postID}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};

export const getForumPosts = async () => {
    return await axiosFoodieInstance.get<Post[][]>(`/forum/post`).then((response) => {
        if (response.status === 200) {
            return response.data[0]
                .sort((a, b) => b.id - a.id)
                .concat(response.data[1])
                .sort((a, b) => b.id - a.id);
        }
    });
};

export const getForumPost = async (postID: number | undefined) => {
    return await axiosFoodieInstance.get<Post>(`/forum/post/${postID}`).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
};
