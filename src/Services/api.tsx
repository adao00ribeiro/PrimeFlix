import axios from "axios";
//URL API :https://api.themoviedb.org/3/
export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});