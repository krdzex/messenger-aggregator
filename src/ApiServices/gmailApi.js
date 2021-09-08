import axios from 'axios';

const header = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

const userId = "106874201533985195477";
const url = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`

const accessToken = "ya29.a0ARrdaM9lH63m-hPCiggMIl4q9l5vX3Z4T6Z5Il22mZydogpjnx4BTIVOKzHeRnyFoI6unwyyYJn68ik4yZjjbEgBPskyFjDKdD8kxSG5DjP8dqfQXiCKaz4ocVdTYq4IYoUdhD5aYVCxRI3cmsfDhtySTdH9"


const getUnreadMessageIds = async (callBack) => {
    await axios.get(url, {
        params: {
            "q": "is:unread",
            "access_token": accessToken

        }
    }, { header }).then(response => callBack(response.data))
        .catch(reason => console.error(reason))
}

const getUnreadMessageInformation = async (id, callBack) => {
    await axios.get(`${url}/${id}`, {
        params: {
            "access_token": accessToken
        }
    }, { header }).then(response => callBack(response.data))
        .catch(reason => console.error(reason))
}

const readUnreadMessagges = async (id) => {

    await axios.post(`${url}/${id}/modify?access_token=${accessToken}`, {
        "removeLabelIds": [
            "UNREAD"
        ]
        ,
    }, { header }).then(response => console.log(response.data))
        .catch(reason => console.error(reason))
}



export { getUnreadMessageIds, getUnreadMessageInformation, readUnreadMessagges }