import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useLocation, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {moviesActions} from "../../redux/slices/moviesSlice";
import SearchIcon from '@mui/icons-material/Search';
import {createTheme, TextField, Toolbar} from "@mui/material";
import {styled} from "@mui/styles";

const Search = () => {
    interface ISearch{
        mSearch: string
    }

    const nav=useNavigate()
    const dispatch=useAppDispatch()

    const{reset,register, handleSubmit}=useForm({mode:'all'})
    const {genreId} = useAppSelector(state => state.genreReducer)
    // const {pathname} = useLocation()


    const save=(movie:ISearch)=>{
        nav('/movies?page=1');
        dispatch(moviesActions.setSearch(movie.mSearch));
        reset()
    }
    const Field=styled (TextField)(({theme})=>({
        color: 'inherit',
        width: '100%',

    }));

    return (
        <form  onSubmit={handleSubmit(save)}>
            <Toolbar>
                <SearchIcon/>
                <Field label="Search..." {...register('mSearch')}/>
            </Toolbar>
        </form>
    );
};

export {Search};


