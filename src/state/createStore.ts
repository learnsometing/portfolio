import { createStore, combineReducers } from 'redux';
import { portfolioReducer } from './portfolio/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

export type RootState = ReturnType<typeof rootReducer>;
