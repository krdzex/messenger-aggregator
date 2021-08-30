import axios from 'axios';
import React from 'react';
import slackLogo from "../Photos/slack.png"
import SlackApi from "../slackmsg"

const Slack = () => {

    const onclickImage = async () => {
        /*await axios({
            method: 'get',
            url: "https://slack.com/api/conversations.history?channel=C02CPPT0YHJ&pretty=1",
            headers: {
                authorization: "Bearer xoxp-2431661149668-2425457541666-2418950199814-a70807d5158682038090a6f162bab117"
            }
        }).then(response => console.log(response)).catch(reason => console.error(reason))*/
        const res = await SlackApi.get("/conversations.history", {
            params: {
                channel: "C02CPPT0YHJ",
                pretty: 1,
                limit: 1,
            }
        }).then(res => console.log(res)).catch(reason => console.log(reason))
    }

    return (
        <div className="slackWrapper">
            <img src={slackLogo} alt="slack logo" onClick={onclickImage} style={{ width: "300px", height: "225px", padding: "20px" }}></img>
            <div className="unreadMsgNumber">5</div>
        </div>
    );
};

export default Slack;