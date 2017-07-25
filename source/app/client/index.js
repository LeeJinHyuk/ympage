import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Reducer from "modules/index";
import App from "app";

let store = createStore(Reducer);
let rootElement = document.getElementById("root");

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);