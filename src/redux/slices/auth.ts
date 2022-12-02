import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthViewState = {
    login: boolean;
    register: boolean;
};

const initialState: AuthViewState = {
    login: false,
    register: false,
};

const authViewSlice = createSlice({
    name: "authView",
    initialState: initialState,
    reducers: {
        setAuthView: (state, { payload }: PayloadAction<AuthViewState>) => {
            return payload;
        },
    },
});

export const authViewReducer = authViewSlice.reducer;
export const { setAuthView } = authViewSlice.actions;
