import React, {Component} from "react";
import {connect} from "react-redux";
import {MainHeader} from "views/components";

class Main extends Component {

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
  console.log(_state);
  console.log(_ownProps);
  return {
    tab_index : _state.tab_index
  };
};

export default connect(mapStateToProps)(Main);