import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const WhereToBuyCollection = new Mongo.Collection('whereToBuy');

if (Meteor.isServer) {
  Meteor.publish('whereToBuy', function(){
    return WhereToBuyCollection.find({ deleted: {$ne: true} })
  });

  Meteor.methods({
    
  });
}
