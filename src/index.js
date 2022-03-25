import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import thunk from 'redux-thunk';

// redux
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';


import { logActions } from './middlewares';

const customCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const composedEnhancers = customCompose(
    applyMiddleware(thunk, logActions)
)

const store = createStore(
    rootReducer,
    composedEnhancers
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
