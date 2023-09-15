import {IMovie, IMovies} from "../../interface/moviesInterface";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";
import {AxiosError} from "axios";
import {IGenre, IGenres} from "../../interface/genresInterface";

// interface IState{
//     genreM:IMovies
//     genreId:string,
//
// }
// const initialState: IState = {
//     genreM: {
//         page: 1,
//         results: [],
//         total_pages: null,
//         total_results: null,
//         name:null
//     },
//     genreId: null,
//
// }
//  const getByGenre =createAsyncThunk<IGenres<IGenre>, {id:string, page:string}>(
//     'genreSlice/getByGenre',
//     async ({id, page},{rejectWithValue})=>{
//         try {
//             const {data}=await moviesService.getGenres()
//             return data
//         }catch (e) {
//             const err = e as AxiosError;
//             return rejectWithValue(err.response.data);
//         }
//      }
//  )
// const genreSlice=createSlice({
//     name:'genreSlice',
//     initialState,
//     reducers:{
//         setGenreId: (state, action) => {
//             state.genreId = action.payload
//         }
//
//     },
//     extraReducers:builder => builder
//         .addCase(getByGenre.fulfilled, (state, action) => {
//             state.genreM = action.payload
//         })
//
//
// })
// const {reducer: genreReducer, actions} = genreSlice;
//
// const genreActions = {
//     ...actions,
//      getByGenre
// }
//
// export {
//     genreActions,
//     genreReducer
// }

interface IState{
    genreMovies: IMovies,
    genreId: string
}

const initialState: IState = {
    genreMovies: {
        page: 1,
        results: [],
        total_pages: null,
        total_results: null
    },
    genreId: null
}

const getByGenre = createAsyncThunk<IMovies, {id: string,page: string}>(
    'genreSlice/getByGenre',
    async ({id,page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMoviesByGenre(id, page)
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenreId: (state, action) => {
            state.genreId = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getByGenre.fulfilled, (state, action) => {
            state.genreMovies = action.payload
        })
})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getByGenre
}

export {
    genreActions,
    genreReducer}