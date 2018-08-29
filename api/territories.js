import { Mongo } from 'meteor/mongo'
import { LogsCollection } from '/api/logs'
import fetch from 'node-fetch'

export const TerritoriesCollection = new Mongo.Collection('territories');

const PAGE_SIZE = 10000

function insertTerritories(arr) {
  arr.forEach(item => {
    if(!TerritoriesCollection.find({ Code: item.Code }).count()) {
      TerritoriesCollection.insert(item)
    }
  })
}

function katoUpdate(from) {
  fetch(`http://data.egov.kz/api/v2/kato/data?source={from: ${from}, size:10000}`)
    .then(function(res) {
      return res.json()
    }).then(function(json) {
      insertTerritories(json)

      if(json.length) {
        katoUpdate(from + PAGE_SIZE)
      }
    });
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

if(Meteor.isServer) {
  if(TerritoriesCollection.find().fetch().length === 0) katoUpdate(0)

  Meteor.publish('territories.by.page', function(page, pageSize){
    return TerritoriesCollection.find({
        deleted: {$ne: true},
      },
      {
        skip: pageSize * (page - 1),
        limit: pageSize
      }
    );
  });

  Meteor.publish('territories.by.parent', function(Parent) {
    return TerritoriesCollection.find(
      {
        Parent,
        deleted: {$ne: true}
      }
    )
  })

  Meteor.publish('territories.by.level', function(Level) {
    return TerritoriesCollection.find(
      {
        Level,
        deleted: {$ne: true}
      }
    )
  })

  Meteor.publish('territories', function(placeValue){
    const capital = 'астана'
    const southCapital = 'алматы'

    if(!placeValue) return TerritoriesCollection.find({_id: null})

    const regex = new RegExp(escapeRegex(placeValue), 'gi')

    if(regex.test(capital) || regex.test(southCapital))
      return TerritoriesCollection.find({ deleted: {$ne: true}, NameRus: regex})

    return TerritoriesCollection.find({ deleted: {$ne: true}, Level: 4, NameRus: regex})
  });

  Meteor.publish('territories.names', function(){
    if(!Meteor.call('collection.permission.check', this.userId, 'TerritoriesCollection', 'r'))
      return

    return TerritoriesCollection.find({
        deleted: {
            $ne: true
          }
      }, {
        fields: { 'name.ru': 1 }
      });
  });

  Meteor.publish('territory', function(_id){
    if(!Meteor.call('collection.permission.check', this.userId, 'TerritoriesCollection', 'r'))
      return

    return TerritoriesCollection.find({ deleted: {$ne: true}, _id });
  });

  Meteor.publish('territories.search', function(text){
    return TerritoriesCollection.find({
      $or: [
        {
          deleted: { $ne: true },
          NameKaz: { $regex: new RegExp(text, 'i') }
        },
        {
          deleted: { $ne: true },
          NameRus: { $regex: new RegExp(text, 'i') }
        },
      ]
    });
  });

  Meteor.methods({
    'get.territories.by.page'(page, pageSize) {
      return TerritoriesCollection.find({
          deleted: {$ne: true},
        },
        {
          skip: pageSize * (page - 1),
          limit: pageSize
        }
      ).fetch()
    },
    'get.territories.by.search'(text) {
      return TerritoriesCollection.find({
        $or: [
          {
            deleted: { $ne: true },
            NameKaz: { $regex: new RegExp(text, 'i') }
          },
          {
            deleted: { $ne: true },
            NameRus: { $regex: new RegExp(text, 'i') }
          },
        ]
      }).fetch()
    },
    'kato.update'() {
      katoUpdate(0)
    },
    'territory.insert'(data, userIp) {
      const {lastName, firstName, middleName, name} = Meteor.user().profile
      const FIO = `${lastName ? lastName : name.ru} ${firstName ? firstName : ''} ${middleName ? middleName : ''}`
      const log = {
        userIp: userIp,
        userIIN: Meteor.user().username,
        userFIO: FIO,
        createdAt: Date.now(),
        service: 'territory.insert',
        payload: {
          data,
        },
      }
      LogsCollection.insert(log)

      const parentTerritory = TerritoriesCollection.findOne({ Id: data.Parent })
      data.Level = parentTerritory.Level + 1

      TerritoriesCollection.insert(data)
    },
    'territory.delete'(_id, userIp) {
      const {lastName, firstName, middleName, name} = Meteor.user().profile
      const FIO = `${lastName ? lastName : name.ru} ${firstName ? firstName : ''} ${middleName ? middleName : ''}`
      const log = {
        userIp: userIp,
        userIIN: Meteor.user().username,
        userFIO: FIO,
        createdAt: Date.now(),
        service: 'territory.delete',
        payload: {
          _id
        },
      }
      LogsCollection.insert(log)

      TerritoriesCollection.update({ _id }, { $set: {deleted: true} })
    },
    'territory.update'(_id, data, userIp) {
      const {lastName, firstName, middleName, name} = Meteor.user().profile
      const FIO = `${lastName ? lastName : name.ru} ${firstName ? firstName : ''} ${middleName ? middleName : ''}`
      const log = {
        userIp: userIp,
        userIIN: Meteor.user().username,
        userFIO: FIO,
        createdAt: Date.now(),
        service: 'territory.update',
        payload: {
          _id,
          data
        },
      }
      LogsCollection.insert(log)

      const parentTerritory = TerritoriesCollection.findOne({ Id: data.Parent })
      data.Level = parentTerritory.Level + 1

      TerritoriesCollection.update({ _id }, { $set: data })
    },
    'territory.has.children'(Id) {
      return !!TerritoriesCollection.find({ Parent: Id }).count()
    },
    'territory.has.parent'(terr) {
      const regex = new RegExp(escapeRegex(terr), 'gi')
      const queryTerritories = TerritoriesCollection.find({ deleted: {$ne: true}, NameRus: regex}, {limit: 100}).fetch()

      const joinedTerritoriesArray = queryTerritories.map(terr => {
        let parentTerritoriesName = [terr.NameRus]

        if(terr.Parent){
          let parentTerritory = TerritoriesCollection.findOne({ Id: terr.Parent })
          parentTerritoriesName.push(parentTerritory.NameRus)

          while(parentTerritory.Parent){
            parentTerritory = TerritoriesCollection.findOne({ Id: parentTerritory.Parent })
            parentTerritoriesName.push(parentTerritory.NameRus)
          }
        }

        return {
          value: terr.Code,
          label: parentTerritoriesName.reverse().join(', ')
        }
      })
      return joinedTerritoriesArray
    },
    'territory.childrenPlace'(_id) {
      return TerritoriesCollection.findOne(_id)
    },
    'get.territories.by.code'(code) {
      let place = TerritoriesCollection.findOne({ deleted: {$ne: true}, Code: parseInt(code) })

      let mainPlace = place
      let places = ['',]
      let terrParentId = []
      if(place){
        places.push(place._id)
        terrParentId.push(place.Id)
        while(place.Parent) {
          place = TerritoriesCollection.findOne({ Id: place.Parent})
          places.push(place._id)
          terrParentId.push(place.Id)
        }
      }

      terrParentId.push('')
      return { mainPlace, places: places.reverse(), area: place, parentId: terrParentId.reverse() }
    }
  });
}
