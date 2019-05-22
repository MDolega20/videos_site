import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import Body from './Body';

import structure from './store/reducers/structure';

const rootReducer =  combineReducers({
    structure
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Body />
                </Router>
            </Provider>
        );
    }
}


export default App;