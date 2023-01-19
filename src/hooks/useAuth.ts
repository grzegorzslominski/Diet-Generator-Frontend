import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axiosFoodieInstance from "../axios/axiosFoodieInstance";
import { User } from "../models/User/User";
import { ENDPOINTS_USER } from "../navigation/endpoints";
import { NAVIGATION } from "../navigation/paths";
import { setUser } from "../redux/slices/user";

export default function useAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        firstAuth();
    }, []);

    const firstAuth = async () => {
        const authSuccess = await authorizeUser();

        if (!authSuccess) {
            localStorage.removeItem("authToken");
        }
    };

    const authorizeUser = () => {
        const localAuthToken = localStorage.getItem("authToken");

        if (!localAuthToken) {
            setIsLoading(false);
            dispatch(setUser(null));
            return;
        }
        return loginUser();
    };

    const loginUser = async () => {
        let userData: User = null;

        await axiosFoodieInstance
            .get(ENDPOINTS_USER.userInfo)
            .then((response) => {
                if (response.status === 200) {
                    userData = response.data;
                    dispatch(setUser(userData));
                }
            })
            .catch((err: AxiosError) => {
                if (err.response?.status === 401) {
                    localStorage.removeItem("authToken");
                    dispatch(setUser(null));
                    navigate(NAVIGATION.home);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });

        return userData;
    };

    const logoutUser = () => {
        localStorage.removeItem("authToken");
        dispatch(setUser(null));
    };

    return { authorizeUser, logoutUser, isLoading };
}
