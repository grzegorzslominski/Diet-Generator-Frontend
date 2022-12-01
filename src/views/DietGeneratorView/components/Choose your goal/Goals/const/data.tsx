import { ReactComponent as Dish } from "../../../../../../assets/dietGenerator/images/Dish.svg"
import { ReactNode } from "react";


export interface DataI {
  name: string;
  image: ReactNode;
}
export const data: DataI[] = [
  {
    name: "Loose weight",
    image: <Dish/>
  },
  {
    name: "Maintain weight",
    image: <Dish/>

  },
  {
    name: "Gain weight",
    image: <Dish/>

  },
  {
    name: "Gain muscle",
    image: <Dish/>

  }
]