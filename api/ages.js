import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const AgesCollection = new Mongo.Collection('ages');

if (Meteor.isServer) {
  Meteor.publish('ages', function(){
    return AgesCollection.find({ deleted: {$ne: true} })
  });

  Meteor.methods({
    'age.insert'(data) {
      new SimpleSchema({
        data: {
          type: Object,
          label: "Age data"
        },
        'data.name': {
          type: String,
          label: "Age name"
        },
        'data.range': {
          type: Object,
          label: "Age range"
        },
        'data.range.label': {
          type: String,
          label: "Age range label"
        },
        'data.range.value': {
          type: [Number],
          label: "Age range values"
        }
      }).validate({ data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'age.insert',
        payload: {
          data,
        },
      }
      LogsCollection.insert(log)

      AgesCollection.insert(data)
    },
    'age.edit'(_id, data) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Age Id"
        },
        data: {
          type: Object,
          label: "Age data"
        },
        'data.name': {
          type: String,
          label: "Age name"
        },
        'data.range': {
          type: Object,
          label: "Age range"
        },
        'data.range.label': {
          type: String,
          label: "Age range label"
        },
        'data.range.value': {
          type: [Number],
          label: "Age range values"
        }
      }).validate({ _id, data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'age.edit',
        payload: {
          _id,
          data
        },
      }
      LogsCollection.insert(log)

      AgesCollection.update({_id}, {$set: data })
    },
    'age.delete'(_id) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Age Id"
        }
      }).validate({ _id })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'age.delete',
        payload: {
          _id
        },
      }
      LogsCollection.insert(log)

      AgesCollection.update({_id}, {$set: {deleted: true} })
    }
  });
}
