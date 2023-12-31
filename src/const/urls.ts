const baseURL=process.env.REACT_APP_API

const urls={
    moviesPage:(id:string)=>`/discover/movie?page=${id}`,
    movieById:(id:string)=>`/movie/${id}`,
    genres:'/genre/movie/list',
    keyword: (keyword: string, id: string): string => `/search/movie?query=${keyword}&page=${id}`,
    getByGenre: (genreId: string, id: string):string => `/discover/movie?with_genres=${genreId}&page=${id}`
};

export{ baseURL, urls}