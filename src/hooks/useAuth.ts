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
        const localAuthCookie = document.cookie;

        if (!localAuthToken && !localAuthCookie.includes("session")) {
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
                    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    dispatch(setUser(null));
                    navigate(NAVIGATION.home);
                }
            });

        return userData;
    };

    return { authorizeUser };
}
