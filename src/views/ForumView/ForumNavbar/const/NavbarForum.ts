import { NAVIGATION } from "../../../../navigation/paths";
export type ForumNavbarItem = {
    label: string;
    routing: string;
    authorities?: AuthorityType[];
};

export type AuthorityType = "ROLE_ADMIN" | "ROLE_USER" | "ROLE_DIETITIAN" | "ROLE_INFLUENCER";

export const NAV_ITEMS: ForumNavbarItem[] = [
    {
        label: "Newest posts",
        routing: NAVIGATION.forumPosts,
    },
    {
        label: "Newest added meals",
        routing: NAVIGATION.forumMeals,
    },
    // {
    //     label: "Verify newly added meals",
    //     routing: NAVIGATION.forumNewlyAddedMeals,
    //     authorities: ["ROLE_ADMIN", "ROLE_DIETITIAN"],
    // },
];
