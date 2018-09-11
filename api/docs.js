import { FilesCollection } from 'meteor/ostrio:files'
import { LogsCollection } from '/api/logs'

export const DocsCollection = new FilesCollection({
  storagePath: '/docs',
  downloadRoute: '/docs',
  permissions: 0774,
	parentDirPermissions: 0774,
  collectionName: 'DocsCollection',
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
    return DocsCollection.find().cursor
  })

  Meteor.methods({
    'get.link'(file) {
      let fileRef = DocsCollection.collection.findOne({_id: file._id});
      if(fileRef){
        return DocsCollection.link(fileRef);
      }
    },
    'get.thumbnail'(file) {
      let fileRef = DocsCollection.collection.findOne({_id: file._id});
      if(fileRef){
        return DocsCollection.link(fileRef, 'thumbnail');
      }
    }
  })
}
