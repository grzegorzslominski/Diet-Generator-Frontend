export enum ENDPOINTS_USER {
    generator = "/diet/generator",
    login = "/authenticate",
    register = "/account/register",
    userAddPostComment = "/forum/post/comment",
    userInfo = "/account/profile/info",
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
