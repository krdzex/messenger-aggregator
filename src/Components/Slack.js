import React, { useEffect, useState } from 'react';
import { getChannelInfo, getSlackMessage, readMessages } from '../ApiServices/slackApiFront';
import slackLogo from "../Photos/slack.png"
import { getChannelName, getLastRead, getSlackMessages, openSlack } from '../Actions';
import { useDispatch, useSelector } from 'react-redux';
const Slack = () => {
    const dispatch = useDispatch()
    const [unreadMsgNo, setUnreadMsgNo] = useState(0);
    const unreadMessages = useSelector(state => state.slackMessage)
    useEffect(() => {
        let lastRead;
        let unreadMsg = 0;
        getChannelInfo(data => {
            dispatch(getLastRead(data.channel.last_read))
            lastRead = data.channel.last_read;
            dispatch(getChannelName(data.channel.name))
        }).then(() => {
            getSlackMessage(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].ts > lastRead) {
                        unreadMsg++;
                        dispatch(getSlackMessages(data[i]))
                    }
                }
                setUnreadMsgNo(unreadMsg)
            })
        })
    }, [dispatch])

    const onclickImage = () => {
        setUnreadMsgNo(0)
        dispatch(openSlack())
        if (unreadMsgNo > 0) {
            readMessages(unreadMessages[0].ts, data => {
                console.log(data)
            })
        }
    }


    return (
        <div className="slackWrapper">
            <img src={slackLogo} alt="slack logo" onClick={onclickImage} style={{ width: "300px", height: "225px", padding: "20px" }}></img>
            <div className={unreadMsgNo !== 0 ? "unreadMsgNumber" : "unreadMsgNumber green"}>{unreadMsgNo}</div>
        </div>
    );
};

export default Slack;