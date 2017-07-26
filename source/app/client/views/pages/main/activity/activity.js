import React, {Component} from "react";

class Activity extends Component {

    constructor(props) {
        console.log("constructor");
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount");
    }


    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {

        return(
            <div>Activity</div>
        );
    }

}

export default Activity;