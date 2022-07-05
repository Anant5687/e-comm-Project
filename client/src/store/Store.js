import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "../slice/userInfoSlice";

export const Store = configureStore({
    reducer:{
        userInfo:userInfoSlice
    }
})