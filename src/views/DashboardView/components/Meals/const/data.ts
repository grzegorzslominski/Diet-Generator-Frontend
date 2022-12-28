import Chicken from "../../../../../assets/dashboard/images/chicken.png";

export interface MealI {
    name: string;
    rating: number;
    image: string;
    basicIngredients: string[];
    kcal: number;
    c: string;
    p: string;
    f: string;
}

export const data: MealI[] = [
    {
        name: "Chiken Masala",
        rating: 8.4,
        image: Chicken,
        basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
        kcal: 511,
        c: "12g",
        p: "12g",
        f: "12g",
    },
];
