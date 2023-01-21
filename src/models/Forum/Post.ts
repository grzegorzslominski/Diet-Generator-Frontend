export type Post = {
    id: number;
    timestamp: number;
    title: string;
    description: string;
    author: PostAuthor;
    likes: PostLike[];
    postComments: [];
    postImagePath: string | null;
    userImagePath: string | null;
};

export type PostLike = {
    id: number;
    timestamp: number;
    user: PostAuthor;
};

export type PostAuthor = {
    id: number;
    firstName: string | null;
    lastName: string | null;
};
