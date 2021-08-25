import axios from 'axios';

const header = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

const userId = "106874201533985195477";
const url = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`
const accessToken = "ya29.a0ARrdaM_G-lRr6aJmWalvvPTZIynN44zb1TfjOFBg1UWonjO-R96c-K6YYDcLnI5CvMrNDG0P1qnwLw5dnmMnXKNGoUO3CNYSdzaHe_XDzoKWqZXsrW2SeKtyWJYoKIJD_mGMMnXiE51qcPrdYTLZa9b7DS6ZLg"


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

    await axios.post(`${url}/${id}/modify`, {
        params: {
            "access_token": accessToken,
            "removeLabelIds": [
                "UNREAD"
            ]
        },
    }, { header }).then(response => console.log(response.data))
        .catch(reason => console.error(reason))
}



export { getUnreadMessageIds, getUnreadMessageInformation, readUnreadMessagges }