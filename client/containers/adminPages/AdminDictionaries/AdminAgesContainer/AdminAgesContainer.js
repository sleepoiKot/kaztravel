import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { AgesCollection } from '/api/ages'

import AdminAges from '/client/components/adminPages/AdminDictionaries/AdminAges/AdminAges'

const defaultState = {
  itemId: '',
  itemName: '',

  addAgeName: '',
  addAgeRange: null,

  editAgeName: '',
  editAgeRange: null
}

class AdminAgesContainer extends Component {
  state = defaultState

  onAddAgeDictionary = () => {
    const {
      addAgeName,
      addAgeRange
    } = this.state

    const data = {
      name: addAgeName,
      range: addAgeRange
    }

    Meteor.call('age.insert', data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Возраст успешно добавлен в справочник")
        this.setState(defaultState)
      }
    })
  }

  onEditAgeDictionary = () => {
    const {
      itemId,
      editAgeName,
      editAgeRange
    } = this.state

    const data = {
      name: editAgeName,
      range: editAgeRange
    }

    Meteor.call('age.edit', itemId, data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Возраст успешно изменен")
        this.setState(defaultState)
      }
    })
  }

  onDeleteAgeDictionary = () => {
    Meteor.call('age.delete', this.state.itemId, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Возраст успешно удален")
      }
    })
  }

  render() {
    this.ageOptions = [
      { value: [0, 1, 2, 3], label: '0-3' },
      { value: [4, 5, 6], label: '4-6' },
      { value: [7, 8, 9, 10, 11], label: '7-11' },
      { value: [12, 13, 14, 15], label: '12-15' },
      { value: [16], label: 'для родителей' }
    ]

    return <AdminAges context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('ages')

  return {
    ages: AgesCollection.find().fetch()
  }
})(AdminAgesContainer);
