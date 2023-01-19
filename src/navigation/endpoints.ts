export enum ENDPOINTS_USER {
    generator = "/diet/generator",
    login = "/authenticate",
    register = "/account/register",
    userInfo = "/account/profile/info",
    userAddPostComment = "/forum/post/comment",
    userAddMealComment = "/forum/recipe/comment",
    userStats = "/account/stats",
}

export enum ENDPOINTS_PROFILE {
    userProfile = "/account/profile",
    weightStats = "/account/profile/info/weights",
}

export enum ENDPOINTS_IMAGE_UPLOAD {
    uploadUserAvatar = "image/upload/profile",
    removeUserAvater = "image/delete/profile",
}

export enum ENDPOINTS_MEALS {
    products = "/diet/products",
}
