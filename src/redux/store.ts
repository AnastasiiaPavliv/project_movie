import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesSlice";
import {themeReducer} from "./slices/themeSlice";
import {genreReducer} from "./slices/genreSlice";

const store= configureStore({
    reducer:{
        moviesReducer,
       themeReducer,
         genreReducer
    }
})


type RootState= ReturnType<typeof store.getState>
type AppDispatch=typeof store.dispatch

export type{
    RootState, AppDispatch
}
export {store}