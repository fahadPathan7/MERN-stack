import React from "react";

const StateLifting = (props) => {
    props.onChildData("Hello from StateLifting");
    return (
        <div>
            <h1>State Lifting</h1>
        </div>
    );
}

export default StateLifting;