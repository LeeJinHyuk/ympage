// npm modules
import React, {Component} from "react";
import {connect} from "react-redux";

// user modules


class Content extends Component {
    constructor(props) {
        console.log("constructor Content");
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount Content");
    }

    componentDidMount() {
        console.log("componentDidMount Content");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps Content");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate Content");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate Content");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate Content");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount Content");
    }

    render() {
        return (
            <div>{this.props.detailData.pgmNm}</div>
        );
    }
}

export default Content;