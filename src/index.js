import React from 'react';
import ReactDOM from 'react-dom';

// react-redux
import { Provider } from 'react-redux';
import store from './redux/store'
// component
import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);