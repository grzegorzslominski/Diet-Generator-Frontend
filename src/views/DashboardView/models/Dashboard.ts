import axiosFoodieInstance from "../../../axios/axiosFoodieInstance";
import { ENDPOINTS_DASHBOARD } from "../../../navigation/endpoints";


export interface DashboardI {
  newPosts: newPostsI[]
  creatorRecipes: RecipeViewI[]
}

export interface RecipeViewI {
  id: number;
  title: string;
  servings: number;
  readyInMinutes: number;
  imagePath: string;
  instructions: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  verified: boolean
  created_at: number;
  user: UserI
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
  ingredients: IngredientI[]
  recipeImagePath: string;
  author: UserI
  userImagePath: string
  recipeComments: [] | null
  recipeLikes: RecipeLikesI[]

}

export interface RecipeLikesI {
  id: number;
  timestamp: number;
  user: AuthorI
}

export interface IngredientI {
  id: number;
  name: string;
  amount: number;
  unit: string;
}
export interface UserI {
  id: number;
  firstName: string;
  lastName: string;
}
export interface newPostsI {
  id: number;
  title: string;
  description: string;
  timestamp: number;
  postImagePath: string;
  author: AuthorI
  userImagePath: string;
  postComments: [];
  likes: LikesI[];

}

export interface AuthorI {
  id: number;
  firstName: string;
  lastName: string;
  subscribed: boolean;
}

export interface LikesI {
  id: number;
  timestamp: number;
  user: AuthorI
}

export const getDashboardFullInfo = async () => {
  return await axiosFoodieInstance
    .get<DashboardI>(`${ENDPOINTS_DASHBOARD.dashboard}`)
    .then((response) => {
      if(response.status === 200){
        return response.data
      }
    })
}