export const OPEN_TRAILER = 'OPEN_TRAILER';
export const OPEN_MESSAGE_SUCCESS = 'OPEN_MESSAGE_SUCCESS';
export const OPEN_COOKIES = 'OPEN_COOKIES';

export const openPopupTrailer = () => ({
	type: OPEN_TRAILER,
})
export const openPopupSuccess = () => ({
	type: OPEN_MESSAGE_SUCCESS,
})
export const openCookies = (payload) => ({
	type: OPEN_COOKIES,
	payload
})

