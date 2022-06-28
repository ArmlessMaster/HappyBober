import cloudinary from 'cloudinary';
const config = require('config');
// @ts-ignore
cloudinary.config({
    cloud_name: config.get('cloudinary_name'),
  api_key: config.get('cloudinary_api_key'),
  api_secret: config.get('cloudinary_api_secret'),
});

export default cloudinary;