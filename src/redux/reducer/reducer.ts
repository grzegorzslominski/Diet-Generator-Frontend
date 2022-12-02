import { authViewReducer } from "../slices/auth";
import { notificationReducer } from "../slices/notification";
import { userReducer } from "../slices/user";

const reducer = {
    userReducer,
    notificationReducer,
    authViewReducer,
};

export default reducer;
