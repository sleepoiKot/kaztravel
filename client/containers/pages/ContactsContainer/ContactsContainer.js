import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { ConfigurationsCollection } from '/api/configs'

import Contacts from '/client/components/pages/Contacts/Contacts'

class ContactsContainer extends Component {
  render() {
    return <Contacts contacts={this.props.configs}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('configs')

  return {
    configs: ConfigurationsCollection.findOne()
  }
})(ContactsContainer);
