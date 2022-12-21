import Chicken from "../../../../../assets/dashboard/images/chicken.png"

export interface mealItemI {
  date: string;
  day: string;
  meals: string[];
  kcal: string;
  fat: string;
  carbs: string;
  proteins: string;
  mealDays?: mealDayI[];
}

export interface mealDayI {
  name: string;
  image: string;
  category: string;
  calories: string;
  proteins: string;
  carbs: string;
  fat: string;
  basicIngredients: string[];
  properties?: propObject[];

}

export type propObject = {
  vegetarian: string;
  vegan: string;
  glutenFree: string;
  dairyFree: string;
  veryHealthy: string;
}

export const MEALItem: mealItemI[] = [
  {
    date: "03.01.2022",
    day: "Sunday",
    meals: ["porridge with berries","salmon with sweet potatoes",
    "fruit cocktail","tuna salad", "sandwich"],
    kcal: "421",
    fat: "55g",
    carbs: "125g",
    proteins: "51g",
    mealDays: [
      {
          name: "Meal name",
          image: Chicken,
          category: "category",
          calories: "699",
          proteins: "699",
          carbs: "699",
          fat: "699",
          basicIngredients: ["rice","tomato","chicken","nuts"],
          properties: [
            {
              vegetarian: "true",
              vegan: "false",
              glutenFree: "true",
              dairyFree: "falke",
              veryHealthy: "true",
            }
          ],
        },
      {
        name: "Meal name2",
        image: Chicken,
        category: "category",
        calories: "699",
        proteins: "699",
        carbs: "699",
        fat: "699",
        basicIngredients: ["rice","tomato","chicken","nuts"]
      },
      {
        name: "Meal name3",
        image: Chicken,
        category: "category",
        calories: "699",
        proteins: "699",
        carbs: "699",
        fat: "699",
        basicIngredients: ["rice","tomato","chicken","nuts"]
      },
      ]

  },
  {
    date: "03.01.2022",
    day: "Saturday",
    meals: ["porridge with berries","salmon with sweet potatoes",
      "fruit cocktail","tuna salad", "sandwich"],
    kcal: "421",
    fat: "55g",
    carbs: "125g",
    proteins: "51g"
  },
  {
    date: "03.01.2022",
    day: "Monday",
    meals: ["porridge with berries","salmon with sweet potatoes",
      "fruit cocktail","tuna salad", "sandwich"],
    kcal: "421",
    fat: "55g",
    carbs: "125g",
    proteins: "51g"
  },
]