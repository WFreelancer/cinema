export const OPEN_SEARCH = 'OPEN_SEARCH';
export const SET_SEARCH = 'SET_SEARCH';

export const actionSearchMenu = () => ({
	type: OPEN_SEARCH,
})
export const setSearch = (payload) => ({
	type: SET_SEARCH,
	payload
})
