import React, {Component} from "react";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {Main, Activity, International, Serve} from "views/pages";

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Main}>
                        <IndexRoute component={Activity} />
                        <Route path="serve" component={Serve} />
                        <Route path="international" component={International} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default App;