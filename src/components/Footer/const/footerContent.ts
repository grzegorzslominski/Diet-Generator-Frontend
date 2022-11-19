import { SocialLinks } from "../../../models/SocialsLinks/SocialsLinks";

export type FooterLinkItem = {
    label: string;
    navigation: string;
};

type FooterProps = {
    linkItems: FooterLinkItem[];
    socials: SocialLinks;
};

export const FOOTER_CONTENT: FooterProps = {
    linkItems: [
        { label: "About us", navigation: "/test" },
        { label: "Contact", navigation: "/test" },
        { label: "Partnerships", navigation: "/test" },
        { label: "Premium", navigation: "/test" },
        { label: "Privacy Policy", navigation: "/test" },
        { label: "Cookies Policy", navigation: "/test" },
    ],
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.facebook.com/",
        youtube: "https://www.facebook.com/",
        twitter: "https://www.facebook.com/",
        telegram: "https://www.facebook.com/",
    },
};
