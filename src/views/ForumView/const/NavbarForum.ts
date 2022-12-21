export type NavbarForumI = {
  label: string;
  routing?: string;
  external?: boolean;
}

export const NAV_ITEMS: NavbarForumI[] = [
  {
    label: "Newest posts",
    routing: "/",
  },
  {
    label: "Newest added meals",
    routing: ""
  },
  {
    label: "Share your feedback",
    routing: ""
  },
  {
    label: "Verify newly added meals",
    routing: ""
  },
];
