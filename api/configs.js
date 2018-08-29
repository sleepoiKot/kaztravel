import { Mongo } from 'meteor/mongo'
import { LogsCollection } from '/api/logs'
export const ConfigurationsCollection = new Mongo.Collection('configs');

if (Meteor.isServer) {
  Meteor.publish('configs', function(){
      return ConfigurationsCollection.find({
        deleted: {$ne: true}
      })
  });

  Meteor.methods({
    'get.configs'() {
      return ConfigurationsCollection.findOne()
    },
    'config.operatingMode.edit'(_id, operatingMode) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Unique configuration ID"
        },
        operatingMode: {
          type: String,
          label: "Operating mode"
        }
      }).validate({_id, operatingMode})

      const log = {
        createdAt: Date.now(),
        service: 'config.operatingMode.edit',
        payload: {
          _id,
          operatingMode
        },
      }
      LogsCollection.insert(log)

      ConfigurationsCollection.update({_id}, {$set: {operatingMode: operatingMode}})
    },
    'config.phone.edit'(_id, phone) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Unique configuration ID"
        },
        phone: {
          type: String,
          label: "Phone"
        }
      }).validate({_id, phone})

      const log = {
        createdAt: Date.now(),
        service: 'config.phone.edit',
        payload: {
          _id,
          phone
        },
      }
      LogsCollection.insert(log)

      ConfigurationsCollection.update({_id}, {$set: {phone: phone}})
    },
    'config.posters.edit' (_id, posters) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Unique configuration ID"
        },
        'posters': {
          type: [Object],
          label: "Site posters",
          blackbox: true
        }
      }).validate({_id, posters})

      const log = {
        createdAt: Date.now(),
        service: 'config.posters.edit',
        payload: {
          _id,
          posters
        },
      }
      LogsCollection.insert(log)

      ConfigurationsCollection.update({_id}, {$set: {posters: posters}})
    },
    'config.actualAddress.edit'(_id, actualAddress) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Unique configuration ID"
        },
        'actualAddress': {
          type: String,
          label: "Actual address"
        }
      }).validate({_id, actualAddress})

      const log = {
        createdAt: Date.now(),
        service: 'config.actualAddress.edit',
        payload: {
          _id,
          actualAddress
        },
      }
      LogsCollection.insert(log)

      ConfigurationsCollection.update({_id}, {$set: {actualAddress: actualAddress}})
    },
    'config.legalAddress.edit'(_id, legalAddress) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Unique configuration ID"
        },
        'legalAddress': {
          type: String,
          label: "Legal address"
        }
      }).validate({_id, legalAddress})

      const log = {
        createdAt: Date.now(),
        service: 'config.legalAddress.edit',
        payload: {
          _id,
          legalAddress
        },
      }
      LogsCollection.insert(log)

      ConfigurationsCollection.update({_id}, {$set: {legalAddress: legalAddress}})
    },
    'config.email.edit'(_id, email) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Unique configuration ID"
        },
        'email': {
          type: String,
          label: "Email address"
        }
      }).validate({_id, email})

      const log = {
        createdAt: Date.now(),
        service: 'config.email.edit',
        payload: {
          _id,
          email
        },
      }
      LogsCollection.insert(log)

      ConfigurationsCollection.update({_id}, {$set: {email: email}})
    }
  });
}
