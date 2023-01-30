import { NAVIGATION } from "../../../navigation/paths";

export type NavItem = {
    label: string;
    routing?: string;
    external?: boolean;
    access: "authorized" | "unauthorized" | "all";
};

export const NAV_ITEMS: NavItem[] = [
    {
        label: "Home",
        routing: NAVIGATION.home,
        access: "all",
    },
    {
        label: "Dashboard",
        routing: NAVIGATION.dashboard,
        access: "authorized",
    },
    {
        label: "Forum",
        routing: `${NAVIGATION.forum}/posts`,
        access: "all",
    },
    {
        label: "Sign In",
        routing: NAVIGATION.home,
        access: "unauthorized",
    },
    {
        label: "Sign Up",
        routing: NAVIGATION.home,
        access: "unauthorized",
    },
    {
        label: "Logout",
        routing: NAVIGATION.home,
        access: "authorized",
    },
];
