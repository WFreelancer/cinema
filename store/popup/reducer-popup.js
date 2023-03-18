import {OPEN_POPUP} from './actions-popup'

const initialState = {
  popupOpen: false,
}


export const reducerPopup = (state = false, action) => {
	switch (action.type) {
		case OPEN_POPUP: {
			 return !state
		}
		default:{
			return state;
		}
	}
}