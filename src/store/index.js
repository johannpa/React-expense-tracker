import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";


const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const rootReducers = combineReducers({
    EXPENSE: expenseSlice.reducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducers,
});


const persistore = persistStore(store);

export { store, persistore };