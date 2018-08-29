import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { DispatchesCollection } from '/api/dispatches'

import AdminDispatches from '/client/components/adminPages/AdminDictionaries/AdminDispatches/AdminDispatches'

class AdminDispatchesContainer extends Component {
  render() {
    return <AdminDispatches context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('dispatches')

  return {
    dispatches: DispatchesCollection.find({}, {sort : { email: 1}}).fetch()
  }
})(AdminDispatchesContainer);
