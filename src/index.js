import React from 'react';
import ReactDOM from 'react-dom';
import {Paper} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router} from 'react-router-dom';
import "./App.css";
import themes from './components/Theme'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import * as ServiceWorker from "./serviceWorker";

ReactDOM.render(
        <Router>
            <ThemeProvider theme={themes}>
            <Paper style={{height: "100vh"}}>
                <CssBaseline />
                <App/>
            </Paper>
            </ThemeProvider>
        </Router>
    , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
ServiceWorker.register();