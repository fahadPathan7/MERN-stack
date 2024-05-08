import React, { Component } from "react";
import { FaFacebook } from "react-icons/fa";

class ClassComp extends Component {
    render() {
        return (
            <div className="card">
                <h3 className="cardTitle">{this.props.name}</h3>
                <FaFacebook className="icon" />
                <p className="cardDesc">{this.props.desc}</p>
            </div>
        );
    }
}

export default ClassComp;