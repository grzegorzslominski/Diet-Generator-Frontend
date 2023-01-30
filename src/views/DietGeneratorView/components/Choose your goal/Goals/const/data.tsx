import { ReactComponent as Vegetarian } from "../../../../../../assets/dietGenerator/images/Vegetarian.svg";
import { ReactComponent as Vegan } from "../../../../../../assets/dietGenerator/images/Vegan.svg";
import { ReactComponent as VeryHealthy } from "../../../../../../assets/dietGenerator/images/VeryHealthy.svg";
import { ReactComponent as DairyFree } from "../../../../../../assets/dietGenerator/images/DairyFree.svg";
import { ReactComponent as GlutenFree } from "../../../../../../assets/dietGenerator/images/GlutenFree.svg";
import { ReactComponent as NoExcercise } from "../../../../../../assets/dietGenerator/images/NoExcercise.svg";
import { ReactComponent as Average } from "../../../../../../assets/dietGenerator/images/Average.svg";
import { ReactComponent as Heavy } from "../../../../../../assets/dietGenerator/images/Heavy.svg";
import { ReactComponent as GainMuscle } from "../../../../../../assets/dietGenerator/images/GainMuscle.svg";
import { ReactComponent as Maintain } from "../../../../../../assets/dietGenerator/images/Maintain.svg";
import { ReactComponent as LooseWeight } from "../../../../../../assets/dietGenerator/images/LooseWeight.svg";
import { ReactComponent as GainWeight } from "../../../../../../assets/dietGenerator/images/GainWeight.svg";
import { ReactNode } from "react";
import axiosFoodieInstance from "../../../../../../axios/axiosFoodieInstance";
import { ENDPOINTS_MEALS } from "../../../../../../navigation/endpoints";

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
        name: "LOSE",
        image: <LooseWeight />,
    },
    {
        name: "GAIN",
        image: <GainWeight />,
    },
    {
        name: "MAINTAIN",
        image: <Maintain />,
    },
    {
        name: "MUSCLE",
        image: <GainMuscle />,
    },
];

type DIET_TYPE_ICONS = {
    [key: string]: ReactNode;
};

export const DIET_TYPE_ICONS: DIET_TYPE_ICONS = {
    vegan: <Vegan />,
    vegetarian: <Vegetarian />,
    dairyFree: <DairyFree />,
    glutenFree: <GlutenFree />,
    veryHealthy: <VeryHealthy />,
};

export const ExccerciseData: ExcerciseI[] = [
    {
        name: "LOW",
        image: <NoExcercise />,
    },
    {
        name: "AVERAGE",
        image: <Average />,
    },
    {
        name: "HEAVY",
        image: <Heavy />,
    },
];

export interface excludedProductsI {
    id: number;
    listOfExcludedProducts: listOfExcludedProductsI[];
}

export interface listOfExcludedProductsI {
    id: number;
    name: string;
    [e: string]: string | number | boolean;
}

export const getExcludedProducts = async () => {
    return await axiosFoodieInstance
        .get<excludedProductsI>(ENDPOINTS_MEALS.excludedProducts)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
        });
};

export type ProductType = {
    id: number;
    name: string;
    selected?: boolean;
    [key: string]: string | number | boolean | undefined;
};
export const getDietProducts = async () => {
    return await axiosFoodieInstance
        .get<ProductType[]>(ENDPOINTS_MEALS.products)
        .then((response) => {
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
        });
};
