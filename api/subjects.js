import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const SubjectsCollection = new Mongo.Collection('subjects');

if (Meteor.isServer) {
  Meteor.publish('subjects', function(){
    return SubjectsCollection.find({ deleted: {$ne: true} })
  });

  Meteor.methods({
    'subject.insert'(data) {
      new SimpleSchema({
        data: {
          type: Object,
          label: "Subject"
        },
        'data.name': {
          type: String,
          label: "Subject name"
        }
      }).validate({ data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'subject.insert',
        payload: {
          data,
        },
      }
      LogsCollection.insert(log)

      SubjectsCollection.insert(data)
    },
    'subject.edit'(_id, data) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Subject Id"
        },
        data: {
          type: Object,
          label: "Subject"
        },
        'data.name': {
          type: String,
          label: "Subject name"
        }
      }).validate({ _id, data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'subject.edit',
        payload: {
          _id,
          data
        },
      }
      LogsCollection.insert(log)

      SubjectsCollection.update({_id}, {$set: data })
    },
    'subject.delete'(_id) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Subject Id"
        }
      }).validate({ _id })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'subject.delete',
        payload: {
          _id
        },
      }
      LogsCollection.insert(log)

      SubjectsCollection.update({_id}, {$set: {deleted: true} })
    }
  });
}
