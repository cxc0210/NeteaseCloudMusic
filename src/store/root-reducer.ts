import { combineReducers } from 'redux';
import { commonReducer } from './common-ducks';


const rootReducer = combineReducers({
	common: commonReducer
});

export default rootReducer;