import {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Movie} from "../Movie/Movie";
import {moviesService} from "../../services/moviesService";

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {
    const dispatch = useAppDispatch()
    const {movies}=useAppSelector(state=>state.movies)

    useEffect(()=>{
        dispatch(moviesService.getAll())
    },[])

    return (
        <div>
            {movies && movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};