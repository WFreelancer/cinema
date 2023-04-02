import {ADD_MOVIES, ADD_MOVIES_FILTERED, ADD_MOVIES_SEARCH, CHANGE_GENRE, CHANGE_COUNT_LOAD_MORE} from './actions-movies'

const initialState = {
  movies: [],
  moviesFiltered: [],
  moviesSearch: [],
  genreId: 0,
  loadMoreCount: 2,
}

export const reducerMovies = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MOVIES: {
			return {...state, movies: [...action.payload]};
		}
		case ADD_MOVIES_FILTERED: {
			return {...state, moviesFiltered: [...action.payload]};
		}
		case ADD_MOVIES_SEARCH: {
			return {...state, moviesSearch: [...action.payload]};
		}
		case CHANGE_GENRE: {
			return {...state, genreId: action.payload};
		}
		case CHANGE_COUNT_LOAD_MORE: {
			return {...state, loadMoreCount: action.payload};
		}
		default:{
			return state;
		}
	}
}