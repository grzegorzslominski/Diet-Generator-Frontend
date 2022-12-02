import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosFoodieInstance from "../../axios/axiosFoodieInstance";
import { User } from "../../models/User/User";

const initialState = null as User;

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<User>) => {
            return payload;
        },
    },
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;