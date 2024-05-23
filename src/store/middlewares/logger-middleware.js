import { createListenerMiddleware } from "@reduxjs/toolkit";

export const loggerMiddleware =  createListenerMiddleware();

loggerMiddleware.startListening({
    predicate:(action) => {
        return true;
    },
    effect: async (action, listenerAPI) => {
        console.log(action);
        console.log(listenerAPI.getState());
    }
})