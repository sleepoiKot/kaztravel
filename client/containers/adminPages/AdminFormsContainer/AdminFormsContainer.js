import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { FormsCollection } from '/api/forms'

import AdminForms from '/client/components/adminPages/AdminForms/AdminForms'

class AdminFormsContainer extends Component {
  render() {
    return <AdminForms context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('admin.forms')

  return {
    forms: FormsCollection.find().fetch()
  }
})(AdminFormsContainer);
