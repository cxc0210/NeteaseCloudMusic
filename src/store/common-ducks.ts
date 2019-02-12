// constants
const SHOW_LOGIN_PANEL = "header/show_login_panel";
const HIDE_LOGIN_PANEL = "header/hide_login_panel";

// state
const defaultState = {

}

// reducer
export const commonReducer = (state = defaultState, action:any) => {
	let newState = Object.assign({}, state);
	switch(action.type){
		case SHOW_LOGIN_PANEL:
			//newState.showLoginPanel = true;
			return newState;
		case HIDE_LOGIN_PANEL:
			//newState.showLoginPanel = false;
			return newState;
		default:
			return defaultState;
	}
};

// anction creater
export function showLoginPanelAction(){
	return {
		type: SHOW_LOGIN_PANEL
	}
};

export function hideLoginPanelAction(){
	return {
		type: HIDE_LOGIN_PANEL
	}
};
