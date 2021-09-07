import React from 'react';
import { useSelector } from 'react-redux';
import GmailMessage from './GmailMessage';
const PopUpGmail = () => {

    const gmailMessages = useSelector(state => state.gmailMessageInformation)
    return (
        <div className="popUpWrapper">
            <h3 style={{ marginLeft: "10px" }}>You recived {gmailMessages.length} emails!</h3>
            <div className="popUpMessages">
                {gmailMessages.map((message, id) => {
                    return <GmailMessage messageInfo={message} key={id} id={id} />
                })}
            </div>
        </div>
    );
};

export default PopUpGmail;