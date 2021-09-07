const OpenPopUpReducer = (state = { gmail: false, slack: false }, action) => {
    switch (action.type) {
        case "OPEN_GMAIL":
            return state = { gmail: true, slack: false };
        case "OPEN_SLACK":
            return state = { gmail: false, slack: true };
        default:
            return state;
    }
}

export default OpenPopUpReducer;