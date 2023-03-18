import {ADD_FILTER} from './actions-filter'

export const reducerFilters = (state = [], action) => {
	switch (action.type) {
		case ADD_FILTER: {
			return action.filtersMovies
		}
		default:{
			return state;
		}
	}
}