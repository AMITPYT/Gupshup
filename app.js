
const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./modules/sendSinglemessage/routes/sendMessage.routes');
const bulkMessageRoutes = require('./modules/sendBulkMessage/routes/sendBulkMessage.routes')
// const messageRoutes = require('./routes/messageRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/messages', messageRoutes);
app.use('/bulkmessages', bulkMessageRoutes);

// Rest of your configurations and app settings

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
