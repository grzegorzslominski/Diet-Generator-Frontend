import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { ENDPOINTS_SURVEY } from "../../navigation/endpoints";

export type Surveys = {
    flavourProfile: FlavourProfileSurveyAnswers;
    products: ProductsSurveyAnswers;
};

export type FlavorProfileSurveyForm = FlavorProfileQuestion[];

export type FlavorProfileQuestion = {
    id: number;
    question: string;
    rating: number;
};

export type FlavourProfileSurveyAnswers = {
    answers: FlavorProfileAnswer[];
};

export type FlavorProfileAnswer = {
    id: number;
    value: number;
};

export type ProductsSurveyAnswers = ProductsAnswer[];

export type ProductsAnswer = {
    id: number;
    score: number;
};

export type SurveyProduct = {
    id: number;
    title: string;
    imagePath: string;
};

export const FLAVOUR_SERVEY_QUESTIONS = [
    "In scale 1 to 10 how much do you like salty food",
    "In scale 1 to 10 how much do you like sour food",
    "In scale 1 to 10 how much do you like sweet food",
    "In scale 1 to 10 how much do you like bitter food",
    "In scale 1 to 10 how much do you like meat",
    "In scale 1 to 10 how much do you like spicy food",
    "In scale 1 to 10 how much do you like mediterranean cuisine",
    "In scale 1 to 10 how much do you like Asian cuisine",
    "In scale 1 to 10 how much do you like American cuisine",
    "In scale 1 to 10 how much do you like Arabic cuisine",
    "In scale 1 to 10 how much do you like sea food (also fish)",
    "In scale 1 to 10 how much do you like fatty food",
    "In scale 1 to 10 how much do you like Polish cuisine",
];

export const getSurveyProducts = async () => {
    return await axiosFoodieInstance
        .get<SurveyProduct[]>(ENDPOINTS_SURVEY.productsSurvey)
        .then((response) => {
            return response.data;
        });
};

export const postFlavorProfileSurvey = async (surveyAnswers: FlavourProfileSurveyAnswers) => {
    return await axiosFoodieInstance
        .post<ProductsSurveyAnswers>(ENDPOINTS_SURVEY.flavorProfileSurvey, surveyAnswers)
        .then((response) => {
            return response.data;
        });
};

export const postRecipesSurvey = async (surveyAnswers: ProductsSurveyAnswers) => {
    return await axiosFoodieInstance
        .post<ProductsSurveyAnswers>(ENDPOINTS_SURVEY.productsSurvey, surveyAnswers)
        .then((response) => {
            return response.data;
        });
};
