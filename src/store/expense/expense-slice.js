import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expenseSlice",
    initialState: {
        expenseList: [{name: "Ordinateur", price: 300}],
    },
    reducers: {
        addExpense: (currentSlice, action) => {
            currentSlice.expenseList.push(action.payload);
        }
    }
});


const { addExpense } = expenseSlice.actions;
export { addExpense };