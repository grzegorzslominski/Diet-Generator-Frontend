const makeFirstLatterUppercase = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

const prepareRecipeInstrucion = (instrucion: string | undefined) => {
    if (!instrucion) return;
    return instrucion.replace(/<\/?[^>]+(>|$)/g, "");
};

export { makeFirstLatterUppercase, prepareRecipeInstrucion };
