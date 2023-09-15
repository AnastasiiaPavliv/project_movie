import React, {useEffect, useState} from 'react';
import {IMovie} from "../../interface/moviesInterface";
import {moviesService} from "../../services/moviesService";
import {useParams} from "react-router-dom";
import css from './MovieInfo.module.css'
import StarRatings from "react-star-ratings";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {IGenre, IGenres} from "../../interface/genresInterface";
import {useAppLocation} from "../../hooks/useAppLocation";

const MovieInfo: React.FC = () => {
    const [movie, setMovie] = useState<IMovie>(null);
    const [genre, setGenre] = useState<IGenres<IGenre>>(null);

    const {id}=useParams()
     const dispatch = useAppDispatch();
      const {genres} = useAppSelector(state => state.moviesReducer)

    useEffect(()=>{
        moviesService.getById(id).then(({data})=> setMovie(data))
    },[id])

    useEffect(()=>{
         dispatch(moviesActions.getGenres())
    },[dispatch])
console.log(genre)

    // useEffect(() => {
    //    moviesService.getGenres().then(({data})=>setGenre(data)) ;
    // }, []);



    const currentMovieGenres: IGenre[] = [];

    // genres.filter(genre => {
    //     movie.genre_ids.map(currentMovie => genre.id === currentMovie ? currentMovieGenres.push(genre) : null)
    // })
    // genres.filter(genre => {
    //     if (movie.genre_ids.includes(genre.id)) {
    //         currentMovieGenres.push(genre);
    //     }
    // })
    const Stars: React.FC = () => {
        const [rating, setRating] = useState<number>(0);
        const localStorageKey = `movieRating_${id}`;
        const saveRatingToLocalStorage = (newRating: number) => {
            localStorage.setItem(localStorageKey, newRating.toString());
        };
        useEffect(() => {
            const savedRating = localStorage.getItem(localStorageKey);
            if (savedRating) {
                setRating(parseInt(savedRating));
            }
        }, []);
        const handleRatingChange = (newRating: number) => {
            setRating(newRating);
            saveRatingToLocalStorage(newRating);
            };

        return (

            <div className={css.star}>
                <div className={css.details}><b>Vote:</b>{movie.vote_average}</div>
                <StarRatings
                    rating={rating}
                    starRatedColor="blue"
                    changeRating={handleRatingChange}
                    numberOfStars={10}
                    name='rating'
                    starHoverColor="midnightblue"
                />
            </div>
        );
    };

    return (
        <div>
            {movie && (
                <div className={css.main}>
                    <div className={css.container}>
                    <div className={css.poster}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    </div> <div className={css.text}>
                        <div className={css.title}> {movie.title}</div>
                    <div className={css.description}><b>Overview:</b> {movie.overview}</div>

                    {/*<div className={css.details}><b>Genres:</b>{genre.name}</div>*/}
                    <div className={css.details}><b>Release date:</b>{movie.release_date}</div>
                    <div className={css.details}><b>Popularity:</b>{movie.popularity}</div>
                    {/*<div className={css.details}><b>Popularity:</b>{movie.popularity}</div>*/}
                    <Stars />
                        {/*{genres.map((genre, index)=>*/}
                        {/*    <div key={index}>{genre.name}</div>)}*/}
                        {currentMovieGenres.map((movieGenre )=> {
                            return <a key={movieGenre.id}>
                                {currentMovieGenres[currentMovieGenres.length - 1].id === movieGenre.id ? movieGenre.name : `${movieGenre.name},`}
                            </a>}
                        )}
                    </div> </div>

                </div>
            )}
        </div>
    );
};

export {MovieInfo};
