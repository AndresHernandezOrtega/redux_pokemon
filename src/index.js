import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import pokemonReducer from './reducers/pokemonReducer';

const store = createStore(pokemonReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
