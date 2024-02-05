const axios = require('axios');
const fs = require('fs');
const path = require('path');


const baseUrl = 'https://enterprise.smsgupshup.com/GatewayAPI/rest';

async function sendMessageWithFile(file) {
    try {
  const userId = '2000233093';
  const password = 'Credit@88';

  // Determine the file extension
  const fileExtension = path.extname(file).toLowerCase();
  console.log("fileExtension:",fileExtension);
  // console.log("file", file); 

//   const parts = file.split('.');
// const extension = parts[parts.length - 1]; // Get the last part after splitting by '.'
// console.log("extension", extension);

  // Allow only specified file extensions
  const allowedExtensions = ['.xls', '.csv', '.zip'];

  if (!allowedExtensions.includes(fileExtension)) {
    throw new Error('Invalid file type. Only xls, csv, or zip files are allowed.');
  }
  // fileExtension.substring(1), // Remove the dot from the extension

  const formData = {
    userid: userId,
    password: password,
    fileType: fileExtension, 
    method: `${fileExtension.substring(1)}Upload`,
    msg_type: 'text',
    // format: 'text/json/xml',
    auth_scheme: 'plain',
    v: '1.1',
    file: fs.createReadStream(file),
  };
  console.log("formData",formData.method);
  const response = await axios.post(baseUrl, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
//   console.log(response.data);
  return response.data;
 
} catch (error) {
    console.error(error);
  throw new Error(error.response ? error.response.data : 'Error uploading file.');
}
}

module.exports = { sendMessageWithFile };
