import { Mongo } from 'meteor/mongo';
import { LogsCollection } from '/api/logs'
export const BooksCollection = new Mongo.Collection('books');

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

if (Meteor.isServer) {

  Meteor.publish('admin.books', function(){
    return BooksCollection.find()
  });

  Meteor.publish('books.cart', function(ids){
    return BooksCollection.find({_id: { $in: ids }})
  });

  Meteor.publish('all.books', function(){
    return BooksCollection.find({deleted: { $ne: true }})
  })

  Meteor.publish('books', function(searchQuery, age, subject, publishingHouse, madeInKz, sortByNew, sortByLowPrice, sortByHighPrice, limit){
    let queryOptions = { deleted: {$ne: true} }
    let options = { sort: { createdAt: 1} }

    if(searchQuery){
      const regex = new RegExp(escapeRegex(searchQuery), 'gi')

      queryOptions = {
        ...queryOptions,
        $or: [{name: regex}, {author: regex}]
      }
    }

    if(age.length !== 0) queryOptions = {...queryOptions, 'age.value': { $in: age }}
    if(subject.length !== 0) queryOptions = {...queryOptions, 'subject.value': { $in: subject }}
    if(publishingHouse.length !== 0) queryOptions = {...queryOptions, 'publishingHouse.value': { $in: publishingHouse }}
    if(madeInKz) queryOptions = {...queryOptions, madeInKz: madeInKz}
    if(sortByNew) options = {sort: { new: -1}}
    if(sortByLowPrice) options = {sort: { price: 1 }}
    if(sortByHighPrice) options = {sort: { price: -1 }}

    options.limit = limit

    return BooksCollection.find(queryOptions, options)
  });

  Meteor.publish('book', function(_id){
    return BooksCollection.find({deleted: {$ne: true}, _id})
  });

  Meteor.methods({
    'get.book'(_id){
      return BooksCollection.findOne(_id)
    },
    'book.insert'(_id, data) {
      new SimpleSchema({
        data: {
          type: Object,
          label: "Book data"
        },
        'data.name': {
          type: String,
          label: "Book name"
        },
        'data.serialNumber': {
          type: String,
          label: "Book serial number"
        },
        'data.author': {
          type: String,
          label: "Book author"
        },
        'data.amount': {
          type: Number,
          label: "Book amount",
          min: 0
        },
        'data.description': {
          type: Object,
          label: "Book description",
          blackbox: true
        },
        'data.subject': {
          type: [Object],
          label: "Book subject",
          min: 2,
          max: 2
        },
        'data.subject.$.value': {
          type: String,
          label: "The value of the subject in the book"
        },
        'data.subject.$.label': {
          type: String,
          label: "The label of the subject in the book"
        },
        'data.age': {
          type: [Object],
          label: "Book age",
          min: 2,
          max: 2
        },
        'data.age.$.value': {
          type: String,
          label: "The value of the age in the book"
        },
        'data.age.$.label': {
          type: String,
          label: "The label of the age in the book"
        },
        'data.publishingHouse': {
          type: Object,
          label: "Book publishing house",
          min: 2,
          max: 2
        },
        'data.publishingHouse.value': {
          type: String,
          label: "The value of the publishing house in the book"
        },
        'data.publishingHouse.label': {
          type: String,
          label: "The label of the publishing house in the book"
        },
        'data.price': {
          type: Number,
          label: "Book price",
          min: 0
        },
        'data.discount': {
          type: Object,
          label: "Book discount",
          min: 2,
          max: 2
        },
        'data.discount.value': {
          type: String,
          label: "The value of the discount in the book"
        },
        'data.discount.label': {
          type: String,
          label: "The label of the discount in the book"
        },
        'data.shortDescriptions': {
          type: [String],
          label: "Book short descriptions"
        },
        'data.new': {
          type: Boolean,
          label: "Book new",
          optional: true
        },
        'data.oldPrice': {
          type: Number,
          label: "Book old price",
          optional: true,
          min: 0
        },
        'data.images': {
          type: [Object],
          label: "Book images",
          blackbox: true
        },
        'data.cover': {
          type: Object,
          label: "Book cover",
          blackbox: true
        },
        'data.madeInKz': {
          type: Boolean,
          label: "Book made in Kazakhstan",
          optional: true
        },
        'data.pages': {
          type: Number,
          label: "Book pages",
          min: 0
        },
        'data.proportions': {
          type: String,
          label: "Book proportions"
        },
        'data.weight': {
          type: Number,
          label: "Book weight",
          decimal: true,
          min: 0
        }
      }).validate({ data })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'book.insert',
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

      BooksCollection.upsert({ _id }, { $set: finaldata }, { upsert: true })
    },
    'book.delete'(_id) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Book Id"
        }
      }).validate({ _id })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'book.delete',
        payload: {
          _id
        },
      }
      LogsCollection.insert(log)

      BooksCollection.update({_id}, {$set: {deleted: true} })
    },
    'book.restore'(_id) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Book Id"
        }
      }).validate({ _id })

      const log = {
        username: Meteor.user().username,
        user: Meteor.user().profile.name,
        createdAt: Date.now(),
        service: 'book.restore',
        payload: {
          _id
        },
      }
      LogsCollection.insert(log)

      BooksCollection.update({_id}, {$unset: {deleted: ''} })
    },
    'find.same.books'(_id) {
      new SimpleSchema({
        _id: {
          type: String,
          label: "Book Id"
        }
      }).validate({ _id })

      const log = {
        createdAt: Date.now(),
        service: 'find.same.books',
        payload: {
          _id
        },
      }
      LogsCollection.insert(log)

      let theBook = BooksCollection.findOne(_id)
      let theBookSubject = BooksCollection.find({subject: theBook.subject}).fetch()
      let slicedArrayOfBooks = theBookSubject.slice(0, 12)

      return BooksCollection.find().fetch()
    }
  });
}
