import axios from "axios";
import values from "./values";

const apiConfig = {
	baseURL: "https://api.themoviedb.org/3",
	responseType: "json",
};

const localApiConfig = {
	baseURL: "https://my-watchlist-1412.herokuapp.com/",
	responseType: "json",
};

const omdbApiConfig = {
	baseURL: "http://www.omdbapi.com",
	responseType: "json",
};

const API_KEY = values.api_key;

const API = axios.create(apiConfig);
const localAPI = axios.create(localApiConfig);
const omdbAPI = axios.create(omdbApiConfig);

const requestUrls = {
	weeklytrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`,
	weeklytrendingShows: `/trending/tv/week?api_key=${API_KEY}&language=en-US&page=1`,
	topRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	popularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
	popularShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
	topRatedShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	seasonInfo: `tv/<TV_ID>/season/<SEASON_NUMBER>?api_key=${API_KEY}`,
	watchProviders: `<type>/<TV_ID>/watch/providers?api_key=${API_KEY}`,
	fetchTrending: `/trending/all/week?api_key=${API_KEY}& language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}& with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language="en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

const requests = {
	api: API,
	urls: requestUrls,
	localAPI,
	omdbAPI,
};

export default requests;
