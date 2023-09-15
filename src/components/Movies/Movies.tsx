import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'
import {IMovie} from "../../interface/moviesInterface";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {moviesService} from "../../services/moviesService";
import {genreActions} from "../../redux/slices/genreSlice";




interface IProps extends PropsWithChildren {
    results: IMovie[]
}

const Movies: FC<IProps> = () => {
    // const pageId=useParams<{page:string}>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const {genreId, genreMovies}=useAppSelector(state => state.genreReducer)
     const {movies, movieSearch, movieFilter}=useAppSelector(state => state.moviesReducer)
    const [query, setQuery] = useSearchParams({page: '1'})

useEffect(()=>{
    if(movieSearch && genreId){
        dispatch(moviesActions.getAll({page: query.get('page')}));
        setQuery(prev => ({...prev, page: prev.get('page')}));
    }else if (movieSearch) {
        moviesService.getKeyword(movieSearch, query.get('page')).then(({data}) => {
            if (data.results.length) {
                dispatch(moviesActions.setMovies(data));
            } else {
                navigate('/movies?page=1');
                dispatch(moviesActions.setSearch(null));
            }
        })
    } else if (genreId) {
        if (genreId) {
            dispatch(genreActions.getByGenre({id: genreId, page: query.get('page')}));
        } else {
            navigate('/movies?page=1');
            dispatch(moviesActions.setSearch(null));
        }
    }
},  [query, movieSearch, genreId])

    // useEffect(()=>{
    //      dispatch(moviesActions.getAll({page:query.get('page')}));
    //     setQuery(prev => ({...prev, page: prev.get('page')}));
    // },[dispatch, query,setQuery])


    useEffect(()=>{
        setQuery(prev=>({...prev, page:1}))
    },[])

    return (
        <div className={css.movies}>
            {
                !genreId && ! movieFilter.length ?
                    movies.results.map(movie => <Movie key={movie.id} movie={movie}/>) :
                    genreMovies ?
                        genreMovies.results.map(movie => <Movie key={movie.id} movie={movie}/>) :
                        movieFilter.length ? movieFilter.map(movie => <Movie key={movie.id} movie={movie}/>) : null
            }
            {/*{movies.results.map((movie:IMovie)=><Movie key={movie.id} movie={movie}/>)}*/}
        </div>
    );
};

export {Movies};

