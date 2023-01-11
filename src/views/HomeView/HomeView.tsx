import { TStore } from "../../redux/store/store";
import { useSelector } from "react-redux";

import HowItsWorking from "./components/HowItsWorking/HowItsWorking";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItsLook from "./components/HowItsLook/HowItsLook";
import Advantages from "./components/Advantages/Advantages";
import Register from "../AuthViews/Register/Register";
import Login from "../AuthViews/Login/Login";

import * as S from "./HomeView.style";

type HomeViewProps = {
    authorizeUser: () => Promise<null> | undefined;
};

const HomeView = ({ authorizeUser }: HomeViewProps) => {
    const authViewGlobalState = useSelector((state: TStore) => state?.authViewReducer);

    return (
        <S.Container>
            <HeroSection />
            <Advantages />
            <HowItsLook />
            <HowItsWorking />
            {authViewGlobalState.login && <Login authorizeUser={authorizeUser} />}
            {authViewGlobalState.register && <Register />}
        </S.Container>
    );
};

export default HomeView;
