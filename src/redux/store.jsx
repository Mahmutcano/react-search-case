import { configureStore } from "@reduxjs/toolkit";
import  SearchSlice  from "./slices/SearchSlice";

export const store=configureStore({
    reducer:{
        search:SearchSlice,
    }
})