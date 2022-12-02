export type NavItem = {
    label: string;
    routing?: string;
    login?: boolean;
    register?: boolean;
    external?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
    {
        label: "How it Works",
        routing: "/",
    },
    {
        label: "Sign In",
        login: true,
    },
    {
        label: "Sign Up",
        register: true,
    },
];
