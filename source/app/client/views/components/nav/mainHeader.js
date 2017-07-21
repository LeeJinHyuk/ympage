import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class MainHeader extends Component {

    render() {

        return (
            <div id="main-header">
                <ul>
                    <li><NavLink to="/" className="nav-item" activeClassName="active">청소년 인증 프로그램</NavLink></li>
                    <li><NavLink to="/serve" className="nav-item" activeClassName="active">청소년 자원봉사 프로그램</NavLink></li>
                    <li><NavLink to="/international" className="nav-item" activeClassName="active">청소년 국제 프로그램</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default MainHeader;