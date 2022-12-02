import axios, { AxiosRequestConfig } from "axios";
import { getConfig } from "../helpers/getConfig";

const axiosFoodieInstance = axios.create({
    baseURL: "",
    withCredentials: true,
});

axiosFoodieInstance.interceptors.request.use(async (axiosConfig: AxiosRequestConfig) => {
    const config = await getConfig();
    // axiosConfig.baseURL = config.foodieAPI;
    axiosConfig.baseURL = "https://foodie-369621.ey.r.appspot.com/";

    const authToken = localStorage.getItem("authToken");
    if (authToken && axiosConfig && axiosConfig?.headers) {
        axiosConfig.headers.Authorization = "Bearer " + authToken;
    }

    return axiosConfig;
});

export default axiosFoodieInstance;
