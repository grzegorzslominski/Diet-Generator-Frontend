import ImageProfile from "../../../../assets/dashboard/images/userProfile.png";
import axiosFoodieInstance from "../../../../axios/axiosFoodieInstance";

export interface BasicPostI {
    id: number;
    title: string;
    timestamp: number;
    author: ForumUserI;
    userProfilePicture: string | null;
    description: string | undefined;
    commentsCount: number;
    likesCount: number;
}

export interface FullPostI extends BasicPostI {
    postComments: CommentI[] | null;
    likes: LikesI[] | null
}

export interface recipeVerifiedBasicI {
    id: number;
    title: string;
    description: string | undefined;
    timestamp: number;
    author: ForumUserI;
    userProfilePicture: string | null;
    commentsCount: number;
    likesCount: number;
}


export interface recipeViewI {
    id: number;
    servings: number;
    title: string;
    readyInMinutes: number;
    image: string | undefined;
    instructions: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    verified: boolean;
    calories: number;
    carbs: number;
    fat: number;
    protein: number;


}

export interface recipeViewFullI extends recipeVerifiedBasicI{
    recipeView: recipeViewI;
    recipeComments: CommentI[] | null;
    recipeLikes: LikesI[] | null;

}

export interface ForumUserI {
    id: number;
    firstName: string | null;
    lastName: string | null;
    userProfilePicture: string | null;
}

export interface CommentI {
    id: string;
    content: string;
    timestamp: number;
    user: ForumUserI;
}

export interface LikesI {
    id: number;
    timestamp: number;
    author: ForumUserI;
}

export interface recipeNotVerifiedBasicI {
    id: number;
    title: string;
    description: string;
    timestamp: number;
    author: ForumUserI;
    userProfilePicture: string;
    commentsCount: number;
    likesCount: number;

}

