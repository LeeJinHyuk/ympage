import React, {Component} from "react";
import {connect} from "react-redux";
// import {changeTab, CHANGE_TAB} from "modules/state";
import {MainHeader} from "views/components";

class Main extends Component {

    componentDidMount() {
        console.log("componentDidMount");
        console.log(this.props.listData);
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
  console.log(_ownProps);
  return {
    listData : "list"
  };
};

// const mapDispatchToProps = (_dispatch, _ownProps) => {
//   console.log("mapDispatchToProps");
//     return {
//         onChangeTab : (_event, _index) => {
//           _dispatch(changeTab(_index))
//         }
//     };
// };

export default connect(mapStateToProps)(Main);