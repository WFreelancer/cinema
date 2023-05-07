import {OPEN_TRAILER, OPEN_MESSAGE_SUCCESS, OPEN_COOKIES} from './actions-popup'

const initialState = {
  trailer: false,
  messageSuccess: false,
  cookies: false,
}


export const reducerPopup = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_TRAILER: {
			 return {...state, trailer: !state.trailer }
		}
		case OPEN_MESSAGE_SUCCESS: {
			 return {...state, messageSuccess: !state.messageSuccess }
		}
		case OPEN_COOKIES: {
			 return {...state, cookies: action.payload }
		}
		default:{
			return state;
		}
	}
}