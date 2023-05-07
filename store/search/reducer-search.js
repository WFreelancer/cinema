import {OPEN_SEARCH, SET_SEARCH} from './actions-search'

const initialState = {
  openSearch: false,
  searchState: '',
}


export const reducerSearch = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_SEARCH: {
			 return { ...state, openSearch: !state.openSearch }
		}
		case SET_SEARCH: {
			 return { ...state, searchState: action.payload }
		}
		default:{
			return state;
		}
	}
}