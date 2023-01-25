export enum ENDPOINTS_USER {
    generator = "/diet/generate",
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
    deleteUserAvatar = "image/delete/profile",
    uploadExtrasBackground = "image/upload/background",
    deleteExtrasBackground = "image/delete/background",
    uploadRecipeImage = "image/upload/recipe",
    deleteRecipeImage = "image/delete/recipe",
}

export enum ENDPOINTS_MEALS {
    products = "/diet/products",
    getRecipe = "recipe",
    addMeal = "/recipe/add",
    excludedProducts = "/diet/excludedProducts",
    userRecipes = "/recipe/user",
    removeUserRecipe = "/recipe",
    editUserRecipe = "/recipe",
}

export enum ENDPOINTS_EXPANDE_USER_PROFILE {
    getProfile = "/account/profile",
    extrasProfile = "account/profile/extras",
    followUser = "forum/follow",
}

export enum ENDPOINTS_SUBSCRIPTION {
    getSubscripton = "account/subscription",
    creatSubscription = "account/subscription/create",
    cancelSubscription = "account/subscription/cancel",
}

export enum ENDPOINTS_FORUM {
    verifyMeal = "/recipe/verify",
}

export enum ENDPOINTS_DASHBOARD {
    dashbordData = "/dashboard",
}
