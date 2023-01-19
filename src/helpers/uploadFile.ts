import axiosFoodieInstance from "../axios/axiosFoodieInstance";
import { UploadResponse } from "../models/User/User";

export const uploadImageFile = async (endpoint: string, uploadKey: string, file: any) => {
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

export const removeImageFile = async (endpoint: string) => {
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
