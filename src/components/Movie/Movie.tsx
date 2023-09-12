import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interface/moviesInterface";
import {useAppDispatch} from "../../hooks/hooks";

interface IProps extends PropsWithChildren {
movie:IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {title, poster_path}=movie
    // const dispatch=useAppDispatch()
    return (
        <div >
            <div><img src={poster_path} /></div>
            <div>{title}</div>
        </div>
    );
};

export {Movie};