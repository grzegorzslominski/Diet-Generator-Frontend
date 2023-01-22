const makeFirstLatterUppercase = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

const MARKS_TO_REMOVE = [
    "<ol>",
    "</ol>",
    "<li>",
    "</li>",
    "</li><li>",
    "<ol><li>",
    ".</li><li>",
    "<ol><li>",
];

const prepareRecipeInstrucion = (instrucion: string | undefined) => {
    if (!instrucion) return;
    let parsedInstrucion;

    MARKS_TO_REMOVE.map((mark) => {
        parsedInstrucion = instrucion.replaceAll(mark, "");
    });

    return parsedInstrucion;
};

export { makeFirstLatterUppercase, prepareRecipeInstrucion };