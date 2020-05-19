import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { portfolioReducer } from './portfolio/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
