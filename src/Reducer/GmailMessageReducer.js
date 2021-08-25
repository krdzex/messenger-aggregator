const gmailMessangerReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_UNREAD_MESSAGE_ID":
            return state = action.payload;
        default:
            return state;
    }
}

export default gmailMessangerReducer;