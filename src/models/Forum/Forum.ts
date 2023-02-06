import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_FORUM } from "../../navigation/endpoints";
import { Recipe } from "../Meal/Recipe";
import { PublicUser, PublishedRecipe } from "./../User/ExpandedUser";
import { FullPost, Post } from "./Post";
export type Comment = {
    id: number;
    content: string;
    timestamp: number;
    user: PublicUser;
    userImagePath: string;
};

export type CommentForm = {
    content: string;
};

export const getForumPosts = async () => {
    return await axiosFoodieInstance.get<Post[][]>("/forum/post").then((response) => {
        if (response.status === 200) {
            return response.data[0]
                .sort((a, b) => b.id - a.id)
                .concat(response.data[1])
                .sort((a, b) => b.id - a.id);
        }
    });
};

export const getForumPost = async (postID: number | undefined) => {
    if (!postID) return;
    return await axiosFoodieInstance.get<FullPost>(`/forum/post/${postID}`).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
};

export const getForumRecipes = async () => {
    return await axiosFoodieInstance.get<Recipe[][]>("/forum/recipe/verified").then((response) => {
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
export const getForumRecipe = async (postID: number | undefined) => {
    return await axiosFoodieInstance
        .get<PublishedRecipe>(`/forum/recipe/${postID}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};

// export const getForumUnverifiedPostsMeals = async () => {
//     return await axiosFoodieInstance
//         .get<recipeNotVerifiedBasicI[][]>("/forum/recipe/notVerified")
//         .then((response) => {
//             if (response.status === 200) {
//                 return response.data[0].concat(response.data[1]);
//             }
//         });
// };

// export const getForumUnverifiedPostMeal = async (postID: number | undefined) => {
//     return await axiosFoodieInstance
//         .get<PublishedRecipe>(`/forum/recipe/${postID}`)
//         .then((response) => {
//             if (response.status === 200) {
//                 return response.data;
//             }
//         });
// };
