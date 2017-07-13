import React, {Component} from "react";
import {Route} from "react-router-dom";
import Main from "./main/main";

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main} />
            </div>
        );
    }
}

export default App;

//<Route path="/detail" component={Detail} />
//<Route path="/search" component={Search} />