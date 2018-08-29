import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { ConfigurationsCollection } from '/api/configs'

import Footer from '/client/components/Footer/Footer'

class FooterContainer extends Component {
  render() {
    return (
      <Footer contacts={this.props.configs}/>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('configs')

  return {
    configs: ConfigurationsCollection.findOne()
  }
})(FooterContainer);
