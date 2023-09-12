import {FC, PropsWithChildren} from 'react';
import {Movies} from "../../components";

interface IProps extends PropsWithChildren {

}

const MoviesListPage: FC<IProps> = () => {
    return (
        <div>
            MoviesList
           <Movies/>
        </div>
    );
};

export {MoviesListPage};