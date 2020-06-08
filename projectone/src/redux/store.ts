


import { compose, applyMiddleware, Store, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { state, loginReducer } from './reducers';



const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)




 

export const store: Store<any> = createStore(
  state,
  enhancer
)


