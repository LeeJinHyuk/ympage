import React, {Component} from "react";
import {MainHeader} from "views/components";

class Main extends Component {

    render() {
        return (
            <div>
                <MainHeader />
                {this.props.children}
            </div>
        );
    }
}

export default Main;