import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const PublishingHousesCollection = new Mongo.Collection('publishingHouses');

if (Meteor.isServer) {
  Meteor.publish('publishingHouses', function(){
    return PublishingHousesCollection.find({ deleted: {$ne: true} })
  });

  Meteor.methods({
    'publishingHouse.insert'(data) {
      new SimpleSchema({
        data: {
          type: Object,
          label: "Publishing house"
        },
        'data.name': {
          type: String,
          label: "Publishing house name"
        }
      }).validate({ data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'publishingHouse.insert',
        payload: {
          data,
        },
      }
      LogsCollection.insert(log)

      PublishingHousesCollection.insert(data)
    },
    'publishingHouse.edit'(_id, data) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Publishing house Id"
        },
        data: {
          type: Object,
          label: "Publishing house"
        },
        'data.name': {
          type: String,
          label: "Publishing house name"
        }
      }).validate({ _id, data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'publishingHouse.edit',
        payload: {
          _id,
          data
        },
      }
      LogsCollection.insert(log)

      PublishingHousesCollection.update({_id}, {$set: data })
    },
    'publishingHouse.delete'(_id) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Publishing house Id"
        }
      }).validate({ _id })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'publishingHouse.delete',
        payload: {
          _id
        },
      }
      LogsCollection.insert(log)

      PublishingHousesCollection.update({_id}, {$set: {deleted: true} })
    }
  });
}
