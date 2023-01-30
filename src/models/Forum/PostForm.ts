import { INIT_FILE } from "../../helpers/uploadFile";
import { UploadItem } from "../User/User";

export type NewPostForm = {
    title: string;
    description: string;
    imagePath: UploadItem;
};

export const NEW_POST_DATA = {
    title: "",
    description: "",
    imagePath: INIT_FILE,
};

export type NewPostFormValidation = {
    title: string;
    description: string;
    imagePath: string;
};

export const NEW_POST_VALIDATION_DATA = {
    title: "",
    description: "",
    imagePath: "",
};
