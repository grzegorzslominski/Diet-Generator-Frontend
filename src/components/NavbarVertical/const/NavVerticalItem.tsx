import { ReactNode } from "react";
import {ReactComponent as Diet} from "../const/images/Diet.svg";
import {ReactComponent as MyMeals} from "../const/images/MyMeals.svg";
import {ReactComponent as GenerateDiet} from "../const/images/GeneraeteDiet.svg";
import {ReactComponent as Profile} from "../const/images/Profile.svg";
import {ReactComponent as Premium} from "../const/images/Premium.svg";
import {ReactComponent as Cart} from "../const/images/Cart.svg";

export type NavItem = {
  label: string;
  routing?: string;
  external?: boolean;
  image: ReactNode;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Diet",
    routing: "/",
    image: <Diet/>
  },
  {
    label: "My meals",
    routing: "/",
    image: <MyMeals/>
  },
  {
    label: "Generate diet",
    routing: "/",
    image: <GenerateDiet/>

  },
  {
    label: "Profile",
    routing: "/",
    image: <Profile/>

  },
  {
    label: "Premium",
    routing: "/",
    image: <Premium/>

  },
  {
    label: "Cart",
    routing: "/",
    image: <Cart/>

  },
];
