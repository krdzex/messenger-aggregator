const getSlackChannelInfo = (state = { channelName: "", lastRead: "" }, action) => {
    switch (action.type) {
        case "GET_SLACK_CHANNEL_NAME":
            return state = { ...state, channelName: action.payload };
        case "GET_SLACK_CHANNEL_LAST_READ":
            return state = { ...state, lastRead: action.payload };
        default:
            return state;
    }
}

export default getSlackChannelInfo;