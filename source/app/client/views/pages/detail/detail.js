// npm modules
import React, {Component} from "react";
import {connect} from "react-redux";

// user modules
import {CommonHeader} from "views/components";
import {SET_ACTIVITY_DETAIL, setListData} from "modules/state";

class Detail extends Component {

    /**
     * Life cycle func
    */
    constructor(props) {
        console.log("constructor Detail");
        super(props);
        
        let params = this.props.params;

        this.page = params.page;
        this.id = params.id; 
        this.item;
    }

    componentWillMount() {
        console.log("componentWillMount Detail");
    }

    componentDidMount() {
        console.log("componentDidMount Detail");
        let props = this.props; 

        props.setListData(
            {
                type : SET_ACTIVITY_DETAIL,
                key : this.id
            }
        );
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps Detail");
        let detailData = this.props.detailData;

        if (detailData) {
            this.item = detailData.items[0].item[0];
        }
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
                <CommonHeader title={this.item ? this.item.pgmNm[0] : ""} />
                {
                    this.item 
                    ?
                    React.cloneElement(this.props.children, { detailData : this.item })
                    :
                    ""
                }
            </div>
        );
    }
}

const mapStateToProps = (_state, _ownProps) => {
    let params = _ownProps.params;
    let data;
    let message;

    switch(params.page) {
        case "activity" :
            data = _state.activity.detailData;
            message = _state.activity.errorMessage;
            break;
    }

    return {
        cancelReq : _state.state.cancelReq,
        detailData : data,
        errorMessage : message
    };
};

const mapDispatchToProps = (_dispatch, _ownProps) => {
    return {
        setListData : (_obj) => {
            return _dispatch(setListData(_obj));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);