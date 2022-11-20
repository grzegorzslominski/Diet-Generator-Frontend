import foodieLogo from "../../../../../assets/foodie-logo.png";

import Label from "../../../../../components/UI/Label/Label";
import { mainTheme } from "../../../../../themes/mainTheme";

import * as S from "./HeroSection.style";

const HeroSection = () => {
    return (
        <S.Container>
            <S.TopSectionContent>
                <Label
                    color={mainTheme.colors.mainBlack}
                    fontSize='2.5rem'
                    fontWeight='600'
                    width='45rem'
                    textAlign='center'
                >
                    {"Creating a diet tailored to the user's needs"}
                </Label>
                <S.LogoContainer>
                    <img src={foodieLogo} />
                </S.LogoContainer>
                <Label fontSize='1.25rem' width='30rem' textAlign='center' fontFamily='Lato'>
                    The application was created with the preferences of users in mind. You tell us
                    what you like to eat, we generate your best diet ever.
                </Label>
            </S.TopSectionContent>
        </S.Container>
    );
};

export default HeroSection;
