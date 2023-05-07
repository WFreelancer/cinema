const API_KEY_MOVIE = process.env.NEXT_PUBLIC_KEY;


const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY_MOVIE}&include_adult=false`;


const getMovie = (countPage, genre) => API_URL + `&language=en-US&page=${countPage}` + (genre !== 0 ? `&with_genres=${genre}` : ``);

const getMovieByName = (request) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_MOVIE}&language=en-US&query=${request}&page=1&include_adult=false`;

const currentMovie = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY_MOVIE}&language=en-US`;


export {
	getMovie,
	getMovieByName,
	currentMovie
}