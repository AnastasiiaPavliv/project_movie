import {AppPagination, Movies} from "../../components";
import css from './MoviesListPage.module.css'


const MoviesListPage = () => {
    return (
        <div >
         <Movies results={[]}/>
            <div className={css.page}>
                <AppPagination/>
        </div>
        </div>
    );
};

export {MoviesListPage};