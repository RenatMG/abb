import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {QueryParamProvider} from 'use-query-params';
import reportWebVitals from './reportWebVitals';

import App from './app/App';
import {configureStore} from './store/configureStore';
import reportWebVitals from './reportWebVitals';

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <QueryParamProvider ReactRouterRoute={Route}>
                <App/>
            </QueryParamProvider>
        </Router>
    </Provider>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
