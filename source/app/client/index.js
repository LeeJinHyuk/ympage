import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import App from "app";

let rootElement = document.getElementById("root");

ReactDom.render(
	<App />,
    rootElement
);