// npm modules
import React, {Component} from "react";

// user modules
import {CommonHeader} from "views/components";

class Detail extends Component {
    constructor(props) {
        console.log("constructor Detail");
        super(props);
        
        let params = this.props.params;

        this.page = params.page;
        this.id = params.id; 
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
                <CommonHeader />
                {this.props.children}
            </div>
        );
    }
}

export default Detail;