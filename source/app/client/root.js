import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "app";

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default Root;
