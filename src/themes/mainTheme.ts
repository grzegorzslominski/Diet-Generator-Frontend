type MainThemeProps = {
    colors: {
        primaryColor: string;
        secondaryColor: string;
        textColor: string;
        mainBlack: string;
        grey: string;
        inputText: string;
    };
    gradients: {
        mainGradient: string;
        buttonGradient: string;
    };
    text: {
        Allan: string;
        Lato: string;
    };
};

export const mainTheme: MainThemeProps = {
    colors: {
        primaryColor: "#F5F6FA",
        secondaryColor: "#4E4C75",
        textColor: "#737380",
        mainBlack: "#232323",
        grey: "#999595",
        inputText: "#363635",
    },
    gradients: {
        mainGradient: "linear-gradient(90deg, #4E4B77 0%, #6D5E9D 40%, #F44B42 70%, #F05840 100%)",
        buttonGradient:
            "linear-gradient(45deg, rgba(244, 128, 66, 0.9) 0, rgb(109, 94, 157) 92.5%)",
    },
    text: {
        Allan: "Allan",
        Lato: "Lato",
    },
};

export type Theme = typeof mainTheme;
