import {combineReducers} from 'redux';
import {reducerMovies} from './movies/reducer-movies';
import {reducerMenu} from './menu/reducer-menu';
import {reducerSearch} from './search/reducer-search';
import {reducerPopup} from './popup/reducer-popup';

export const rootReducer = combineReducers({
	movies: reducerMovies,
	menu: reducerMenu,
	search: reducerSearch,
	popup: reducerPopup,
});

