// npm modules
import React, {Component} from "react";
import {connect} from "react-redux";

// user modules
import {SET_INTERNATIONAL_LIST, setListData} from "modules/state";

class International extends Component {

    /**
     * Life cycle func
    */
    constructor(props) {
        console.log("constructor International");
        super(props);

        this.makeList = this.makeList.bind(this);
    }

    componentWillMount() {
        console.log("componentWillMount International");
    }

    componentDidMount() {
        console.log("componentDidMount International");
        let props = this.props;
        let listData = props.listData;

        if (!listData) {
            props.setListData(SET_INTERNATIONAL_LIST);
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

    /**
     * User func
     */
    makeList() {
        let items = this.props.listData.items[0].item;

        return items.map((_item, _idx) => {
            return (<li key={_idx}>{_item.arName[0]}</li>);
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
        listData : _state.international.listData,
        errorMessage : _state.international.errorMessage
    };
};

const mapDispatchToProps = (_dispatch, _ownProps) => {
    return {
        setListData : (_type) => {
            _dispatch(setListData(_type));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(International);