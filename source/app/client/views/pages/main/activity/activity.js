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
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
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