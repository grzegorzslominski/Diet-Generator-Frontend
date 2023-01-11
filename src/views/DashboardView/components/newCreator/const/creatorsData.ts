import { SocialLinks } from "../../../../../models/SocialsLinks/SocialsLinks";

import profileIMG from "../../../../../assets/profile/avatar.png";

export type Creator = {
    id: number;
    avatarIMG: string;
    firstName: string;
    lastName: string;
    title: string;
    socials: SocialLinks;
    description: string;
    tags: string[];
};

export const NEW_CREATORS: Creator[] = [
    {
        id: 1,
        avatarIMG: profileIMG,
        firstName: "Mark",
        lastName: "Yakotaki",
        title: "fitness couch",
        socials: {
            facebook: "https://www.facebook.com/",
            instagram: "https://www.facebook.com/",
            youtube: "https://www.facebook.com/",
        },
        tags: ["tet231st", "tessssst", "testdsads"],
        description:
            "Our platform provides full support for the user in achieving his nutritional goals, starting with generating a diet and ending with maintaining his motivation. Thanks to the application of a modern model of artificial intelligence, each user is considered individually and our most important goal is to ensure the highest level of satisfaction with the proposed meals. . Thanks to the application of a modern model of artificial intelligence.",
    },
    {
        id: 2,
        avatarIMG: profileIMG,
        firstName: "Mark",
        lastName: "Yakotaki",
        title: "fitness couch",
        socials: {
            facebook: "https://www.facebook.com/",
            instagram: "https://www.facebook.com/",
            youtube: "https://www.facebook.com/",
        },
        tags: ["test", "test", "test"],
        description:
            "Our platform provides full support for the user in achieving his nutritional goals, starting with generating a diet and ending with maintaining his motivation. Thanks to the application of a modern model of artificial intelligence, each user is considered individually and our most important goal is to ensure the highest level of satisfaction with the proposed meals. . Thanks to the application of a modern model of artificial intelligence.",
    },
    {
        id: 3,
        avatarIMG: profileIMG,
        firstName: "Mark",
        lastName: "Yakotaki",
        title: "fitness couch",
        socials: {
            facebook: "https://www.facebook.com/",
            instagram: "https://www.facebook.com/",
            youtube: "https://www.facebook.com/",
        },
        tags: ["test", "test", "test"],
        description:
            "Our platform provides full support for the user in achieving his nutritional goals, starting with generating a diet and ending with maintaining his motivation. Thanks to the application of a modern model of artificial intelligence, each user is considered individually and our most important goal is to ensure the highest level of satisfaction with the proposed meals. . Thanks to the application of a modern model of artificial intelligence.",
    },
];
