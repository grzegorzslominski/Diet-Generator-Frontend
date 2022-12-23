import { ReactComponent as Dish } from "../../../../../../assets/dietGenerator/images/Dish.svg";
import { ReactNode } from "react";

export interface GoalI {
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
