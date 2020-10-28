import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";

import App from "./app/App";
import {configureStore} from "./store/configureStore";
import { QueryParamProvider } from 'use-query-params';

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
