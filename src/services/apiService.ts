import axios, {AxiosResponse} from "axios";
import {baseURL} from "../const";

type IRes<DATA>=Promise<AxiosResponse<DATA>>

const accessTokenKey='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmRkZmRiZTY1NTVhOTJhYWFiZTA0ZDQ5ZTliNmNkYiIsInN1YiI6IjYzZWViMmM4Y2RkYmJjMDBkNWU0NmIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z7rnd3pHCBKPrV7DkijkzSyqznbHM4lEedvOPxqkdZU'
const apiKey= 'abddfdbe6555a92aaabe04d49e9b6cdb';
const apiService=axios.create({
    baseURL,
    method:'POST',
    headers:{
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization:`Bearer ${accessTokenKey} `
    }

})

;
export type{IRes}
export {apiService}