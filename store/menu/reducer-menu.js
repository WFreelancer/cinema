import {OPEN_MENU, SHOW_ICON} from './actions-menu'

const initialState = {
  menuOpen: false,
  showIcon: false,
}


export const reducerMenu = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_MENU: {
			 return { ...state, menuOpen: !state.menuOpen }
		}
		case SHOW_ICON: {
			 return { ...state, showIcon: action.payload }
		}
		default:{
			return state;
		}
	}
}