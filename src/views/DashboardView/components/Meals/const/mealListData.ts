import mealIMG from "../../../../../assets/dashboard/images/chicken.jpg";
import profileIMG from "../../../../../assets/profile/avatar.png";

export interface MealI {
    name: string;
    rating?: number;
    image?: string;
    basicIngredients: string[];
    description?: string;
    mealAuthor?: MealAuthor;
    kcal: number;
    c: string;
    p: string;
    f: string;
}

type MealAuthor = {
    name: string;
    avatarIMG: string;
};

export const MEALS_DATA: MealI[] = [
    {
        name: "Chiken Masala",
        rating: 8.4,
        image: mealIMG,
        basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lorem eget nisi bibendum, non consequat est ullamcorper. Ut in volutpat sem, ut ultricies augue.",
        mealAuthor: {
            name: "Lucy Beckham",
            avatarIMG: profileIMG,
        },
        kcal: 511,
        c: "12g",
        p: "12g",
        f: "12g",
    },
    {
        name: "Chiken Masala",
        rating: 8.4,
        image: mealIMG,
        basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lorem eget nisi bibendum, non consequat est ullamcorper. Ut in volutpat sem, ut ultricies augue.",
        mealAuthor: {
            name: "Lucy Beckham",
            avatarIMG: profileIMG,
        },
        kcal: 511,
        c: "12g",
        p: "12g",
        f: "12g",
    },
    {
        name: "Chiken Masala",
        rating: 8.4,
        image: mealIMG,
        basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lorem eget nisi bibendum, non consequat est ullamcorper. Ut in volutpat sem, ut ultricies augue.",
        mealAuthor: {
            name: "Lucy Beckham",
            avatarIMG: profileIMG,
        },
        kcal: 511,
        c: "12g",
        p: "12g",
        f: "12g",
    },
    {
        name: "Chiken Masala",
        rating: 8.4,
        image: mealIMG,
        basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lorem eget nisi bibendum, non consequat est ullamcorper. Ut in volutpat sem, ut ultricies augue.",
        mealAuthor: {
            name: "Lucy Beckham",
            avatarIMG: profileIMG,
        },
        kcal: 511,
        c: "12g",
        p: "12g",
        f: "12g",
    },
    {
        name: "Chiken Masala",
        rating: 8.4,
        image: mealIMG,
        basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lorem eget nisi bibendum, non consequat est ullamcorper. Ut in volutpat sem, ut ultricies augue.",
        mealAuthor: {
            name: "Lucy Beckham",
            avatarIMG: profileIMG,
        },
        kcal: 511,
        c: "12g",
        p: "12g",
        f: "12g",
    },
];
