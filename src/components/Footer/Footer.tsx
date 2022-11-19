import { useNavigate } from "react-router-dom";

import Social from "../Socials/Socials";
import Divider from "../UI/Divider/Divider";
import Label from "../UI/Label/Label";

import { FOOTER_CONTENT } from "./const/footerContent";
import { mainTheme } from "../../themes/mainTheme";

import * as S from "./Footer.style";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <Divider />
            <S.TopSection>
                <Label
                    fontWeight='700'
                    fontFamily='Lato'
                    fontSize='1rem'
                    color={mainTheme.colors.mainBlack}
                >
                    SITE LINKS
                </Label>
                <S.LinksContainer>
                    {FOOTER_CONTENT.linkItems.map((link) => (
                        <Label
                            fontFamily='Lato'
                            fontSize='0.9rem'
                            color={mainTheme.colors.grey}
                            key={link.label}
                            onClick={() => navigate(link.navigation)}
                        >
                            {link.label}
                        </Label>
                    ))}
                </S.LinksContainer>
            </S.TopSection>
            <Divider />
            <S.SocialSection>
                <Social social={FOOTER_CONTENT.socials} />
            </S.SocialSection>
        </S.Container>
    );
};

export default Footer;
