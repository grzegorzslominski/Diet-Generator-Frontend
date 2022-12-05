import { authViewReducer } from "../slices/auth";
import { configReducer } from "../slices/config";
import { notificationReducer } from "../slices/notification";
import { userReducer } from "../slices/user";

const reducer = {
    userReducer,
    notificationReducer,
    authViewReducer,
    configReducer,
};

export default reducer;
