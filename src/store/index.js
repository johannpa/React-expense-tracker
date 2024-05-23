import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const store = configureStore({
    reducer: {
        EXPENSE: expenseSlice.reducer,
    },
});

export { store };