import { ICON_PRESET } from "./const/socialsData";

import { SocialLinks } from "../../models/SocialsLinks/SocialsLinks";

import * as S from "./Socials.style";

export type SocialProps = {
    social: SocialLinks;
    iconSize?: string;
    iconColor?: string;
};

const Social = ({ social, iconSize = "0.85rem", iconColor = "#737380" }: SocialProps) => {
    return (
        <S.Container>
            {Object.keys(ICON_PRESET).map((keyIcon) => {
                if (social[keyIcon]) {
                    return (
                        <S.IconContanier
                            key={`${keyIcon}-icon`}
                            iconSize={iconSize}
                            iconColor={iconColor}
                            onClick={() => window.open(`${social[keyIcon]}`, "_blank")}
                        >
                            {ICON_PRESET[keyIcon]}
                        </S.IconContanier>
                    );
                }
            })}
        </S.Container>
    );
};

export default Social;
