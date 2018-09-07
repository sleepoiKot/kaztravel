import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { FormsCollection } from '/api/forms'
import { NominationsCollection } from '/api/nominations'

import AdminForms from '/client/components/adminPages/AdminForms/AdminForms'

import { multipleSubscribe } from '/client/libs/subscriptionsRelated'

class AdminFormsContainer extends Component {
  render() {
    return <AdminForms context={this}/>
  }
}

export default withTracker(() => {
  multipleSubscribe([
    'admin.forms',
    'nominations'
  ])

  return {
    forms: FormsCollection.find().fetch(),
    nominations: NominationsCollection.find().fetch()
  }
})(AdminFormsContainer);
