import React from "react";

class Counter extends React.Component {

    state = {
        count: 0
    };

    render() {
        return (
        <div>
            <h3>Score: {this.props.count} | Top Score: {this.props.count} </h3>
        </div>
    )
    }
}

export default Counter; 