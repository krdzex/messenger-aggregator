import axios from 'axios';

const header = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

const userId = "106874201533985195477";
const url = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`
const accessToken = "a29.a0ARrdaM8wSh5Z6m2dobIK4sMoDvQ3drKihQxzhv30_B_ILmqM9XIsPa2djWMktkAFtJu8OtTVk37rwyfTzTVBnke-97msNZDIfhWUFlDK-SHtSL--ZeTgGdgzaFE0bmrrixSLHsMf3ygnrQj1hqqMxgTN5gS2aw"


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