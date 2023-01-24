import { SocialLinks } from "./../SocialsLinks/SocialsLinks";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_PROFILE } from "../../navigation/endpoints";
import { Extras } from "../User/ExpandedUser";
import { UserStats } from "../User/UserStatistics";
import { ExcludedProducts } from "../Meal/Exclusions";
import { Recipe } from "../Meal/Recipe";
import { Post } from "../Forum/Post";
import { Subscription } from "../Subscription/Subscription";

export type UserBasicProfile = {
    userStats: UserStats;
    userPosts?: Post[];
    userRecipes?: Recipe[];
    userExtras?: Extras | null;
    socials?: SocialLinks;
    excludedProductsList?: ExcludedProducts;
    userSubscriptions: Subscription[];
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
