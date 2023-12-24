import { configureStore } from "@reduxjs/toolkit";
import { reducerfun } from "./Reducer";

export const store123 = configureStore({
    reducer:{
        count:reducerfun
    }
})