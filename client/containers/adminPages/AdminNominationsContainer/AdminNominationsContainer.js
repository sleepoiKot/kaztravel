import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { NominationsCollection } from '/api/nominations'

import AdminNominations from '/client/components/adminPages/AdminNominations/AdminNominations'

const defaultState = {
  itemId: '',
  itemName: '',

  addNominationNameRu: '',
  addNominationNameKz: '',
  addNominationNameEn: '',
  addNominationShortDescriptionRu: '',
  addNominationShortDescriptionKz: '',
  addNominationShortDescriptionEn: '',
  addNominationSource: '',
  addNominationSuffix: '',

  editNominationNameRu: '',
  editNominationNameKz: '',
  editNominationNameEn: '',
  editNominationShortDescriptionRu: '',
  editNominationShortDescriptionKz: '',
  editNominationShortDescriptionEn: '',
  editNominationSource: '',
}

class AdminNominationsContainer extends Component {
  state = defaultState

  onAddNomination = () => {
    const {
      addNominationNameRu,
      addNominationNameKz,
      addNominationNameEn,
      addNominationShortDescriptionRu,
      addNominationShortDescriptionKz,
      addNominationShortDescriptionEn,
      addNominationSource,
      addNominationSuffix
    } = this.state

    const data = {
      name: {
        ru: addNominationNameRu,
        kz: addNominationNameKz,
        en: addNominationNameEn
      },
      shortDescription: {
        ru: addNominationShortDescriptionRu,
        kz: addNominationShortDescriptionKz,
        en: addNominationShortDescriptionEn
      },
      src: addNominationSource,
      suffix: addNominationSuffix
    }

    Meteor.call('nomination.insert', data, (err, res) => {
      if(err){
        toastr.error(err.reason, this.props.locStrings.oopsSmthWentWrong)
      } else {
        toastr.success(this.props.locStrings.nominationInsertSuccess)
        this.setState(defaultState)
      }
    })
  }

  onEditNomination = () => {
    const {
      itemId,
      editNominationNameRu,
      editNominationNameKz,
      editNominationNameEn,
      editNominationShortDescriptionRu,
      editNominationShortDescriptionKz,
      editNominationShortDescriptionEn,
      editNominationSource
    } = this.state

    const data = {
      name: {
        ru: editNominationNameRu,
        kz: editNominationNameKz,
        en: editNominationNameEn,
      },
      shortDescription: {
        ru: editNominationShortDescriptionRu,
        kz: editNominationShortDescriptionKz,
        en: editNominationShortDescriptionEn,
      },
      src: editNominationSource
    }

    Meteor.call('nomination.edit', itemId, data, (err, res) => {
      if(err){
        toastr.error(err.reason, this.props.locStrings.oopsSmthWentWrong)
      } else {
        toastr.success(this.props.locStrings.nominationEditSuccess)
        this.setState(defaultState)
      }
    })
  }

  onDeleteNomination = () => {
    Meteor.call('nomination.delete', this.state.itemId, (err, res) => {
      if(err){
        toastr.error(err.reason, this.props.locStrings.oopsSmthWentWrong)
      } else {
        toastr.success(this.props.locStrings.nominationDeleteSuccess)
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
