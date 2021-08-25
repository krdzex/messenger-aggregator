import { combineReducers } from "redux";
import gmailMessangerReducer from "./GmailMessageReducer";
import GmailMessagesInformationReducer from "./GmailMessagesInformationReducer";
const allReducers = combineReducers({
    gmailMessangerReducer,
    gmailMessageInformation: GmailMessagesInformationReducer
})

export default allReducers