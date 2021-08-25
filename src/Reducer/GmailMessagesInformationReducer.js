const GmailMessagesInformationReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_MESSAGE_INFORMATION":
            return [...state, action.payload];
        default:
            return state;
    }
}

export default GmailMessagesInformationReducer;