import { Mongo } from 'meteor/mongo'
import { LogsCollection } from '/api/logs'
export const UsersCollection = Meteor.users

Meteor.users.deny({
  update: function() {
    return true;
  }
});

if (Meteor.isServer) {
  import { getRandomCode } from '/server/lib/globalVariables'

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
        'data.profile.phoneNumber': {
          type: String,
          label: "User phone number"
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

      const confirmCode = getRandomCode()

      const finalData = {
        username: data.email,
        email: data.email,
        password: data.password,
        profile: {
          phoneNumber: data.profile.phoneNumber,
          confirmCode
        }
      }

      Accounts.createUser(finalData)
    },
    'verify.sms'(code) {
      new SimpleSchema({
        code: {
          type: String,
          label: "SMS code",
          min: 4,
          max: 4
        }
      }).validate({code})

      const log = {
        createdAt: Date.now(),
        service: 'verify.sms',
        payload: {
          code
        },
      }
      LogsCollection.insert(log)

      let userSMSCode = Meteor.user().profile.confirmCode
      if(userSMSCode === parseInt(code))
        return Meteor.users.update(Meteor.userId(), {$unset: {'profile.confirmCode': ''}})

      return false
    }
  });
}
