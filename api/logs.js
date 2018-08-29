import { Mongo } from 'meteor/mongo';

export const LogsCollection = new Mongo.Collection('logs');

if (Meteor.isServer) {
  Meteor.publish('logs', function(){
    return LogsCollection.find({
      deleted: { $ne: true }
    }, {
      sort: { createdAt: -1 }
    })
  });

  Meteor.methods({
    'log.insert'(data) {
      LogsCollection.insert(data);
    },
    'log.delete'(_id) {
      LogsCollection.update({ _id }, { $set: {deleted: true} });
    },
    'log.update'(_id, data) {
      LogsCollection.update({ _id }, { $set: data });
    }
  });
}
