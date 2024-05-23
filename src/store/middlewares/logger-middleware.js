import { createListenerMiddleware } from "@reduxjs/toolkit";

export const loggerMiddleware =  createListenerMiddleware();

loggerMiddleware.startListening({
    predicate:(action) => {
        return true;
    },
    effect: async (action) => {
        console.log(action);
    }
})