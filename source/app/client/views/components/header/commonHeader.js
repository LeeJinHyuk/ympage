import React, {Component} from "react";
import {Link} from "react-router";

class CommonHeader extends Component {

    render() {

        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"
                                className="">
                                뒤로가기
                            </Link>
                        </li>
                        <li>
                            <Link to="/serve"
                                className="">
                                청소년 자원봉사 프로그램
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default CommonHeader;