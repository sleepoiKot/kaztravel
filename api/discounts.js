import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const DiscountsCollection = new Mongo.Collection('discounts');

if (Meteor.isServer) {
  Meteor.publish('discounts', function(){
    return DiscountsCollection.find({ deleted: {$ne: true} })
  });

  Meteor.methods({
    'discount.insert'(data) {
      new SimpleSchema({
        data: {
          type: Object,
          label: "Discount"
        },
        'data.label': {
          type: String,
          label: "Discount label"
        },
        'data.value': {
          type: String,
          label: "Discount value"
        }
      }).validate({ data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'discount.insert',
        payload: {
          data,
        },
      }
      LogsCollection.insert(log)

      DiscountsCollection.insert(data)
    },
    'discount.edit'(_id, data) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Discount Id"
        },
        data: {
          type: Object,
          label: "Discount"
        },
        'data.label': {
          type: String,
          label: "Discount label"
        },
        'data.value': {
          type: String,
          label: "Discount value"
        }
      }).validate({ _id, data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'discount.edit',
        payload: {
          _id,
          data
        },
      }
      LogsCollection.insert(log)

      DiscountsCollection.update({_id}, {$set: data })
    },
    'discount.delete'(_id) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Discount Id"
        }
      }).validate({ _id })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'discount.delete',
        payload: {
          _id
        },
      }
      LogsCollection.insert(log)

      DiscountsCollection.update({_id}, {$set: {deleted: true} })
    }
  });
}
