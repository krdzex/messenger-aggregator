import React, { useEffect, useState } from 'react';
import { getSlackProfileInfo } from '../ApiServices/slackApiFront';

const SlackMessage = ({ messageInfo }) => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        getSlackProfileInfo(messageInfo.user, data => {
            setUserName(data)
        })
    }, [messageInfo.user])

    return (
        <div className="singleMessage slack">
            <p><b>{userName} - </b>{messageInfo.text}</p>
        </div>
    );
};

export default SlackMessage;