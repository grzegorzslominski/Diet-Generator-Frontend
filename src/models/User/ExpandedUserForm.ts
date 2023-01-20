import { SocialLinks } from "../SocialsLinks/SocialsLinks";
import { UploadItem } from "./User";

export type ExpandedUserForm = {
    title: string;
    socials: SocialLinks;
    about: string;
    backgroundIMG: UploadItem;
    [key: string]: string | SocialLinks | UploadItem;
};

export const EXPANDED_USER_FORM_DATA: ExpandedUserForm = {
    title: "",
    socials: {
        facebook: "",
        instagram: "",
        telegram: "",
        twitter: "",
        youtube: "",
    },
    about: "",
    backgroundIMG: {
        type: "image/png",
        url: "",
        file: null,
    },
};

export type ExpandedUserFormValidation = {
    title: string;
    socials: string;
    about: string;
    backgroundIMG: string;
    [key: string]: string;
};

export const EXPANDED_USER_FORM_VALIDATION_DATA: ExpandedUserFormValidation = {
    title: "",
    socials: "",
    about: "",
    backgroundIMG: "",
};
