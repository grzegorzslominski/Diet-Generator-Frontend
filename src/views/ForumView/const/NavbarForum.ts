import { NAVIGATION } from "../../../navigation/paths";
export type NavbarForumI = {
    label: string;
    routing?: string;
    external?: boolean;
};

export const NAV_ITEMS: NavbarForumI[] = [
    {
        label: "Newest posts",
        routing: NAVIGATION.forumPosts,
    },
    {
        label: "Newest added meals",
        routing: NAVIGATION.forumMeals,
    },
    {
        label: "Verify newly added meals",
        routing: NAVIGATION.forumNewlyAddedMeals,
    },
];
