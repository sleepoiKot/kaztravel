import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { UsersCollection } from '/api/users'

import AdminUsers from '/client/components/adminPages/AdminUsers/AdminUsers'

class AdminUsersContainer extends Component {
  render() {
    return <AdminUsers context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('users')

  return {
    users: UsersCollection.find({'profile.isAdmin': {$ne: true}}).fetch()
  }
})(AdminUsersContainer);
