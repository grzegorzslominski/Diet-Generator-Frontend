import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_PROFILE } from "../../navigation/endpoints";
import { UserExtras } from "../User/ExpandedUser";
import { UserStats } from "../User/UserStatistics";
import { ExcludedProducts } from "../Meal/Exclusions";
import { Recipe } from "../Meal/Recipe";
import { Post } from "../Forum/Post";

export type UserBasicProfile = {
    userStats: UserStats;
    userPosts?: Post[];
    userRecipes?: Recipe[];
    userExtras?: UserExtras | null;
    excludedProductsList?: ExcludedProducts;
};

export const getUserBasicProfile = async () => {
    return await axiosFoodieInstance
        .get<UserBasicProfile>(`${ENDPOINTS_PROFILE.userProfile}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};
