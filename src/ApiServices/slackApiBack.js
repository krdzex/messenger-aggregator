const authorization = "Bearer xoxp-2431661149668-2425457541666-2418950199814-a70807d5158682038090a6f162bab117";
const url = "https://slack.com/api/"
import axios from "axios";

const getMessages = (req, res) => {
    axios({
        method: 'get',
        url: `${url}conversations.history`,
        headers: {
            authorization: authorization
        },
        params: {
            channel: "C02CPPT0YHJ",
            pretty: "1"
        }
    }).then(response => res.json(response.data)).catch(reason => console.error(reason))
}

const getUserInfo = (req, res) => {
    axios({
        method: 'GET',
        url: `${url}users.info`,
        headers: {
            authorization: authorization
        },
        params: {
            user: req.params.id,
            pretty: "1"
        }
    }).then(response => res.json(response.data)).catch(reason => console.error(reason))
}

const getConversationInfo = (req, res) => {
    axios({
        method: 'GET',
        url: `${url}conversations.info`,
        headers: {
            authorization: authorization
        },
        params: {
            channel: "C02CPPT0YHJ",
            pretty: "1"
        }
    }).then(response => res.json(response.data)).catch(reason => console.error(reason))
}

const readUnreadMessages = (req, res) => {
    axios({
        method: 'POST',
        url: `${url}conversations.mark`,
        headers: {
            authorization: authorization
        },
        params: {
            ts: req.params.id,
            channel: "C02CPPT0YHJ",
            pretty: "1"
        }
    }).then(response => res.json(response.data)).catch(reason => console.error(reason))
}

export default { getMessages, getUserInfo, getConversationInfo, readUnreadMessages }