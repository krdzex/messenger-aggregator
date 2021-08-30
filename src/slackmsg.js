const axios = require('axios');
const slackToken = process.env.XOXB;
module.exports = axios.create({
    baseURL: 'https://slack.com/api/',
    headers: { authorization: `Bearer ${slackToken}` },
    params: {},
});

