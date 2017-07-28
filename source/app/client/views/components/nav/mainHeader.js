import React, {Component} from "react";
import {Link} from "react-router";

class MainHeader extends Component {

    render() {
        const {router} = this.context;

        return (
            <div id="main-header">
                <ul>
                    <li><Link to="/" className={"nav-item" + router.isActive("/", true) ? "active" : ""} onClick={this.props.onChangeTab}>청소년 인증 프로그램</Link></li>
                    <li><Link to="/serve" className={"nav-item" + router.isActive("/", true) ? "active" : ""}>청소년 자원봉사 프로그램</Link></li>
                    <li><Link to="/international" className={"nav-item" + router.isActive("/", true) ? "active" : ""}>청소년 국제 프로그램</Link></li>
                </ul>
            </div>
        );
    }
}

export default MainHeader;