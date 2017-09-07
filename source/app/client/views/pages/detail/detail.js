// npm modules
import React, {Component} from "react";
import {connect} from "react-redux";

// user modules
import {CommonHeader} from "views/components";
import {SET_ACTIVITY_DETAIL, SET_SERVE_DETAIL, SET_INTERNATIONAL_DETAIL,  setListData} from "modules/state";

class Detail extends Component {

    /**
     * Life cycle func
    */
    constructor(props) {
        console.log("constructor Detail");
        super(props);
        
        let params = this.props.params;

        // parent page name
        this.page = params.page;
        // detail data id
        this.id = params.id;

        this.getTitle = this.getTitle.bind(this);
    }

    componentWillMount() {
        console.log("componentWillMount Detail");
    }

    componentDidMount() {
        console.log("componentDidMount Detail");
        let props = this.props;
        let type;

        switch(this.page) {
            case "activity" :
                type = SET_ACTIVITY_DETAIL;
                break;
            case "serve" :
                type = SET_SERVE_DETAIL;
                break;
            case "international" :
                type = SET_INTERNATIONAL_DETAIL;
                break;
        }

        props.setListData(
            {
                type : type,
                key : this.id
            }
        );
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
        let props = this.props;

        if (props.cancelReq) {
            props.cancelReq();
        }
    }

    /**
     * User func
     */
    getTitle() {
        let title;

        switch(this.page) {
            case "activity" :
            case "serve" :
                title = this.props.detailData.data[0].pgmNm;
                break;
            case "international" :
                title = this.props.detailData.data[0].arName;
                break;
        }

        return title;
    }

    render() {

        return (
            <div>
                {
                    this.props.detailData && 
                        <CommonHeader title={ this.getTitle() } />
                }
                {
                    this.props.detailData &&
                        React.cloneElement(
                            this.props.children, 
                            { 
                                page : this.page, 
                                detailData : this.props.detailData.data[0]
                            }
                        )
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
        case "serve" :
            data = _state.serve.detailData;
            message = _state.serve.errorMessage;
            break;
        case "international" :
            data = _state.international.detailData;
            message = _state.international.errorMessage;
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