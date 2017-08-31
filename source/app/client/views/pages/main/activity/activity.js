// npm modules
import React, {Component} from "react";
import {Link} from "react-router";
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
        let props = this.props;
        if (props.cancelReq) {
            props.cancelReq();
        }
    }

    /**
     * User func
     */
    makeList() {
        let items = this.props.listData.items[0].item;

        return items.map((_item, _idx) => {
            return (
                <Link to={"/search/activity/" + _item.key1[0]} key={_idx}>
                    <ul>
                        <li>기관명 : {_item.organNm[0]}</li>
                        <li>프로그램명 : {_item.pgmNm[0]}</li>
                        <li>참가비 : {_item.price[0]}</li>
                        <li>참가대상 : {_item.target[0]}</li>
                        <li>등록일 : {_item.sdate[0]}</li>
                    </ul>
                </Link>
            );
        });
    }

    render() {
        return(
            <section>
                {
                    this.props.listData
                        ?
                        this.makeList()
                        :
                        ""
                }
            </section>
        );
    }
}

const mapStateToProps = (_state, _ownProps) => {
    return {
        cancelReq : _state.state.cancelReq,
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