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