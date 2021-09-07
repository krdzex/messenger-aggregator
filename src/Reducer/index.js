import { combineReducers } from "redux";
import gmailMessangerReducer from "./GmailMessageReducer";
import GmailMessagesInformationReducer from "./GmailMessagesInformationReducer";
import getSlackMessage from "./SlackMessageReducer";
import getSlackChannelInfo from "./SlackChannelInfo"
import OpenPopUpReducer from "./OpenPopUpReducer";

const allReducers = combineReducers({
    gmailMessangerReducer,
    gmailMessageInformation: GmailMessagesInformationReducer,
    slackMessage: getSlackMessage,
    channelInfo: getSlackChannelInfo,
    openPopUp: OpenPopUpReducer
})

export default allReducers