import { FilesCollection } from 'meteor/ostrio:files'
import { LogsCollection } from '/api/logs'

export const Images = new FilesCollection({
  storagePath: '/docs',
  downloadRoute: '/docs',
  permissions: 0774,
	parentDirPermissions: 0774,
  collectionName: 'Images',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload(file) {
    return true;
  },
  onBeforeRemove(arg) {
    if (this.userId) {
      const user = this.user();
      if (user.username === 'superadmin') {
        // Allow removal only if
        // current user is signed-in
        // and has role is `admin`
        return true;
      }
    }

    return false;
  }
})

if (Meteor.isClient) {
  // Meteor.subscribe('docs.all');
}

if(Meteor.isServer) {
  Meteor.publish('docs.all', function () {
    return Images.find().cursor
  })

  Meteor.methods({
    'get.link'(file) {
      let fileRef = Images.collection.findOne({_id: file._id});
      if(fileRef){
        return Images.link(fileRef);
      }
    },
    'get.thumbnail'(file) {
      let fileRef = Images.collection.findOne({_id: file._id});
      if(fileRef){
        return Images.link(fileRef, 'thumbnail');
      }
    }
  })
}
