import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import authorsReducer from "./slices/authorsSlice";
import usersReducer from "./slices/usersSlice";
import jenreReducer from "./slices/jenreSlice";

export const store = configureStore({
    reducer: {
        bookReducer,
        authorsReducer,
        usersReducer,
        jenreReducer
    }
})