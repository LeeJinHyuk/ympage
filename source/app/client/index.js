import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Reducer from "modules/state";
import Root from "root";

let store = createStore(Reducer);
let rootEle = document.getElementById("root");

ReactDom.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    rootEle
);