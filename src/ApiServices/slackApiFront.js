const basic_url = "http://localhost:5000"

const getSlackMessage = async (callBack) => {
    await fetch(`${basic_url}/slackMessage`)
        .then(res => res.json()).then(response => callBack(response.messages))
        .catch(reason => console.log(reason))
}

const getChannelInfo = async (callBack) => {
    await fetch(`${basic_url}/channelInfo`)
        .then(res => res.json()).then(response => callBack(response))
        .catch(reason => console.log(reason))
}

const readMessages = async (id, callBack) => {
    await fetch(`${basic_url}/readMessage/${id}`)
        .then(res => res.json()).then(response => callBack(response))
        .catch(reason => console.log(reason))
}

const getSlackProfileInfo = async (id, callBack) => {
    fetch(`${basic_url}/slackProfile/${id}`)
        .then(res => res.json()).then(response => callBack(response.user.profile.real_name))
        .catch(reason => console.log(reason))
}

export { getSlackMessage, getChannelInfo, readMessages, getSlackProfileInfo }