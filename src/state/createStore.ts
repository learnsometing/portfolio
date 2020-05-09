import { createStore, combineReducers } from 'redux';
import { portfolioReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  portfolioReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
