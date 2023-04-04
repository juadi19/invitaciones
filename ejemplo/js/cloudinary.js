const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dfiaqxhba',
  api_key: '166344275989438',
  api_secret: 'rq0RJ-rZri683W5TnpBwLImTmSE'
});

cloudinary.api.create_upload_preset({
  name: 'juan-upload-preset',
  unsigned: true,
  auto_format: 'auto',
  quality: 'auto',
  width: 'auto'
}, function(error, result) {
  console.log(result);
});

const directoryPath = path.join(__dirname, '../img'); // Replace 'images' with the name of your directory

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.log('Error getting directory listing:', err);
  } else {
    files.forEach(function (file) {
      const filePath = path.join(directoryPath, file);
      cloudinary.uploader.upload(filePath, { folder: 'prueba', upload_preset: 'juan-upload-preset' }, function(error, result) {
        console.log(result);
      });
    });
  }
});