
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

import structure from './reducers/structure';

const rootReducer =  combineReducers({
    structure
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);