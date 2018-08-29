import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const AuthorsCollection = new Mongo.Collection('authors');

if (Meteor.isServer) {
  Meteor.publish('authors', function(){
    return AuthorsCollection.find({ deleted: {$ne: true} })
  });

  Meteor.methods({
    'author.insert'(author) {
      new SimpleSchema({
        author: {
          type: String,
          label: "Author"
        }
      }).validate({ author })

      const foundAuthor = AuthorsCollection.findOne({name: author})

      if(foundAuthor) return

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'author.insert',
        payload: {
          author,
        },
      }
      LogsCollection.insert(log)

      AuthorsCollection.insert({name: author})
    },
    'author.update'(_id, description) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Author Id"
        },
        description: {
          type: String,
          label: "Author description",
          optional: true
        }
      }).validate({ _id, description })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'author.update',
        payload: {
          _id,
          description,
        },
      }
      LogsCollection.insert(log)

      AuthorsCollection.update({_id}, {$set: {description}})
    }
  });
}
