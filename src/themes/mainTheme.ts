type MainThemeProps = {
    colors: {
        primaryColor: string;
        secondaryColor: string;
        textColor: string;
        mainBlack: string;
    };
    gradients: {
        mainGradient: string;
    };
    text: {
        Allan: string;
        Lato: string;
    }
};

export const mainTheme: MainThemeProps = {
    colors: {
        primaryColor: "#F5F6FA",
        secondaryColor: "#4E4C75",
        textColor: "#737380",
        mainBlack: "#232323",
    },
    gradients: {
        mainGradient: "linear-gradient(90deg, #4E4B77 0%, #6D5E9D 40%, #F44B42 70%, #F05840 100%)",
    },
    text: {
        Allan: "Allan",
        Lato: "Lato"
    },
};

export type Theme = typeof mainTheme;
