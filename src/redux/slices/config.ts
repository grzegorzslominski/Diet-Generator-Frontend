import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ConfigData = {
    version: string;
    foodieAPI: string;
};

const initialState: ConfigData = {
    version: "",
    foodieAPI: "",
};

const configSlice = createSlice({
    name: "config",
    initialState: initialState,
    reducers: {
        setConfig: (state, { payload }: PayloadAction<ConfigData>) => {
            return payload;
        },
    },
});

export const configReducer = configSlice.reducer;
export const { setConfig } = configSlice.actions;
