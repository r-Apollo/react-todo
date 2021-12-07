import { Component } from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import "./../styles/content.css"

class Content extends Component {
    render() {
        return(
            <div className="content">
                <Navbar />
                <Main />
            </div>
        )
    }
}

export default Content
