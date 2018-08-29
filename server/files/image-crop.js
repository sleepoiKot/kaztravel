import { Images } from '/api/docs.js';
import createThumbnails from '/server/files/image-processing.js';

Images.on('afterUpload', function(fileRef) {
  // Run `createThumbnails` only over PNG, JPG and JPEG files
  if (/png|jpe?g/i.test(fileRef.extension || '')) {
    createThumbnails(this, fileRef, (error, fileRef) => {
      if (error) {
        console.error(error);
      }
    });
  }
});
