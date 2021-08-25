import React from 'react';
import { useSelector } from 'react-redux';
import GmailMessage from './GmailMessage';
const PopUp = () => {

    const gmailMessage = useSelector(state => state.gmailMessageInformation)
    return (
        <div className="popUpWrapper">
            {gmailMessage.map((message, id) => {
                return <GmailMessage messageInfo={message} key={id} id={id} />
            })}
        </div>
    );
};

export default PopUp;