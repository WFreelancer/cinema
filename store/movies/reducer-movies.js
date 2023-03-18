import {ADD_MOVIES} from './actions-movies'

export const reducerMovies = (state = [], action) => {
	switch (action.type) {
		case ADD_MOVIES: {
			return action.movies;
		}
		default:{
			return state;
		}
	}
}