
const gupshupAPI = require('../services/sendMessageAPI.services');

exports.sendMessage = async (req, res) => {
  try {
    const { Userid, Password, sendTo, message } = req.body;
    // Call the function from the gupshupAPI  to send the message
    const response = await gupshupAPI.sendMessage(Userid, Password, sendTo, message);
    console.log(response);
    // Handle response as needed
    res.status(200).json({ message: 'Message sent successfully', response });
  } catch (error) {
    res.status(500).json({ error: 'Error sending message', message: error.message });
  }
};
