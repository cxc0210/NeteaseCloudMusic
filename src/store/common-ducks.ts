// constants
const SHOW_LOGIN_PANEL = "header/show_login_panel";
const HIDE_LOGIN_PANEL = "header/hide_login_panel";

// state
const defaultState = {
	showHeaderLoginPanel: false
}

// reducer
export const commonReducer = (state = defaultState, action:any) => {
	switch(action.type){
		case SHOW_LOGIN_PANEL:
			return Object.assign({}, {showHeaderLoginPanel: true});
		case HIDE_LOGIN_PANEL:
			return Object.assign({}, {showHeaderLoginPanel: false});
		default:
			return defaultState;
	}
};

// anction creater
export function showLoginPanel(){
	return {
		type: SHOW_LOGIN_PANEL
	}
};

export function hideLoginPanel(){
	return {
		type: HIDE_LOGIN_PANEL
	}
};
