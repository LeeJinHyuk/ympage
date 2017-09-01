// npm modules
import React, {Component} from "react";

// user modules


class Detail extends Component {
    constructor(props) {
        console.log("constructor Detail");
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount Detail");
    }

    componentDidMount() {
        console.log("componentDidMount Detail");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps Detail");

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate Detail");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate Detail");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate Detail");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount Detail");
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Detail;