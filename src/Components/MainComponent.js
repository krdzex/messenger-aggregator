import React from 'react';
import { useSelector } from 'react-redux';
import Gmail from './Gmail';
import PopUpGmail from './PopUpGmail';
import PopUpSlack from './PopUpSlack';
import Slack from './Slack';

const MainComponent = () => {
    const openPopUp = useSelector(state => state.openPopUp);
    return (
        <div className={openPopUp.gmail === false && openPopUp.slack === false ? "startScreen" : "mainComponent"}>
            <div className="images">
                <Gmail />
                <Slack />
            </div>
            {openPopUp.gmail && (<PopUpGmail />)}
            {openPopUp.slack && (<PopUpSlack />)}
        </div>
    );
};

export default MainComponent;