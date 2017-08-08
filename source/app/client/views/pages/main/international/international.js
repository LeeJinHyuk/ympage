// npm modules
import React, {Component} from "react";
import {connect} from "react-redux";

// user modules
import {setInternationalListData} from "modules/state";

class International extends Component {

    constructor(props) {
        console.log("constructor International");
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount International");
    }


    componentDidMount() {
        console.log("componentDidMount International");
        let props = this.props;
        let listData = props.listData;

        if (!listData) {
            props.setListData();
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps International");

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate International");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate International");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate International");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount International");
    }

    render() {

        return(
            <div>{this.props.listData}</div>
        );
    }

}

const mapStateToProps = (_state, _ownProps) => {
    return {
        listData : _state.international.listData
    };
};

const mapDispatchToProps = (_dispatch, _ownProps) => {
    return {
        setListData : () => {
            _dispatch(setInternationalListData("international"))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(International);