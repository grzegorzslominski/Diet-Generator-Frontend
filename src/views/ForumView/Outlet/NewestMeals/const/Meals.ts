export interface MealsI {
    id: string;
    userName: string;
    title: string;
    description: string;
    image: string;
    likes: number;
    comments: CommentsI[];
}

export interface CommentsI {
    userName: string;
    comment: string;
    likes: number;
}
