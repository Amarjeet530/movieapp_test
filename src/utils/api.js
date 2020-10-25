import axios from "axios";

const API_KEY = 'ea7ebe90';
const URL = (title,type) => `http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}&type=${type}`


const detailsURL = (imdbID,movie) => `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}&type=${movie}`

export const fetchAPI = (title,type) => axios.get(URL(title,type));
export const fetchDetailsAPI = (imdbID,movie) => axios.get(detailsURL(imdbID,movie));
