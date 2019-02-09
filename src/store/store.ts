import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './root-reducer';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

function configureStore(initialState?: object) {
	// configure middlewares
	const middlewares: any[] = [];
	// compose enhancers
	const enhancer = composeEnhancers(applyMiddleware(...middlewares));
	// create store
	return createStore(rootReducer, initialState!, enhancer);
}

const store = configureStore();

export default store;
