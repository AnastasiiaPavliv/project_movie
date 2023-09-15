import React, {useEffect} from 'react';
import {Pagination, Stack} from "@mui/material";
import {useAppSelector} from "../../hooks/hooks";
import {useSearchParams} from "react-router-dom";


const AppPagination = () => {
    const [query, setQuery]=useSearchParams()
    const {movies}=useAppSelector(state => state.moviesReducer)

    const handleChangePage=(event:React.ChangeEvent<unknown>, value:number)=>{
        setQuery(prev => ({...prev, page:value}))
    };
    const pageCount=Math.min(movies.total_pages || 500);

    useEffect(() => {
        // При зміні сторінки прокрутити до верхньої частини сторінки
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [query.get('page')]);

    return (
        <>
            <Stack spacing={2}>
                <Pagination count={pageCount} defaultPage={1} onChange={handleChangePage} page={+query.get('page')}/>
            </Stack>
        </>
    );
};

export {AppPagination};