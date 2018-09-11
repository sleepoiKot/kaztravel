import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { FormsCollection } from '/api/forms'
import { NominationsCollection } from '/api/nominations'
import NominationForm from '/client/components/pages/Nomination/NominationForm/NominationForm'

class NominationFormContainer extends Component {
  render() {
    return (
      <NominationForm context={this} form={this.props.form} nomination={this.props.nomination}/>
    );
  }
}

export default withTracker((props) => {
  Meteor.subscribe('form', props.match.params._id)
  Meteor.subscribe('nomination', props.match.params.suffix)

  return {
    form: FormsCollection.findOne(),
    nomination: NominationsCollection.findOne()
  }
})(NominationFormContainer);
