const OpenPopUpReducer = (state = { gmail: false, slack: false }, action) => {
    switch (action.type) {
        case "OPEN_GMAIL":
            return state = { gmail: true, slack: false };
        case "OPEN_SLACK":
            return state = { gmail: false, slack: true };
        case "CLOSE_POPUP":
            return state = { gmail: false, slack: false };
        default:
            return state;
    }
}

export default OpenPopUpReducer;