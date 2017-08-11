// npm modules
import React, {Component} from "react";
import {connect} from "react-redux";

// user modules
import {SET_SERVE_LIST, setListData} from "modules/state";

class Serve extends Component {

    constructor(props) {
        console.log("constructor Serve");
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount Serve");
    }


    componentDidMount() {
        console.log("componentDidMount Serve");
        let props = this.props;
        let listData = props.listData;

        if (!listData) {
            props.setListData(SET_SERVE_LIST);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps Serve");

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate Serve");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate Serve");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate Serve");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount Serve");
    }

    render() {

        return(
            <div>{this.props.listData}</div>
        );
    }

}

const mapStateToProps = (_state, _ownProps) => {
    return {
        listData : _state.serve.listData
    };
};

const mapDispatchToProps = (_dispatch, _ownProps) => {
    return {
        setListData : (_type) => {
            _dispatch(setListData(_type));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Serve);