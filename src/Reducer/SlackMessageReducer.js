const getSlackMessage = (state = [], action) => {
    switch (action.type) {
        case "GET_SLACK_MESSAGES":
            return state = [...state, action.payload];
        default:
            return state;
    }
}

export default getSlackMessage;