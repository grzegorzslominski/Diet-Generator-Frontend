import { SocialLinks } from "./../SocialsLinks/SocialsLinks";
import { AxiosError } from "axios";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_EXPANDE_USER_PROFILE } from "../../navigation/endpoints";
import { Post } from "../Forum/Post";
import { Ingredient, Recipe } from "../Meal/Recipe";

export type PublicUserProfile = {
    followingList: Follower[];
    socials: SocialLinks;
    user: PublicUser;
    userExtras: Extras;
    userImagePath: string;
    userPosts?: Post[];
    userRecipes?: PublishedRecipe[];
    [key: string]:
        | Follower[]
        | SocialLinks
        | PublicUser
        | Extras
        | string
        | Post[]
        | PublishedRecipe[]
        | undefined;
};

export type Follower = {
    id: number;
    follower: {
        id: number;
    };
};

export type PublicUser = {
    id: number;
    firstName: string;
    lastName: string;
    subscribed?: boolean;
    userProfilePicture?: string;
};

export type UserExtras = {
    userExtras?: Extras | null;
    socials?: SocialLinks;
    [key: string]: Extras | SocialLinks | undefined | null;
};

export type Extras = {
    id?: number;
    profession: string;
    about_me: string;
    backgroundImagePath?: string;
    [key: string]: number | string | undefined;
};

export type PublishedRecipe = Recipe & {
    recipeCreatorImage: string | null;
    recipeLikes: Like[];
    recipesIngredients: Ingredient[];
    [key: string]: string | null | Like[] | Ingredient[] | any;
};

export type Like = {
    id: number;
    timestamp: number;
    user: PublicUser;
};

export type FollowStatus = {
    follow: boolean;
    followersCount: number;
};

export const getExpandedUserProfile = async (userID?: string) => {
    if (!userID) return;
    return await axiosFoodieInstance
        .get<PublicUserProfile>(`${ENDPOINTS_EXPANDE_USER_PROFILE.getProfile}/${userID}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};

export const changeFollowingUserStatus = async (userID: number) => {
    return await axiosFoodieInstance
        .get(`${ENDPOINTS_EXPANDE_USER_PROFILE.followUser}/${userID}`)
        .then((response) => {
            return response.status;
        })
        .catch((err: AxiosError) => {
            return err;
        });
};
