import React from 'react';
import slackLogo from "../Photos/slack.png"

const Slack = () => {
    return (
        <div className="slackWrapper">
            <img src={slackLogo} alt="slack logo" style={{ width: "300px", height: "225px", padding: "20px" }}></img>
            <div className="unreadMsgNumber">5</div>
        </div>
    );
};

export default Slack;