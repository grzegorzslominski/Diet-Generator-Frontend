import axios from "axios";

export const getConfig = async (reload = false) => {
    let config;

    if (localStorage.getItem("config") && !reload) {
        config = JSON.parse(localStorage.getItem("config") || "{}");
    } else {
        const response = await axios.get("/config.json");
        config = response.data;
        localStorage.setItem("config", JSON.stringify(config));
    }

    return config;
};
