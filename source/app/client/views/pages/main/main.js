import React, {Component} from "react";
import {connect} from "react-redux";
import {MainHeader} from "views/components";

class Main extends Component {

    render() {
        return (
            <div>
                <MainHeader onChangeTab={this.props.onChangeTab} />
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (_state, _ownProps) => {
  return {
    tab_index : _state.tab_index
  };
};

const mapDispatchToProps = (_dispatch, _ownProps) => {
    return {
        onChangeTab : (_event) => {
            console.log(_event);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);