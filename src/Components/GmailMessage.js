import React, { useEffect, useState } from 'react';

const GmailMessage = ({ messageInfo }) => {

    const [subject, setSubject] = useState("")
    const [from, setFrom] = useState("")

    useEffect(() => {
        for (let i = 0; i < messageInfo.payload.headers.length; i++) {
            if (messageInfo.payload.headers[i]["name"] === "Subject") {
                setSubject(messageInfo.payload.headers[i]["value"])
            }
            if (messageInfo.payload.headers[i]["name"] === "From") {
                setFrom(messageInfo.payload.headers[i]["value"])
            }
        }
    }, [messageInfo.payload.headers])
    return (
        <div className="singleMessage">
            <div className="from"><b>From:</b> <div dangerouslySetInnerHTML={{ __html: from }}></div></div>
            <div className="subject"><b>Subject:</b> <div dangerouslySetInnerHTML={{ __html: subject }}></div></div>
            <div className="text" dangerouslySetInnerHTML={{ __html: messageInfo.snippet }}></div>
        </div>
    );
};

export default GmailMessage;