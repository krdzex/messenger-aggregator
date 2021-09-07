import axios from 'axios';

const header = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

const userId = "106874201533985195477";
const url = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`
const accessToken = "ya29.a0ARrdaM83g_zS9gt4q_3HMzMAIUWbepbS9DkqLelfgGb5opZzofW1pYacdi6EWMhKo6qSJCEcRqcIsi_kHMFwX7dAlAEmHUsEnBDWY6Vp13eVaRSGtnWHqulF8IP1LaDMkfC0AgqAYx0Taa9AtDrc_ZexBHEh6g"


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