import axios from 'axios';

const header = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

const userId = "106874201533985195477";
const url = `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`
const accessToken = "ya29.a0ARrdaM9ev5qgXUKSzXAocTwuYK40JB2_l_OfuHknaQVc1w2nMoxGkrepxUS8tCx79fKwX11YADzIr26IB2-r_E4EdFGd6jshQLIjV8eZhr4xXHNWLB_DXCd0-XOnz7XUs__ego3a64-Hx_qusOYy_hZ2ogVWvA"


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