import React from 'react';
import logo from "../Photos/logo.png"
const Header = () => {
    return (
        <div className="header">
            <img src={logo} style={{ height: "100px" }} alt="logo"></img>
            <h1>Messenger Aggregator App</h1>
        </div>
    );
};

export default Header;