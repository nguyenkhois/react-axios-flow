/* @flow */
import * as React from 'react';
import * as ReactDOM from "react-dom";

import css from './styles.css';

import App from './app';

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(
        <App />,
        root
    );
}
