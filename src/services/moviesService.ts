import {apiService, IRes} from "./apiService";
import {urls} from "../const";
import {IMovie, IMovies} from "../interface/moviesInterface";
import {IGenre, IGenres} from "../interface/genresInterface";

const moviesService={
    getAll:(id:string):IRes<IMovies> =>apiService.get(urls.moviesPage(id)),
    getById:(id:string):IRes<IMovie> => apiService.get(urls.movieById(id)),
    getGenres:():IRes<IGenres<IGenre>> => apiService.get(urls.genres),
    getMoviesByGenre: (genreId: string, id: string): IRes<IMovies> => apiService.get(urls.getByGenre(genreId, id)),
    getKeyword: (keyword: string, id: string): IRes<IMovies> => apiService.get(urls.keyword(keyword, id)),
}

export {moviesService}