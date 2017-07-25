import React from "react";
import {Router} from ""
import {Provider} from "react-redux";
import App from "app";

const Root = ({store}) => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default Root;
