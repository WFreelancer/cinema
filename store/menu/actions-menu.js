export const OPEN_MENU = 'OPEN_MENU';
export const SHOW_ICON = 'SHOW_ICON';

export const actionOpenMenu = () => ({
	type: OPEN_MENU,
})

export const actionSchowIcon = (payload) => ({
	type: SHOW_ICON,
	payload
})
