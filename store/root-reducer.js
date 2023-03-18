import {combineReducers} from 'redux';
import {reducerMovies} from './movies/reducer-movies';
import {reducerFilters} from './filter/reducers-filter';
import {reducerMenu} from './menu/reducer-menu';
import {reducerSearch} from './search/reducer-search';
import {reducerPopup} from './popup/reducer-popup';

export const rootReducer = combineReducers({
	movies: reducerMovies,
	filters: reducerFilters,
	menu: reducerMenu,
	search: reducerSearch,
	popup: reducerPopup,
});

