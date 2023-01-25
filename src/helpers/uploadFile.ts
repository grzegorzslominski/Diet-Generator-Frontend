import { UploadItem } from "./../models/User/User";
import axiosFoodieInstance from "../axios/axiosFoodieInstance";

const uploadImageFile = async (endpoint: string, uploadKey: string, file: any) => {
    let err = "";
    let imageURL = "";

    const formData = new FormData();
    formData.append(uploadKey, file);

    await axiosFoodieInstance
        .post<string>(endpoint, formData)
        .then((response) => {
            if (response.status === 200) {
                imageURL = response.data;
            }
        })
        .catch((error) => {
            if (error?.response?.data?.message) {
                err = error?.response?.data?.message;
            } else err = error;
        });

    return { imageURL, err };
};

const removeImageFile = async (endpoint: string) => {
    let err = "";
    let statusCode;

    await axiosFoodieInstance
        .post(endpoint)
        .then((response) => {
            if (response.status === 200) {
                statusCode = response.status;
            }
        })
        .catch((error) => {
            if (error?.response?.data?.message) {
                err = error?.response?.data?.message;
            } else err = error;
        });

    return { statusCode, err };
};

const parseImageToEdit = (object: any, imageProperty: string) => {
    const initFile = JSON.parse(JSON.stringify(INIT_FILE));
    const currentObject = JSON.parse(JSON.stringify(object));

    if (object[imageProperty]) {
        initFile.url = object[imageProperty];
        currentObject[imageProperty] = initFile;
    }

    return currentObject;
};

const INIT_FILE: UploadItem = { type: "image/png", url: "", file: null };

export { uploadImageFile, removeImageFile, parseImageToEdit, INIT_FILE };
