import { AxiosError } from "axios";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_EXPANDE_USER_PROFILE } from "../../navigation/endpoints";
import { SocialLinks } from "../SocialsLinks/SocialsLinks";

export type UserExtras = {
    profession: string;
    socials: SocialLinks;
    about_me: string;
    background_image: string;
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
