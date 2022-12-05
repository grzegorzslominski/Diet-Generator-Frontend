import HeroSection from "./components/HeroSection/HeroSection";
import Advantages from "./components/Advantages/Advantages";
import HowItsWorking from "./components/HowItsWorking/HowItsWorking";
import HowItsLook from "./components/HowItsLook/HowItsLook";
import Login from "../AuthViews/Login/Login";
import Register from "../AuthViews/Register/Register";

import * as S from "./HomeView.style";

import { useSelector } from "react-redux";
import { TStore } from "../../redux/store/store";

const HomeView = () => {
    const authViewGlobalState = useSelector((state: TStore) => state?.authViewReducer);

    return (
        <S.Container>
            <HeroSection />
            <Advantages />
            <HowItsLook />
            <HowItsWorking />
            {authViewGlobalState.login && <Login />}
            {authViewGlobalState.register && <Register />}
        </S.Container>
    );
};

export default HomeView;
