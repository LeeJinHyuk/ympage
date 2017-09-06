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
        let detailData = this.props.detailData;
        console.log(nextProps);
        if (detailData) {
            switch(this.page) {
                case "activity" :
                case "serve" :

                    break;
                case "international" :

                    break;
            }
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
                {
                    this.item
                    ?
                        <CommonHeader detailData={ this.item } />
                    :
                        ""
                }

                {
                    this.item 
                    ?
                        React.cloneElement(
                            this.props.children, 
                            { 
                                page : this.page, 
                                detailData : this.item 
                            }
                        )
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