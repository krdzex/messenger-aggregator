export const getUnreadMessageID = (ids) => {
    return {
        type: "GET_UNREAD_MESSAGE_ID",
        payload: ids
    }
}

export const getMessageInformation = (messagesInformation) => {
    return {
        type: "GET_MESSAGE_INFORMATION",
        payload: messagesInformation
    }
}

export const getSlackMessages = (slackMessages) => {
    return {
        type: "GET_SLACK_MESSAGES",
        payload: slackMessages
    }
}

export const getLastRead = (lastRead) => {
    return {
        type: "GET_SLACK_CHANNEL_LAST_READ",
        payload: lastRead
    }
}
export const getChannelName = (channelName) => {
    return {
        type: "GET_SLACK_CHANNEL_NAME",
        payload: channelName
    }
}
export const openGmail = () => {
    return {
        type: "OPEN_GMAIL",
    }
}
export const openSlack = () => {
    return {
        type: "OPEN_SLACK"
    }
}