import { Mongo } from 'meteor/mongo'
import { LogsCollection } from '/api/logs'
export const UsersCollection = Meteor.users

Meteor.users.deny({
  update: function() {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish('users', function(){
      return UsersCollection.find({
        deleted: {$ne: true}
      })
  });

  Meteor.methods({
    'user.insert'(data) {
      new SimpleSchema({
        data: {
          type: Object,
          label: "User data"
        },
        'data.username': {
          type: String,
          regEx: SimpleSchema.RegEx.Email,
          label: "User username"
        },
        'data.email': {
          type: String,
          regEx: SimpleSchema.RegEx.Email,
          label: "User email"
        },
        'data.password': {
          type: String,
          label: "User password",
          min: 6
        },
        'data.profile.name': {
          type: String,
          label: "User name"
        },
        'data.profile.customer': {
          type: Boolean
        },
        'data.profile.getDispatch': {
          type: Boolean
        }
      }).validate({data})

      const log = {
        createdAt: Date.now(),
        service: 'user.insert',
        payload: {
          data,
        },
      }
      LogsCollection.insert(log)

      const finalData = {
        username: data.email,
        email: data.email,
        password: data.password,
        profile: {
          name: data.profile.name,
          customer: data.profile.customer,
          dispatch: data.profile.getDispatch
        }
      }

      Accounts.createUser(finalData)
    },
    'user.book.favorite.add'(_id) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Book Id"
        }
      }).validate({_id})

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'user.book.favorite.add',
        payload: {
          _id
        }
      }
      LogsCollection.insert(log)

      Meteor.users.update({_id: Meteor.userId()}, {
        $push: {
          'profile.favorite': _id
        }
      })
    },
    'user.book.favorite.remove'(_id) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Book Id"
        }
      }).validate({_id})

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'user.book.favorite.remove',
        payload: {
          _id
        }
      }
      LogsCollection.insert(log)

      const newFavoriteBooks = Meteor.user().profile.favorite.filter(el => el !== _id)

      Meteor.users.update({_id: Meteor.userId()}, {
        $set: {
          'profile.favorite': newFavoriteBooks
        }
      })
    }
  });
}
