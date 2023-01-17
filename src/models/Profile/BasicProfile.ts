import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_PROFILE } from "../../navigation/endpoints";
import { UserStats } from "../User/UserStatistics";

export type UserBasicProfile = {
    userStats: UserStats;
    userPosts: [];
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
