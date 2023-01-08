export type Note = {
    title: string;
    date: string;
    content: NoteArticle[];
};

type NoteArticle = {
    title: string;
    notePoints: string[];
};

export const DEV_NOTE: Note[] = [
    {
        title: "New functionalities in application",
        date: "27.12.2022",
        content: [
            {
                title: "Adding your own meals",
                notePoints: [
                    "ability to add your own meals and include them in the diet",
                    "editing added meals",
                    "sharing your own meals",
                ],
            },
            {
                title: "Editing your weight history",
                notePoints: [
                    "new functionality enabling detailed preview and editing of history of entered weights",
                    "possibility to delete a single weight entry",
                ],
            },
        ],
    },
    {
        title: "Performance fixes",
        date: "12.11.2022",
        content: [
            {
                title: "Hardware fixes",
                notePoints: [
                    "the application has been moved to the cloud environment in order to increase the speed of the application",
                    "improved application stability",
                    "reducing the delay in operation when using a sudden jump of users using the application",
                ],
            },
            {
                title: "Software fixes",
                notePoints: ["fixed several functionalities affecting delays in the application"],
            },
        ],
    },
];
