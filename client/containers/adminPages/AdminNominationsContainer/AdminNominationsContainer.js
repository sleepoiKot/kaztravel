import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { NominationsCollection } from '/api/nominations'

import AdminNominations from '/client/components/adminPages/AdminNominations/AdminNominations'

const defaultState = {
  itemId: '',
  itemName: '',

  addNominationName: '',
  addNominationShortDescription: '',

  editNominationName: '',
  editNominationShortDescription: '',
}

class AdminNominationsContainer extends Component {
  state = defaultState

  onAddNomination = () => {
    const {
      addNominationName,
      addNominationShortDescription
    } = this.state

    const data = {
      name: addNominationName,
      shortDescription: addNominationShortDescription
    }

    Meteor.call('nomination.insert', data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Номинация успешно добавлена в справочник")
        this.setState(defaultState)
      }
    })
  }

  onEditNomination = () => {
    const {
      itemId,
      editNominationName,
      editNominationShortDescription
    } = this.state

    const data = {
      name: editNominationName,
      shortDescription: editNominationShortDescription
    }

    Meteor.call('nomination.edit', itemId, data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Номинация успешно изменена")
        this.setState(defaultState)
      }
    })
  }

  onDeleteNomination = () => {
    Meteor.call('nomination.delete', this.state.itemId, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Номинация успешно удалена")
      }
    })
  }

  render() {
    return <AdminNominations context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('nominations')

  return {
    nominations: NominationsCollection.find().fetch()
  }
})(AdminNominationsContainer);
