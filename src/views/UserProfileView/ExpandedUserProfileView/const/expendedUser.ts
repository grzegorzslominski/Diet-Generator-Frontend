import backgroundIMG from "../../../../assets/profile/background.png";
import profileIMG from "../../../../assets/profile/avatar.png";
import mealIMG from "../../../../assets/dashboard/images/chicken.jpg";
import articleIMG from "../../../../assets/profile/article_image.png";

import { SocialLinks } from "../../../../models/SocialsLinks/SocialsLinks";
import { MealI } from "../../../DashboardView/components/Meals/const/mealListData";

export type ExpendedUser = {
    backgroundIMG: string;
    avatarIMG: string;
    firstName: string;
    lastName: string;
    title: string;
    followersAmount: number;
    socials: SocialLinks;
    description: string;
    meals: MealI[];
    articles: Article[];
};

export type Article = {
    id: number;
    header: string;
    content: string;
    image?: string;
    author: string;
};

export const EXPENDED_USER_DATA: ExpendedUser = {
    backgroundIMG: backgroundIMG,
    avatarIMG: profileIMG,
    firstName: "Mark",
    lastName: "Yakotaki",
    title: "fitness couch",
    followersAmount: 1425,
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.facebook.com/",
        youtube: "https://www.facebook.com/",
    },
    description:
        "Our platform provides full support for the user in achieving his nutritional goals, starting with generating a diet and ending with maintaining his motivation. Thanks to the application of a modern model of artificial intelligence, each user is considered individually and our most important goal is to ensure the highest level of satisfaction with the proposed meals. . Thanks to the application of a modern model of artificial intelligence.",
    meals: [
        {
            name: "Chiken Masala",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
        {
            name: "Chiken Masala1",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
        {
            name: "Chiken Masala1",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
        {
            name: "Chiken Masala1",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
        {
            name: "Chiken Masala1",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
        {
            name: "Chiken Masala1",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
        {
            name: "Chiken Masala1",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
        {
            name: "Chiken Masala1",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
        {
            name: "Chiken Masala1",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
        {
            name: "Chiken Masala1",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
        {
            name: "Chiken Masala1",
            rating: 8.4,
            image: mealIMG,
            basicIngredients: ["rice", "chicken", "rice", "chicken", "rice", "chicken"],
            kcal: 511,
            c: "12g",
            p: "12g",
            f: "12g",
        },
    ],
    articles: [
        {
            id: 12,
            header: "Healthy Eating",
            content: `Eating a healthy diet is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about feeling great, having more energy, improving your health, and boosting your mood. Healthy eating doesn’t have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and diet advice out there, you’re not alone. It seems that for every expert who tells you a certain food is good for you, you’ll find another saying exactly the opposite.`,
            image: articleIMG,
            author: "Michael Scott",
        },
        {
            id: 13,
            header: "Healthy Eating",
            content: `Eating a healthy diet is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about feeling great, having more energy, improving your health, and boosting your mood. Healthy eating doesn’t have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and diet advice out there, you’re not alone. It seems that for every expert who tells you a certain food is good for you, you’ll find another saying exactly the opposite.`,
            image: articleIMG,
            author: "Michael Scott",
        },
        {
            id: 14,
            header: "Healthy Eating",
            content: `Eating a healthy diet is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about feeling great, having more energy, improving your health, and boosting your mood. Healthy eating doesn’t have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and diet advice out there, you’re not alone. It seems that for every expert who tells you a certain food is good for you, you’ll find another saying exactly the opposite.`,
            image: articleIMG,
            author: "Michael Scott",
        },
    ],
};
