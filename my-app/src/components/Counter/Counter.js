import React from "react";

class Counter extends React.Component {

    render() {
        return (
        <div>
            <h3>Score: {this.props.count} | Top Score: {this.props.highScore} </h3>
        </div>
    );
    };
};

export default Counter; 