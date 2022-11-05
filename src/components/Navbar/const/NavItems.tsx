export type NavItem = {
    label: string;
    routing?: string;
    external?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
    {
        label: "How it Works",
        routing: "/",
    },
    {
        label: "Sign In",
        routing: "/",
    },
    {
        label: "Sign Up",
        routing: "/",
    },
];
