import { SocialLinks } from "../SocialsLinks/SocialsLinks";
import { UploadItem } from "./User";

export type UserExtrasForm = {
    userExtras: ExtrasForm;
    socials: SocialLinks;
    [key: string]: SocialLinks | ExtrasForm | undefined;
};

export type ExtrasForm = {
    id?: number;
    profession: string;
    about_me: string;
    backgroundImagePath: UploadItem;
    [key: string]: number | string | undefined | UploadItem;
};

export const USER_EXTRAS_FORM_DATA: UserExtrasForm = {
    userExtras: {
        profession: "",
        about_me: "",
        backgroundImagePath: {
            type: "image/png",
            url: "",
            file: null,
        },
    },
    socials: {
        facebook: "",
        instagram: "",
        telegram: "",
        twitter: "",
        youtube: "",
        discord: "",
    },
};

export type UserExtrasFormValidation = {
    profession: string;
    socials: string;
    about_me: string;
    backgroundImagePath: string;
    [key: string]: string;
};

export const USER_EXTRAS_FORM_VALIDATION_DATA: UserExtrasFormValidation = {
    profession: "",
    socials: "",
    about_me: "",
    backgroundImagePath: "",
};
