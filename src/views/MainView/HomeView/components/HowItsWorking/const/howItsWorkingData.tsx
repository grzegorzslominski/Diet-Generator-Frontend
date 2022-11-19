import { ReactNode } from "react";

import { ReactComponent as SurveyIcon } from "../../../../../../assets/homepage/HowItsWorking/survey.svg";
import { ReactComponent as SettingsIcon } from "../../../../../../assets/homepage/HowItsWorking/settings.svg";
import { ReactComponent as DietIcon } from "../../../../../../assets/homepage/HowItsWorking/diet.svg";
import { ReactComponent as CommunityIcon } from "../../../../../../assets/homepage/HowItsWorking/community.svg";

import { ReactComponent as Line1 } from "../../../../../../assets/homepage/HowItsWorking/line1.svg";
import { ReactComponent as Line2 } from "../../../../../../assets/homepage/HowItsWorking/line2.svg";
import { ReactComponent as Line3 } from "../../../../../../assets/homepage/HowItsWorking/line3.svg";

export type WorkingPoint = {
    icon: ReactNode;
    title: string;
    descriptionPoints: string[];
    line?: ReactNode;
};

export const WORKING_DATA: WorkingPoint[] = [
    {
        icon: <SurveyIcon />,
        title: "Survey",
        descriptionPoints: [
            "determining food preferences",
            " provides data for the AI model",
            "filled out only once",
        ],
        line: <Line1 />,
    },
    {
        icon: <SettingsIcon />,
        title: "Ai learning",
        descriptionPoints: [
            "use of survey information",
            "reacts to feedback from the user",
            "it fits the user's tastes better over time",
        ],
        line: <Line2 />,
    },
    {
        icon: <DietIcon />,
        title: "Creating a diet",
        descriptionPoints: [
            "creating a diet based on a meal base",
            "taking into account the preferences transferred by the AI model",
            "fully modifiable by the user",
        ],
        line: <Line3 />,
    },
    {
        icon: <CommunityIcon />,
        title: "User feedback",
        descriptionPoints: ["determines the level of user satisfaction", "sent to the AI model"],
    },
];
