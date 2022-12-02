import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axiosFoodieInstance from "../axios/axiosFoodieInstance";
import { User } from "../models/User/User";
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
        let foundUser = false;

        await axiosFoodieInstance
            .get("/account")
            .then((response) => {
                if (response.status === 200) {
                    const userData = response.data as User;
                    foundUser = true;
                    dispatch(setUser(userData));
                }
            })
            .catch((err: AxiosError) => {
                if (err.response?.status === 401) {
                    localStorage.removeItem("authToken");
                    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    dispatch(setUser(null));
                    navigate("/homepage");
                }
            });

        return foundUser;
    };

    return { authorizeUser };
}
