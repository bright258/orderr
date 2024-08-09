import { configureStore } from "@reduxjs/toolkit";
import reduxFile from "./reduxFile";
export const store = configureStore({
    reducer: {
        issue: reduxFile,
        
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
