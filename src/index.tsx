import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./redux/store/store";
import { getConfig } from "./helpers/getConfig";
import axiosFoodieInstance from "./axios/axiosFoodieInstance";

import MainView from "./views/MainView/MainView";

import "./index.css";

const getApiPath = async () => {
    const oldConfig = localStorage.getItem("config");
    const config = await getConfig(true);
    if (
        oldConfig &&
        JSON.parse(oldConfig).hasOwnProperty("version") &&
        JSON.parse(oldConfig).version !== config.version
    ) {
        window.location.reload();
    }
    axiosFoodieInstance.defaults.baseURL = config.foodieAPI;

    console.log(`Foodie version: ${config.version}`);
};

getApiPath();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <MainView />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
