import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const DispatchesCollection = new Mongo.Collection('dispatches');

if (Meteor.isServer) {
  Meteor.publish('dispatches', function(){
    return DispatchesCollection.find({ deleted: {$ne: true} })
  });

  Meteor.methods({
    'dispatch.insert'(email) {
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email,
          label: "Dispatch email"
        }
      }).validate({ email })

      const dispacthEmail = DispatchesCollection.findOne({email})

      if(dispacthEmail) throw new Meteor.Error("Вы уже подписаны на рассылку!")

      const log = {
        createdAt: Date.now(),
        service: 'dispatch.insert',
        payload: {
          email
        },
      }
      LogsCollection.insert(log)

      DispatchesCollection.insert({email})
    }
  });
}
