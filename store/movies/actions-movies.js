export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_MOVIES_FILTERED = 'ADD_MOVIES_FILTERED';
export const ADD_MOVIES_SEARCH = 'ADD_MOVIES_SEARCH';
export const CHANGE_GENRE = 'CHANGE_GENRE';
export const CHANGE_COUNT_LOAD_MORE = 'CHANGE_COUNT_LOAD_MORE';

export const writeMovies = (payload) => ({
	type: ADD_MOVIES,
	payload
});

export const writeMoviesFiltered = (payload) => ({
	type: ADD_MOVIES_FILTERED,
	payload
});

export const writeMoviesSearch = (payload) => ({
	type: ADD_MOVIES_SEARCH,
	payload
});

export const changeGenre = (payload) => ({
	type: CHANGE_GENRE,
	payload
});

export const changeCountLoadMore = (payload) => ({
	type: CHANGE_COUNT_LOAD_MORE,
	payload
});
