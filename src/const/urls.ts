const baseURL=process.env.REACT_APP_API

const urls={
    movies:(page:number)=>`/discover/movie?page=${page}`,
    movie:(id:number)=>`/movie/${id}`,
    genres:'/genre/movie/list'
};

export{ baseURL, urls}