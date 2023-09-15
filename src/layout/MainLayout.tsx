import {Outlet} from "react-router-dom";
import {useAppSelector} from "../hooks/hooks";
import css from './MainLayou.module.css'
import {Header} from "../components";



const MainLayout = () => {
    const {status} = useAppSelector(state => state.themeReducer);
    const body = document.getElementsByTagName('body')[0];

    if(!status){
        body.classList.add(css.theme)
    }else {
        body.classList.remove(css.theme)
    }


        return (
        <div >
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};