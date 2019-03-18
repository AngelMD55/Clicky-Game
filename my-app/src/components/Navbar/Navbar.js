import React from 'react';
import Counter from "../Counter/Counter";

function Navbar(props) {
    return (
        <nav className="navbar p-3" style={{ position: "fixed", width: "100%", zIndex: "99", backgroundColor: "goldenrod" }}>
            <div className="col-4">
                <h3>Clicky Game!</h3>
            </div>
            <div className="col-4">
                <h3>Click an image to begin!</h3>
            </div>
            <div className="col-4">
                <Counter count={props.count}/>
            </div>

        </nav>
    )
}

export default Navbar