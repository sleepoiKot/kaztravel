import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const FormsCollection = new Mongo.Collection('forms');

if (Meteor.isServer) {
  Meteor.publish('admin.forms', function(){
    return FormsCollection.find({deleted: {$ne: true}})
  });

  Meteor.publish('form', function(_id){
    return FormsCollection.find({deleted: {$ne: true}, _id})
  });

  Meteor.methods({
    'get.form'(_id){
      return FormsCollection.findOne(_id)
    },
    'form.insert'(_id, data) {
      console.log(data)
      new SimpleSchema({
        data: {
          type: Object,
          label: "Form data"
        },
        'data.email': {
          type: String,
          regEx: SimpleSchema.RegEx.Email,
          label: "Form email"
        },
        'data.lastName': {
          type: String,
          label: "Form last name",
          optional: true
        },
        'data.firstName': {
          type: String,
          label: "Form first name",
          optional: true
        },
        'data.middleName': {
          type: String,
          label: "Form middle name",
          optional: true
        },
        'data.organization': {
          type: Object,
          label: "Form organization",
          optional: true,
          min: 2,
          max: 2
        },
        'data.organization.value': {
          type: String,
          label: "The value of the organization in the form"
        },
        'data.organization.label': {
          type: String,
          label: "The label of the organization in the form"
        },
        'data.organizationAddress': {
          type: String,
          label: "Form organization address",
          optional: true
        },
        'data.organizationFunctions': {
          type: String,
          label: "Form organization functions",
          optional: true
        },
        'data.organizationPortfolio': {
          type: Object,
          label: "Form organization portfolio",
          optional: true,
          blackbox: true
        },
        'data.phone': {
          type: String,
          label: "Form phone",
          optional: true
        },
        'data.web': {
          type: String,
          label: "Form web",
          optional: true
        },
        'data.project': {
          type: Object,
          label: "Form project",
          optional: true,
          blackbox: true
        },
        'data.photos': {
          type: [Object],
          label: "Form photos",
          optional: true,
          blackbox: true
        },
        'data.youtubeLink': {
          type: String,
          label: "Form YouTube link",
          optional: true
        }
      }).validate({ data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'form.insert',
        payload: {
          _id,
          data
        },
      }
      LogsCollection.insert(log)

      const finaldata = {
        ...data,
        createdAt: new Date()
      }

      console.log(finaldata)
      return

      FormsCollection.upsert({ _id }, { $set: finaldata }, { upsert: true })
    }
  });
}
