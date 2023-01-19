import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

import axiosFoodieInstance from "./axios/axiosFoodieInstance";
import { getConfig } from "./helpers/getConfig";
import { store } from "./redux/store/store";

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

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 15,
            retry: false,
        },
    },
});

getApiPath();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <PayPalScriptProvider
                        options={{
                            "client-id":
                                "ARmk2ZR1YkM6uHxsqnE4IC3DqaSazz7MFO2lJsA3eKl4vFbgDqBsbpHZefq2FWzkGskDq77CVrrebypy",
                            components: "buttons",
                            intent: "subscription",
                            vault: true,
                        }}
                    >
                        <MainView />
                    </PayPalScriptProvider>
                </QueryClientProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
