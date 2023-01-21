import { SocialLinks } from "../SocialsLinks/SocialsLinks";
import { UploadItem } from "./User";

export type UserExtrasForm = {
    profession: string;
    socials: SocialLinks;
    about_me: string;
    background_image: UploadItem;
    [key: string]: string | SocialLinks | UploadItem;
};

export const USER_EXTRAS_FORM_DATA: UserExtrasForm = {
    profession: "",
    socials: {
        facebook: "",
        instagram: "",
        telegram: "",
        twitter: "",
        youtube: "",
        discord: "",
    },
    about_me: "",
    background_image: {
        type: "image/png",
        url: "",
        file: null,
    },
};

export type UserExtrasFormValidation = {
    profession: string;
    socials: string;
    about_me: string;
    background_image: string;
    [key: string]: string;
};

export const USER_EXTRAS_FORM_VALIDATION_DATA: UserExtrasFormValidation = {
    profession: "",
    socials: "",
    about_me: "",
    background_image: "",
};
