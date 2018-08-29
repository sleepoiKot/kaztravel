import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { WhereToBuyCollection } from '/api/whereToBuy'

import AdminWhereToBuy from '/client/components/adminPages/AdminDictionaries/AdminWhereToBuy/AdminWhereToBuy'

const defaultState = {
  itemId: '',
  itemName: '',

  addSubjectName: '',
  editSubjectName: ''
}

class AdminSubjectsContainer extends Component {
  state = defaultState

  onAddSubjectDictionary = () => {
    const { addSubjectName } = this.state

    const data = {
      name: addSubjectName
    }

    Meteor.call('subject.insert', data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Тематика успешно добавлена в справочник")
        this.setState(defaultState)
      }
    })
  }

  onEditSubjectDictionary = () => {
    const {
      itemId,
      editSubjectName
    } = this.state

    const data = {
      name: editSubjectName
    }

    Meteor.call('subject.edit', itemId, data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Тематика успешно изменена")
        this.setState(defaultState)
      }
    })
  }

  onDeleteSubjectDictionary = () => {
    Meteor.call('subject.delete', this.state.itemId, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Тематика успешно удалена")
      }
    })
  }

  render() {
    return <AdminWhereToBuy context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('subjects')

  return {
    whereToBuy: WhereToBuyCollection.find().fetch()
  }
})(AdminSubjectsContainer);
