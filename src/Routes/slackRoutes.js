import express from "express"
import slackApi from "../ApiServices/slackApiBack.js";

const router = express.Router();

router.route(`/slackMessage`)
    .get(slackApi.getMessages)

router.route(`/slackProfile/:id`)
    .get(slackApi.getUserInfo)

router.route(`/channelInfo`)
    .get(slackApi.getConversationInfo)

router.route(`/readMessage/:id`)
    .get(slackApi.readUnreadMessages)

export default router;