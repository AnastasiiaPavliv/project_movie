import {FC, PropsWithChildren, useEffect} from 'react';
import {IMovie} from "../../interface/moviesInterface";
import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";


interface IProps extends PropsWithChildren {
movie:IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const nav=useNavigate()

    function shortenText(movieT: string): string {
        if (movieT.length > 18) {
            return movieT.substring(0, 18) + '...'
        }
        return movieT
    }

    return (
        <div className={css.main} onClick={()=>{nav(`/movie/${movie.id}`)}}>
            <div><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/></div>
            <div>{shortenText(movie.title)}</div>
        </div>
    );
};

export {Movie};