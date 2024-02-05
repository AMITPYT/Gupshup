
const axios = require('axios');
const querystring = require('querystring');

const baseUrl = 'http://enterprise.smsgupshup.com/GatewayAPI/rest';

function sendMessage(Userid, Password, sendTo, message) {
  const messageData = {
    Userid,
    Password,
    send_to: sendTo,
    Msg: message,
    method: 'sendMessage',
    MsgType: 'text',
    Format: 'text/json/xml',
    Auth_scheme: 'plain',
    v: '1.1',
  };

  // const dataToSend = querystring.stringify(messageData);

  return axios.post(baseUrl, messageData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  
  .then(response => response.data)
  
  .catch(error => {
    throw new Error(error.response.data);
  });
}

module.exports = { sendMessage };
