import React from 'react';
import { useSelector } from 'react-redux';
import SlackMessage from './SlackMessage';
const PopUpSlack = () => {

    const slackMessages = useSelector(state => state.slackMessage)
    const channelName = useSelector(state => state.channelInfo.channelName)
    
    return (
        <div className="popUpWrapper">
            <h3 style={{ marginLeft: "10px" }}>You recived {slackMessages.length} messages from #{channelName} Slack Channel</h3>
            <div className="popUpMessages">
                {slackMessages.map((message, id) => {
                    return <SlackMessage messageInfo={message} key={id} id={id} />
                })}
            </div>
        </div>
    );
};

export default PopUpSlack;