// export const Posts: BasicPostI[] = [
//     {
//         id: "1",
//         userName: "Mikolaj W",
//         title: "Czy są jeszcze argumenty za tym, żeby mężczyzna się żenił? czy czasem śluby nie wynikają, z przyzwyczajenia/tradycji?",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies lectus nec magna ullamcorper bibendum. Suspendisse pellentesque, nisl et auctor molestie, ipsum tellus consequat lectus, nec pharetra dolor tortor sit amet justo. Praesent justo quam, placerat sit amet sagittis pellentesque, faucibus non purus. Quisque metus velit, ultricies sit amet magna sit amet, ornare interdum diam. Vestibulum eu condimentum nulla, vel mattis ante. Phasellus imperdiet scelerisque aliquam. Praesent vel magna in quam lacinia finibus. Nullam sodales erat sit amet interdum tincidunt. Phasellus semper ex maximus eros faucibus lacinia. Duis est ex, venenatis posuere ultricies vitae, vulputate non velit. Nam tempor justo enim. Nunc at tellus mauris.\n" +
//             "\n" +
//             "Duis sed libero ornare lorem iaculis ornare vitae at elit. Nulla lobortis condimentum dolor congue sagittis. Nulla luctus odio nec est varius, sit amet dapibus leo consequat. Nullam dapibus, purus eget sollicitudin dapibus, dolor velit pharetra orci, sed efficitur purus sem et dolor. In semper fermentum nunc viverra sollicitudin. Quisque gravida dolor et nibh ultricies, vitae posuere justo venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus eu purus sollicitudin tincidunt a id est. Quisque venenatis dignissim euismod. Donec dictum mattis tincidunt. In hac habitasse platea dictumst. Aenean pellentesque porttitor ligula sit amet porta. Proin consectetur mollis magna eu auctor. Nullam nec justo suscipit, dapibus libero quis, pellentesque ligula. Nullam hendrerit iaculis imperdiet. Pellentesque risus nibh, suscipit quis lectus a, varius dapibus diam.",
//         image: ImageProfile,
//         likes: 48,
//         comments: [
//             {
//                 userName: "Michal",
//                 comment: "super spojrzenie jestes szefem itd",
//                 likes: 5,
//             },
//             {
//                 userName: "Michal",
//                 comment:
//                     "super spojrzenie jestes szefem itd ale ja sie z toba nei zgadzam i uwazam ze mozna spojrzec na to z innej perspektywy : )",
//                 likes: 10,
//             },
//         ],
//     },
//     {
//         id: "2",
//         userName: "Mikolaj W",
//         title: "Czy są jeszcze argumenty za tym, żeby mężczyzna się żenił? czy czasem śluby nie wynikają, z przyzwyczajenia/tradycji?",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies lectus nec magna ullamcorper bibendum. Suspendisse pellentesque, nisl et auctor molestie, ipsum tellus consequat lectus, nec pharetra dolor tortor sit amet justo. Praesent justo quam, placerat sit amet sagittis pellentesque, faucibus non purus. Quisque metus velit, ultricies sit amet magna sit amet, ornare interdum diam. Vestibulum eu condimentum nulla, vel mattis ante. Phasellus imperdiet scelerisque aliquam. Praesent vel magna in quam lacinia finibus. Nullam sodales erat sit amet interdum tincidunt. Phasellus semper ex maximus eros faucibus lacinia. Duis est ex, venenatis posuere ultricies vitae, vulputate non velit. Nam tempor justo enim. Nunc at tellus mauris.\n" +
//             "\n" +
//             "Duis sed libero ornare lorem iaculis ornare vitae at elit. Nulla lobortis condimentum dolor congue sagittis. Nulla luctus odio nec est varius, sit amet dapibus leo consequat. Nullam dapibus, purus eget sollicitudin dapibus, dolor velit pharetra orci, sed efficitur purus sem et dolor. In semper fermentum nunc viverra sollicitudin. Quisque gravida dolor et nibh ultricies, vitae posuere justo venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus eu purus sollicitudin tincidunt a id est. Quisque venenatis dignissim euismod. Donec dictum mattis tincidunt. In hac habitasse platea dictumst. Aenean pellentesque porttitor ligula sit amet porta. Proin consectetur mollis magna eu auctor. Nullam nec justo suscipit, dapibus libero quis, pellentesque ligula. Nullam hendrerit iaculis imperdiet. Pellentesque risus nibh, suscipit quis lectus a, varius dapibus diam.",
//         image: ImageProfile,
//         likes: 25,
//         comments: [
//             {
//                 userName: "Michal",
//                 comment: "super spojrzenie jestes szefem itd",
//                 likes: 5,
//             },
//             {
//                 userName: "Michal",
//                 comment:
//                     "super spojrzenie jestes szefem itd ale ja sie z toba nei zgadzam i uwazam ze mozna spojrzec na to z innej perspektywy : )",
//                 likes: 18,
//             },
//         ],
//     },
//     {
//         id: "3",
//         userName: "Mikolaj W",
//         title: "Czy są jeszcze argumenty za tym, żeby mężczyzna się żenił? czy czasem śluby nie wynikają, z przyzwyczajenia/tradycji?",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies lectus nec magna ullamcorper bibendum. Suspendisse pellentesque, nisl et auctor molestie, ipsum tellus consequat lectus, nec pharetra dolor tortor sit amet justo. Praesent justo quam, placerat sit amet sagittis pellentesque, faucibus non purus. Quisque metus velit, ultricies sit amet magna sit amet, ornare interdum diam. Vestibulum eu condimentum nulla, vel mattis ante. Phasellus imperdiet scelerisque aliquam. Praesent vel magna in quam lacinia finibus. Nullam sodales erat sit amet interdum tincidunt. Phasellus semper ex maximus eros faucibus lacinia. Duis est ex, venenatis posuere ultricies vitae, vulputate non velit. Nam tempor justo enim. Nunc at tellus mauris.\n" +
//             "\n" +
//             "Duis sed libero ornare lorem iaculis ornare vitae at elit. Nulla lobortis condimentum dolor congue sagittis. Nulla luctus odio nec est varius, sit amet dapibus leo consequat. Nullam dapibus, purus eget sollicitudin dapibus, dolor velit pharetra orci, sed efficitur purus sem et dolor. In semper fermentum nunc viverra sollicitudin. Quisque gravida dolor et nibh ultricies, vitae posuere justo venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus eu purus sollicitudin tincidunt a id est. Quisque venenatis dignissim euismod. Donec dictum mattis tincidunt. In hac habitasse platea dictumst. Aenean pellentesque porttitor ligula sit amet porta. Proin consectetur mollis magna eu auctor. Nullam nec justo suscipit, dapibus libero quis, pellentesque ligula. Nullam hendrerit iaculis imperdiet. Pellentesque risus nibh, suscipit quis lectus a, varius dapibus diam.",
//         image: ImageProfile,
//         likes: 9,
//         comments: [
//             {
//                 userName: "Michal",
//                 comment: "super spojrzenie jestes szefem itd",
//                 likes: 4,
//             },
//             {
//                 userName: "Michal",
//                 comment:
//                     "super spojrzenie jestes szefem itd ale ja sie z toba nei zgadzam i uwazam ze mozna spojrzec na to z innej perspektywy : )",
//                 likes: 10,
//             },
//         ],
//     },
//     {
//         id: "4",
//         userName: "Mikolaj W",
//         title: "Czy są jeszcze argumenty za tym, żeby mężczyzna się żenił? czy czasem śluby nie wynikają, z przyzwyczajenia/tradycji?",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies lectus nec magna ullamcorper bibendum. Suspendisse pellentesque, nisl et auctor molestie, ipsum tellus consequat lectus, nec pharetra dolor tortor sit amet justo. Praesent justo quam, placerat sit amet sagittis pellentesque, faucibus non purus. Quisque metus velit, ultricies sit amet magna sit amet, ornare interdum diam. Vestibulum eu condimentum nulla, vel mattis ante. Phasellus imperdiet scelerisque aliquam. Praesent vel magna in quam lacinia finibus. Nullam sodales erat sit amet interdum tincidunt. Phasellus semper ex maximus eros faucibus lacinia. Duis est ex, venenatis posuere ultricies vitae, vulputate non velit. Nam tempor justo enim. Nunc at tellus mauris.\n" +
//             "\n" +
//             "Duis sed libero ornare lorem iaculis ornare vitae at elit. Nulla lobortis condimentum dolor congue sagittis. Nulla luctus odio nec est varius, sit amet dapibus leo consequat. Nullam dapibus, purus eget sollicitudin dapibus, dolor velit pharetra orci, sed efficitur purus sem et dolor. In semper fermentum nunc viverra sollicitudin. Quisque gravida dolor et nibh ultricies, vitae posuere justo venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus eu purus sollicitudin tincidunt a id est. Quisque venenatis dignissim euismod. Donec dictum mattis tincidunt. In hac habitasse platea dictumst. Aenean pellentesque porttitor ligula sit amet porta. Proin consectetur mollis magna eu auctor. Nullam nec justo suscipit, dapibus libero quis, pellentesque ligula. Nullam hendrerit iaculis imperdiet. Pellentesque risus nibh, suscipit quis lectus a, varius dapibus diam.",
//         image: ImageProfile,
//         likes: 125,
//         comments: [
//             {
//                 userName: "Michal",
//                 comment: "super spojrzenie jestes szefem itd",
//                 likes: 3,
//             },
//             {
//                 userName: "Michal",
//                 comment:
//                     "super spojrzenie jestes szefem itd ale ja sie z toba nei zgadzam i uwazam ze mozna spojrzec na to z innej perspektywy : )",
//                 likes: 10,
//             },
//         ],
//     },
// ];
export const getForumPostsMeals = async () => {
    return await axiosFoodieInstance.get<recipeVerifiedBasicI[]>(`/forum/recipe/verified`).then((response) => {
        if(response.status === 200){
            return response.data
        }
    })
}
export const getForumFullMeal = async (postID: number | undefined) => {
    return await axiosFoodieInstance.get<recipeViewFullI>(`/forum/recipe/${postID}`).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
};

export const getForumUnverifiedPostsMeals = async () => {
    return await axiosFoodieInstance.get<recipeNotVerifiedBasicI[]>(`/forum/recipe/notVerified`).then((response) => {
        if(response.status === 200){
            return response.data
        }
    })
}

export const getForumUnverifiedPostMeal = async (postID: number | undefined) => {
    return await axiosFoodieInstance.get<recipeViewFullI>(`/forum/recipe/${postID}`).then((response) => {
        if(response.status === 200){
            return response.data
        }
    })
}

export const getForumPosts = async () => {
    return await axiosFoodieInstance.get<BasicPostI[]>(`/forum/post`).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
};

export const getForumPost = async (postID: number | undefined) => {
    return await axiosFoodieInstance.get<FullPostI>(`/forum/post/${postID}`).then((response) => {
        if (response.status === 200) {
            return response.data;
        }
    });
};
