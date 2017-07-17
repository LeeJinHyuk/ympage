import React, {Component} from "react";
import {Route} from "react-router-dom";
import {MainHeader} from "components";
import Activity from "./activity/activity";
import Serve from "./serve/serve";
import International from "./international/international";

class Main extends Component {

    render() {
        return (
            <div>
                <MainHeader />
                <Route exact path="/" component={Activity} />
                <Route path="/serve" component={Serve} />
                <Route path="/international" component={International} />
            </div>
        );
    }
}

export default Main;