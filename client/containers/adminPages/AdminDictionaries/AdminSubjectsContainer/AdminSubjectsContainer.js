import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { SubjectsCollection } from '/api/subjects'

import AdminSubjects from '/client/components/adminPages/AdminDictionaries/AdminSubjects/AdminSubjects'

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
    return <AdminSubjects context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('subjects')

  return {
    subjects: SubjectsCollection.find().fetch()
  }
})(AdminSubjectsContainer);
