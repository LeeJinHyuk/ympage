// npm modules
import React, {Component} from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

// user modules
import Reducer from "modules/index";
import {Main, Activity, International, Serve} from "views/pages";

let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
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