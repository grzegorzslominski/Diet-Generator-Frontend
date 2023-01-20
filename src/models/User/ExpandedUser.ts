import { AxiosError } from "axios";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_EXPANDE_USER_PROFILE } from "../../navigation/endpoints";
import { SocialLinks } from "../SocialsLinks/SocialsLinks";
import { UploadItem, UserData } from "./User";

export type ExpandedUser = UserData & {
    title: string;
    socials: SocialLinks;
    about: string;
    backgroundIMG: string | UploadItem;
};

const getExpandedUserProfile = async (userID: number) => {
    await axiosFoodieInstance
        .get(`${ENDPOINTS_EXPANDE_USER_PROFILE.getProfile}/${userID}`)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch((error: AxiosError) => {
            return error;
        });
};
