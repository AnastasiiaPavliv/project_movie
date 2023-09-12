import {IMovie} from "../../interface/moviesInterface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";
import {AxiosError} from "axios";

interface MoviesState{
    movies:IMovie[],

}
const initialState: MoviesState={
    movies:[],

}
const getAll= createAsyncThunk<{movies:IMovie[]},{ page:number }>(
    'moviesSlice/getAll',
    async ({page},{rejectWithValue})=>{
        try {
            const {data}= await moviesService.getAll(page)
            return {movies:data}
        }catch (e) {
            const err=e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
const moviesSlice=createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
    builder
        .addCase(getAll.pending, (state,action) => {
            state.movies = action.payload;
        })

    }
})
const {reducer:moviesReducer, actions}= moviesSlice

const moviesActions={
    ...actions,getAll
}
export {moviesReducer, moviesActions}