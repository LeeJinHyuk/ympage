import React, {Component} from "react";
import {connect} from "react-redux";
import {setActivityListData, setServeListData, setInternationalListData, SET_ACTIVITY_LIST, SET_SERVE_LIST, SET_INTERNATIONAL_LIST} from "modules/state";
import {MainHeader} from "views/components";

class Main extends Component {

    componentDidMount() {
        let props = this.props;
        let currentPath = props.location.pathname;
        let listData = props.listData;

        if (listData) {
            console.log("Exist listData");

        } else {
            console.log("Not exist listData");
            switch(currentPath) {
                case "/" :
                    props.setListData();
                    break;
                case "/serve" :
                    props.setListData();
                    break;
                case "/international" :
                    props.setListData();
                    break;
            }
        }
    }

    render() {
        return (
            <div>
                <MainHeader />
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (_state, _ownProps) => {
    let currentPath = _ownProps.location.pathname;
    let currentData;

    switch(currentPath) {
        case "/" :
            currentData = _state.activity.listData;
            break;
        case "/serve" :
            currentData = _state.serve.listData;
            break;
        case "/international" :
            currentData = _state.international.listData;
            break;
    }

    return {
        listData : currentData
    };
};

const mapDispatchToProps = (_dispatch, _ownProps) => {
    let currentPath = _ownProps.location.pathname;
    let setListData;

    switch(currentPath) {
        case "/" :
            setListData = () => {
                _dispatch(setActivityListData("activity"));
            };
            break;
        case "/serve" :
            setListData = () => {
                _dispatch(setServeListData("serve"));
            };
            break;
        case "/international" :
            setListData = () => {
                _dispatch(setInternationalListData("international"));
            };
            break;
    }

    return {
        setListData : setListData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);