import React from 'react';
import Gmail from './Gmail';
import PopUpGmail from './PopUpGmail';
import Slack from './Slack';

const MainComponent = () => {
    return (
        <div className="mainComponent">
            <div className="images">
                <Gmail />
                <Slack />
            </div>
            <PopUpGmail />
        </div>
    );
};

export default MainComponent;