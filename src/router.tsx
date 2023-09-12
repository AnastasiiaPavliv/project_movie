import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {MovieInfoPage, MoviesListPage} from "./pages";

const router =createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[{
            path:'page/:page', element:<MoviesListPage/>
        },{
            path:'movie/:id', element:<MovieInfoPage/>
        }]
    }
])
export {router}