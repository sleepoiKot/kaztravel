import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { PublishingHousesCollection } from '/api/publishingHouses'

import AdminPublishingHouses from '/client/components/adminPages/AdminDictionaries/AdminPublishingHouses/AdminPublishingHouses'

const defaultState = {
  itemId: '',
  itemName: '',

  addPublishingHouseName: '',
  editPublishingHouseName: ''
}

class AdminPublishingHousesContainer extends Component {
  state = defaultState

  onAddPublishingHouseDictionary = () => {
    const { addPublishingHouseName } = this.state

    const data = {
      name: addPublishingHouseName
    }

    Meteor.call('publishingHouse.insert', data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Издательство успешно добавлено в справочник")
        this.setState(defaultState)
      }
    })
  }

  onEditPublishingHouseDictionary = () => {
    const {
      itemId,
      editPublishingHouseName
    } = this.state

    const data = {
      name: editPublishingHouseName
    }

    Meteor.call('publishingHouse.edit', itemId, data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Издательство успешно изменено")
        this.setState(defaultState)
      }
    })
  }

  onDeletePublishingHouseDictionary = () => {
    Meteor.call('publishingHouse.delete', this.state.itemId, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Издательство успешно удалено")
      }
    })
  }

  render() {
    return <AdminPublishingHouses context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('publishingHouses')

  return {
    publishingHouses: PublishingHousesCollection.find().fetch()
  }
})(AdminPublishingHousesContainer);
