import { ReactNode } from "react";
import { ReactComponent as DietIcon } from "../../../assets/icons/navbar/diet.svg";
import { ReactComponent as MyMealsIcon } from "../../../assets/icons/navbar/my-meals.svg";
import { ReactComponent as GenerateDietIcon } from "../../../assets/icons/navbar/generaete-diet.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/navbar/profile.svg";
import { ReactComponent as PremiumIcon } from "../../../assets/icons/navbar/premium.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/icons/navbar/dashboard.svg";
import { NAVIGATION } from "../../../navigation/paths";

export type NavItem = {
    label: string;
    routing: string;
    icon: ReactNode;
};

export const NAV_ITEMS: NavItem[] = [
    {
        label: "Dashboard",
        routing: NAVIGATION.dashboard,
        icon: <DashboardIcon />,
    },
    {
        label: "Profile",
        routing: NAVIGATION.profile,
        icon: <ProfileIcon />,
    },
    {
        label: "Diet",
        routing: NAVIGATION.myDiet,
        icon: <DietIcon />,
    },
    {
        label: "My recipes",
        routing: NAVIGATION.recipes,
        icon: <MyMealsIcon />,
    },
    {
        label: "Generate diet",
        routing: NAVIGATION.dietGenerator,
        icon: <GenerateDietIcon />,
    },
    {
        label: "Premium",
        routing: NAVIGATION.premium,
        icon: <PremiumIcon />,
    },
];
