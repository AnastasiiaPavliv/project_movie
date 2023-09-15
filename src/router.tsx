import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {AllGenresPage, MovieInfoPage, MoviesListPage} from "./pages";

const router =createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[{
            index: true,element: <Navigate to={'movies'}/>
        },
            {
            path:'movies', element:<MoviesListPage/>
        },{
            path:'movie/:id', element:<MovieInfoPage/>
        },
            {
                path:'genres', element:<AllGenresPage/>
            }]
    }
])
export {router}