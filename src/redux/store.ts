import {configureStore} from "@reduxjs/toolkit";
// import {carReducer} from "./slice/carSlice";

const store= configureStore({
    reducer:{

    }
})


type RootState= ReturnType<typeof store.getState>
type AppDispatch=typeof store.dispatch

export type{
    RootState, AppDispatch
}
export {store}