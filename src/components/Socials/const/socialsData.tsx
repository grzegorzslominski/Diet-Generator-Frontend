import { ReactNode } from "react";

import { ReactComponent as TelegramIcon } from "../../../assets/icons/socials/telegram.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/socials/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../../assets/icons/socials/youtube.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/icons/socials/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/socials/facebook.svg";

export type IconPresetType = {
    telegram: ReactNode;
    twitter: ReactNode;
    youtube: ReactNode;
    instagram: ReactNode;
    facebook: ReactNode;
    [key: string]: string | ReactNode;
};

export const ICON_PRESET: IconPresetType = {
    telegram: <TelegramIcon />,
    youtube: <YoutubeIcon />,
    instagram: <InstagramIcon />,
    twitter: <TwitterIcon />,
    facebook: <FacebookIcon />,
};
