import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NotificationData = {
    label: string;
    header: string;
    message: string;
    timeout?: number;
};

const initialState: NotificationData = {
    label: "",
    header: "",
    message: "",
};

const notificationSlice = createSlice({
    name: "notification",
    initialState: initialState,
    reducers: {
        setNotification: (state, { payload }: PayloadAction<NotificationData>) => {
            return payload;
        },
    },
});

export const notificationReducer = notificationSlice.reducer;
export const { setNotification } = notificationSlice.actions;
