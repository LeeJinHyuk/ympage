import React, {Component} from "react";
import {Route} from "react-router-dom";
import {MainHeader} from "views/components";
import {Activity, Serve, International} from "views/pages";

class Main extends Component {

    render() {
        return (
            <div>
                <MainHeader />
            </div>
        );
    }
}

export default Main;