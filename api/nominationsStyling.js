import { Mongo } from 'meteor/mongo';
export const NominationsStylingCollection = new Mongo.Collection('nominationsStyling');

if (Meteor.isServer) {
  Meteor.publish('nominations.styling', function(){
    return NominationsStylingCollection.find()
  });

  Meteor.methods({
    // Meteor methods
  });
}
