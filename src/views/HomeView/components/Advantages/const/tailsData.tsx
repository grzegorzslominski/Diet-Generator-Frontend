import { ReactNode } from "react";

import { ReactComponent as AIIcon } from "../../../../../assets/homepage/Advantages/ai.svg";
import { ReactComponent as CommunityIcon } from "../../../../../assets/homepage/Advantages/community.svg";
import { ReactComponent as ChainIcon } from "../../../../../assets/homepage/Advantages/chain.svg";

export type AdvantegesPoint = {
    tileIcon: ReactNode;
    tileGradient: {
        top: string;
        bottom: string;
    };
    description: AdvantegesPointDescription;
};

export type AdvantegesPointDescription = {
    title: string;
    content: string;
};

export const ADVANTAGES_POINTS: AdvantegesPoint[] = [
    {
        tileIcon: <AIIcon />,
        tileGradient: { top: "#3B3966 ,#69569E ", bottom: "#26243D ,  #51437A " },
        description: {
            title: "Use of AI",
            content:
                "The applied artificial intelligence model updates the preferences on an ongoing basis based on the user's actions in the application ",
        },
    },
    {
        tileIcon: <CommunityIcon />,
        tileGradient: { top: "#B9307C ,  #F42F6E ", bottom: "#AC2B70 ,  #C5275C " },
        description: {
            title: "Community",
            content:
                "Users have the opportunity to actively develop the platform, which benefits not only a single person but the entire community.",
        },
    },
    {
        tileIcon: <ChainIcon />,
        tileGradient: { top: "#F43A34 ,  #EF4E31 ", bottom: "#D3332C ,  #D0422B " },
        description: {
            title: "Flexibility",
            content:
                "We provide freedom when creating a diet, the user decides what he wants to eat and at what time of the da",
        },
    },
];
