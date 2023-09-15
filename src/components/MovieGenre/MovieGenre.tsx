import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {moviesActions} from "../../redux/slices/moviesSlice";

// const MovieGenre = () => {
//     const dispatch=useAppDispatch()
//     const {genreMovies}=useAppSelector(state => state.genreReducer)
//     const {genres}=useAppSelector(state => state.moviesReducer)
//
//
//     useEffect(()=>{
//         dispatch(moviesActions.getGenres())
//     },[dispatch])
//  console.log(genreMovies)
// console.log(genres)
//
//     return (
//         <div>
//
//             {/*{genres.map((genre, index)=><div key={index}></div>)}*/}
//         </div>
//     )
// };
//
// export {MovieGenre}

import css from './MovieGenre.module.css'
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {genreActions} from "../../redux/slices/genreSlice";

const MovieGenre = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

     const {genreMovies, genreId} = useAppSelector(state => state.genreReducer)
    const {genres, movieSearch} = useAppSelector(state => state.moviesReducer)

    useEffect(() => {
        dispatch(moviesActions.getGenres());
    }, [dispatch]);

    const genreHandler = (id: string) => {
        dispatch(genreActions.setGenreId(id))
        navigate(`/movie?with_genres=${genreId}&page=${id}`);
    }
    const error = () => {
        console.log('eror');
    }
    return (
        <div className={css.movieByGenreWrapper}>
            {genres.map((genre, index) =>
                <div key={index} className={css.movieGenreBox}>
                    <a className={css.text} onClick={!movieSearch ?() => genreHandler(genre.id.toString()) : error}>{genre.name}</a>
                </div>
            )}

        </div>
    );
};

export {
    MovieGenre,
};