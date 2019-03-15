import React from 'react'

function Navbar() {
    return (
        <nav className="navbar bg-primary p-3">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-link ">
                    Clicky Game
                </li>
                <li className="nav-link ">
                    Click an image to begin
                </li>
                <li className="nav-link ">
                    Score: 0 | Top Score: 0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar