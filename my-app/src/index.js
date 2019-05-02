import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import MemoStore from './memo/Store';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={MemoStore}>
        <App /> 
    </Provider>,
    document.getElementById('root')
)