import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const NominationsCollection = new Mongo.Collection('nominations');

if (Meteor.isServer) {

  Meteor.publish('nominations', function(){
    return NominationsCollection.find({deleted: {$ne: true}})
  });

  Meteor.methods({
    'nomination.insert'(data) {
      new SimpleSchema({
        data: {
          type: Object,
          label: "Nomination",
          max: 2,
          min: 2
        },
        'data.name': {
          type: String,
          label: "Nomination name"
        },
        'data.shortDescription': {
          type: String,
          label: "Nomination short description"
        },
        'data.suffix': {
          type: String,
          label: "Nomination suffix"
        }
      }).validate({ data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'nomination.insert',
        payload: {
          data
        },
      }
      LogsCollection.insert(log)

      const finaldata = {
        ...data,
        createdAt: new Date()
      }

      NominationsCollection.insert(finaldata)
    },
    'nomination.edit'(_id, data) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Unique nomination Id"
        },
        data: {
          type: Object,
          label: "Nomination",
          max: 2,
          min: 2
        },
        'data.name': {
          type: String,
          label: "Nomination name"
        },
        'data.shortDescription': {
          type: String,
          label: "Nomination short description"
        }
      }).validate({ _id, data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'nomination.edit',
        payload: {
          _id,
          data
        },
      }
      LogsCollection.insert(log)

      const finaldata = {
        ...data,
        updatedAt: new Date()
      }

      NominationsCollection.update({_id},{$set: finaldata})
    },
    'nomination.delete'(_id) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Nomination Id"
        }
      }).validate({ _id })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'nomination.delete',
        payload: {
          _id
        },
      }
      LogsCollection.insert(log)

      NominationsCollection.update({_id}, {$set: {deleted: true} })
    }
  });
}
