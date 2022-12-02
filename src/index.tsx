import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./redux/store/store";

import MainView from "./views/MainView/MainView";

import "./index.css";

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
