import {apiService, IRes} from "./apiService";
import {urls} from "../const";
import {IMovie} from "../interface/moviesInterface";

const moviesService={
    getAll:(page:number):IRes<IMovie[]>=>apiService.get(urls.movies(page))
}

export {moviesService}