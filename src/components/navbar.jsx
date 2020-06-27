import React from "react";

//stateless Functional Component
const Navbar = ({ totalCounters }) => {
    console.log("Navbar-Rendered");
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-secondary">{totalCounters}</span>
            </a>
        </nav>
    );
};

export default Navbar;
