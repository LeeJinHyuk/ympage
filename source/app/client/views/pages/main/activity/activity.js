// npm modules
import React, {Component} from "react";
import {connect} from "react-redux";

// user modules
import {SET_ACTIVITY_LIST, setListData} from "modules/state";

class Activity extends Component {

    /**
     * Life cycle func
    */
    constructor(props) {
        console.log("constructor Activity");
        super(props);

        this.makeList = this.makeList.bind(this);
    }

    componentWillMount() {
        console.log("componentWillMount Activity");
    }

    componentDidMount() {
        console.log("componentDidMount Activity");
        let props = this.props; 
        let listData = props.listData;

        if (!listData) {
            props.setListData(SET_ACTIVITY_LIST);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps Activity");

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate Activity");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate Activity");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate Activity");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount Activity");
    }

    /**
     * User func
     */
    makeList() {
        let items = this.props.listData.items[0].item;

        return items.map((_item, _idx) => {
            return (<li key={_idx}>{_item.organNm[0]}</li>);
        });
    }

    render() {
        return(
            <div>
                {
                    this.props.listData
                        ?
                        <ul>
                            {this.makeList()}
                        </ul>
                        :
                        ""
                }
            </div>
        );
    }
}

const mapStateToProps = (_state, _ownProps) => {
    return {
        listData : _state.activity.listData,
        errorMessage : _state.activity.errorMessage
    };
};

const mapDispatchToProps = (_dispatch, _ownProps) => {
    return {
        setListData : (_type) => {
            return _dispatch(setListData(_type));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);