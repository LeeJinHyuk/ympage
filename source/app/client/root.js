import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "app";

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

export default Root;
