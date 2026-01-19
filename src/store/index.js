import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from './projectsSlice'
import userReducer from './userSlice'
import themeReducer from './themeSlice'

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        user: userReducer,
        theme: themeReducer,
    }
})