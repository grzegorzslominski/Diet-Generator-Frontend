import { useDispatch, useSelector } from "react-redux";
import { AuthViewState, setAuthView } from "../redux/slices/auth";
import { TStore } from "../redux/store/store";

export const useAuthViews = () => {
    const authViewGlobalState = useSelector((state: TStore) => state?.authViewReducer);
    const dispatch = useDispatch();

    const changeAutView = () => {
        const currentAuthView: AuthViewState = JSON.parse(JSON.stringify(authViewGlobalState));
        currentAuthView.login = !currentAuthView.login;
        currentAuthView.register = !currentAuthView.register;
        dispatch(setAuthView(currentAuthView));
    };

    const closeAuthViews = () => {
        dispatch(setAuthView({ register: false, login: false }));
    };

    const openRegisterView = () => {
        dispatch(setAuthView({ register: true, login: false }));
    };

    const openLoginView = () => {
        dispatch(setAuthView({ register: false, login: true }));
    };

    return {
        changeAutView,
        closeAuthViews,
        openRegisterView,
        openLoginView,
    };
};
