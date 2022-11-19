import HeroSection from "./components/HeroSection/HeroSection";
import Advantages from "./components/Advantages/Advantages";
import HowItsWorking from "./components/HowItsWorking/HowItsWorking";
import SignUpModal from "./Modal/SignUpModal";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import HowItsLook from "./components/HowItsLook/HowItsLook";

import * as S from "./HomeView.style";

const HomeView = () => {
    return (
        <S.Container>
            <HeroSection />
            <Advantages />
            <HowItsLook />
            <HowItsWorking />
            <SignUpModal open={false}>
                <Login />
            </SignUpModal>
        </S.Container>
    );
};

export default HomeView;
