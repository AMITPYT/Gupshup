// const gupshupAPI = require('../services/sendBulkMessageAPI.services');
// const fs = require('fs');

// function uploadFile(req, res) {
//   const file = req.file.path;
//   console.log(file);

// //   const fileContent = fs.readFileSync(file, 'utf8');
// // console.log("fileContent", fileContent);
//   gupshupAPI.sendMessageWithFile(file)
//     .then(response => {
//     //     fs.readFileSync(file, 'utf8');
//       fs.unlinkSync(file);
//       // fs.readFileSync(file);
//     //   res.status(200).send('File uploaded successfully.');
//       res.status(200).send({ message: 'File uploaded successfully.', response });
//     })
//     .catch(error => {
//       fs.unlinkSync(file);
//       // fs.readFileSync(file);
//     //   res.status(500).send('Error uploading file.');
//       res.status(500).send({ error: 'Error when uploading file.', message: error.message });
//     });
// }

// module.exports = { uploadFile };





const gupshupAPI = require('../services/sendBulkMessageAPI.services');
const fs = require('fs');
const path = require('path');

function uploadFile(req, res) {
  const file = req.file.path;
  const originalName = req.file.originalname; // Get the original filename

  const fileExtension = path.extname(originalName); // Extract the original file extension
  const newName = `${file}${fileExtension}`; // Construct the new filename with the original extension

  fs.renameSync(file, newName); // Rename the file with the original extension
  console.log("newName",newName);

  gupshupAPI.sendMessageWithFile(newName)
    .then(response => {
      // fs.unlinkSync(newName); // Delete the file after processing
      res.status(200).send({ message: 'File uploaded successfully.', response });
    })
    .catch(error => {
      fs.unlinkSync(newName); // Delete the file in case of an error
      res.status(500).send({ error: 'Error when uploading file.', message: error.message });
    });
}

module.exports = { uploadFile };


// const gupshupAPI = require('../services/sendBulkMessageAPI.services');
// const fs = require('fs');

// function uploadFile(req, res) {
//   const file = req.file;
//   const originalFileName = file.originalname; // Retrieve the original filename
//   console.log(originalFileName);

//   gupshupAPI.sendMessageWithFile(file.path)
//     .then(response => {
//       fs.unlinkSync(file.path);
//       res.status(200).send({ message: 'File uploaded successfully.', response });
//     })
//     .catch(error => {
//       fs.unlinkSync(file.path);
//       res.status(500).send({ error: 'Error when uploading file.', message: error.message });
//     });
// }

// module.exports = { uploadFile };


