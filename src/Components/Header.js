import React from 'react';
import { useDispatch } from 'react-redux';
import { closePopUp } from '../Actions';
import logo from "../Photos/logo.png"
const Header = () => {
    const dispatch = useDispatch()
    const removePopUp = () => {
        dispatch(closePopUp())
    }

    return (
        <div className="header">
            <img src={logo} onClick={removePopUp} style={{ height: "100px", cursor: 'pointer' }} alt="logo"></img>
            <h1>Messenger Aggregator App</h1>
        </div>
    );
};

export default Header;