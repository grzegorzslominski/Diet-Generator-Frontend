import { ReactComponent as Dish } from "../../../../../../assets/dietGenerator/images/Dish.svg";
import { ReactNode } from "react";

export interface GoalI {
    name: string;
    image: ReactNode;
}

export interface ExcerciseI {
    name: string;
    image: ReactNode;
}
export const data: GoalI[] = [
    {
        name: "Loose weight",
        image: <Dish />,
    },
    {
        name: "Maintain weight",
        image: <Dish />,
    },
    {
        name: "Gain weight",
        image: <Dish />,
    },
    {
        name: "Gain muscle",
        image: <Dish />,
    },
];

export const ExccerciseData: ExcerciseI[] = [
    {
        name: "no exercise",
        image: <Dish />,
    },
    {
        name: "average exercise",
        image: <Dish />,
    },
    {
        name: "a lot of exercise",
        image: <Dish />,
    },
];
