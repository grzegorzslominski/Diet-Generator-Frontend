import { PublicUserProfile, PublishedRecipe } from "./../User/ExpandedUser";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_DASHBOARD } from "../../navigation/endpoints";
import { Post } from "../Forum/Post";

export type Dashboard = {
    creatorRecipes: PublishedRecipe[];
    creators: PublicUserProfile[];
    newPosts: Post[];
    recipesSortedByLikes: PublishedRecipe[];
};

export const getDashboardData = async () => {
    return await axiosFoodieInstance
        .get<Dashboard>(ENDPOINTS_DASHBOARD.dashbordData)
        .then((response) => {
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
        });
};
