export const ADD_FILTER = 'ADD_FILTER';

export const writeMoviesFiltered = (filtersMovies) => ({
	type: ADD_FILTER,
	filtersMovies
})
