import React from 'react';
import Gmail from './Gmail';
import Slack from './Slack';

const MainComponent = () => {
    return (
        <div className="mainComponent">
            <Gmail />
            <Slack />
        </div>
    );
};

export default MainComponent;