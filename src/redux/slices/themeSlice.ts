import {createSlice} from "@reduxjs/toolkit";

interface IState {
    status: boolean
}

const initialState:IState = {
    status: true
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.status = action.payload
        }
    },
})

const {reducer: themeReducer, actions: {setTheme}} = themeSlice;

const themeActions = {
    setTheme
}

export {
    themeReducer,
    themeActions
}