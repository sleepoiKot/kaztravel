import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const NominationsCollection = new Mongo.Collection('nominations');

if (Meteor.isServer) {

  Meteor.publish('nominations', function(){
    return NominationsCollection.find({deleted: {$ne: true}}, {sort: { createdAt: 1}})
  });

  Meteor.publish('nomination', function(suffix){
    return NominationsCollection.find({deleted: {$ne: true}, suffix})
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
          type: Object,
          label: "Nomination name",
          min: 3,
          max: 3
        },
        'data.name.ru': {
          type: String,
          label: "Nomination name in Russian"
        },
        'data.name.kz': {
          type: String,
          label: "Nomination name in Kazakh"
        },
        'data.name.en': {
          type: String,
          label: "Nomination name in English"
        },
        'data.shortDescription': {
          type: Object,
          label: "Nomination short description",
          optional: true,
          min: 3,
          max: 3
        },
        'data.shortDescription.ru': {
          type: String,
          label: "Nomination short description in Russian",
          optional: true
        },
        'data.shortDescription.kz': {
          type: String,
          label: "Nomination short description in Kazakh",
          optional: true
        },
        'data.shortDescription.en': {
          type: String,
          label: "Nomination short description in English",
          optional: true
        },
        'data.src': {
          type: String,
          label: "Nomination image source"
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
          type: Object,
          label: "Nomination name",
          min: 3,
          max: 3
        },
        'data.name.ru': {
          type: String,
          label: "Nomination name in Russian"
        },
        'data.name.kz': {
          type: String,
          label: "Nomination name in Kazakh"
        },
        'data.name.en': {
          type: String,
          label: "Nomination name in English"
        },
        'data.shortDescription': {
          type: Object,
          label: "Nomination short description",
          optional: true,
          min: 3,
          max: 3
        },
        'data.shortDescription.ru': {
          type: String,
          label: "Nomination short description in Russian",
          optional: true
        },
        'data.shortDescription.kz': {
          type: String,
          label: "Nomination short description in Kazakh",
          optional: true
        },
        'data.shortDescription.en': {
          type: String,
          label: "Nomination short description in English",
          optional: true
        },
        'data.src': {
          type: String,
          label: "Nomination image source"
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
