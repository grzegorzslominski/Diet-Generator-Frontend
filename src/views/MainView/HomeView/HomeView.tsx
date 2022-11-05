import foodieLogo from "../../../assets/foodie-logo.png";

import Label from "../../../components/UI/Label/Label";
import { mainTheme } from "../../../themes/mainTheme";
import Advantages from "./components/Advantages/Advantages";

import * as S from "./HomeView.style";
import HowItsWorking from "./components/HowItsWorking/HowItsWorking";
import SignUpModal from "./Modal/SignUpModal";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

const HomeView = () => {
    return (

        <S.Container>
            <S.TopSection>
                <S.TopSectionContent>
                    <Label
                        color={mainTheme.colors.mainBlack}
                        fontSize='3rem'
                        fontWeight='600'
                        width='55rem'
                        textAlign='center'
                    >
                        {"Creating a diet tailored to the user's needs"}
                    </Label>
                    <S.LogoContainer>
                        <img src={foodieLogo} />
                    </S.LogoContainer>
                    <Label fontSize='1.5rem' fontWeight='300' width='35rem' textAlign='center'>
                        The application was created with the preferences of users in mind. You tell
                        us what you like to eat, we generate your best diet ever.
                    </Label>
                </S.TopSectionContent>
            </S.TopSection>
            <Advantages />
            <HowItsWorking/>
            <SignUpModal open={false}>
                <Login/>
            </SignUpModal>
        </S.Container>

    );
};

export default HomeView;
