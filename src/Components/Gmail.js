import React, { useEffect, useState } from 'react';
import gmailLogo from "../Photos/gmail.png"
import { useDispatch, useSelector } from 'react-redux';
import { getMessageInformation, getUnreadMessageID } from '../Actions';
import { getUnreadMessageIds, getUnreadMessageInformation, readUnreadMessagges } from '../ApiService';
const Gmail = () => {
    const dispatch = useDispatch()
    const [unreadMsg, setUnreadMsg] = useState(0);
    const unreadMessageId = useSelector(state => state.gmailMessangerReducer)

    useEffect(() => {
        let ids;
        getUnreadMessageIds(data => {
            ids = data.messages;
            dispatch(getUnreadMessageID(data.messages));
            setUnreadMsg(ids.length)
        }).then(() => {
            for (let i = 0; i < ids.length; i++) {
                getUnreadMessageInformation(ids[i].id, data => {
                    dispatch(getMessageInformation(data))
                })
            }
        }
        )
    }, [dispatch])


    const onMailClick = async () => {
        setUnreadMsg(0);
        for (let i = 0; i < unreadMessageId.length; i++) {
            await readUnreadMessagges(unreadMessageId[i].id)
        }
    }


    return (
        <div className="imageWrapper">
            <img src={gmailLogo} alt="gmail logo" onClick={onMailClick} style={{ width: "300px", height: "225px", padding: "20px", cursor: "pointer" }}></img>
            <div className={unreadMsg !== 0 ? "unreadMsgNumber" : "unreadMsgNumber green"}>{unreadMsg === 100 ? "99+" : unreadMsg}</div>
        </div>
    );
};

export default Gmail;