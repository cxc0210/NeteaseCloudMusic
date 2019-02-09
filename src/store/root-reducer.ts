import { combineReducers } from 'redux';

const defaultState = {
	inputValue: '123',
	list: ["234", "345"]
}

const reducer = (state = defaultState, action:any) => {
	return defaultState;
};

const rootReducer = combineReducers({
	test: reducer
});

export default rootReducer;