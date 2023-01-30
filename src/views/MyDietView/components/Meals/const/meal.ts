import axiosFoodieInstance from "../../../../../axios/axiosFoodieInstance";
import { PublicUser, PublishedRecipe } from "../../../../../models/User/ExpandedUser";
import { ENDPOINTS_DIET } from "../../../../../navigation/endpoints";

export type Diet = {
    daysForWeekDiet: DietDay[];
    id: number;
    dietGoal: string;
    timestamp: number;
    startingWeight: number;
    recipeIdsForTheWeek: number[];
    user: PublicUser;
};

export type DietDay = {
    id: number;
    recipesForToday: PublishedRecipe[];
    todaysCalories: number;
    todaysCarbs: number;
    todaysFat: number;
    todaysProtein: number;
};

export const getDiet = async () => {
    return await axiosFoodieInstance.get<Diet>(ENDPOINTS_DIET.generatedDiet).then((response) => {
        if (response.status === 200) return response.data;
    });
};
