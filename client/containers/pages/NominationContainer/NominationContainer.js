import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { FormsCollection } from '/api/forms'
import { NominationsCollection } from '/api/nominations'
import Nomination from '/client/components/pages/Nomination/Nomination'

class NominationContainer extends Component {
  render() {
    return (
      <Nomination context={this}/>
    );
  }
}

export default withTracker((props) => {
  Meteor.subscribe('forms.category', props.match.params.suffix)
  Meteor.subscribe('nomination', props.match.params.suffix)

  return {
    forms: FormsCollection.find().fetch(),
    nomination: NominationsCollection.findOne()
  }
})(NominationContainer);
