import {IMovie, IMovies} from "../../interface/moviesInterface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";
import {AxiosError} from "axios";
import {IGenre} from "../../interface/genresInterface";

interface MoviesState{
    movies:IMovies,
    genres:IGenre[],
    movieSearch:string,
    movieFilter:IMovie[]
}
const initialState: MoviesState={
    movies:{
        page:1,
        results:[],
        total_pages: null,
        total_results: null,
    }, genres:[],
    movieSearch:null,
    movieFilter:[]
}
const getGenres = createAsyncThunk<IGenre[],void>(
    'moviesSlice/allGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getGenres();
            return data.genres;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getAll = createAsyncThunk<IMovies, { page: string }>(
    'moviesSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page)
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const moviesSlice=createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{
        setPage:(state, action)=>{
            state.movies.page=action.payload
        },
        setMovies:(state, action)=>{
            state.movies=action.payload
        },
        setSearch:(state, action) => {
            state.movieSearch=action.payload
        },
        setMovieFilter:(state, action)=>{
            state.movieFilter=action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getGenres.fulfilled,(state, action) => {
            state.genres = action.payload
        })
    },

})
const {reducer:moviesReducer, actions}= moviesSlice

const moviesActions={
    ...actions,getAll, getGenres
}
export {moviesReducer, moviesActions}