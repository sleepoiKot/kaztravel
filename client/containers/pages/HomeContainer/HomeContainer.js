import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import moment from 'moment'

import Home from '/client/components/pages/Home/Home'

import { NominationsCollection } from '/api/nominations'

const defaultState = {
  // countdown state
  days: '',
  hours: '',
  minutes: '',
  seconds: ''
}

class HomeContainer extends Component {
  state = defaultState

  componentDidMount() {
    setTimeout(() => {$('#preloader').fadeOut('slow')}, 500)

    setInterval(() => {
      let countdown = moment('2018/09/20 23:59:59', 'YYYY/MM/DD HH:mm:ss').diff(moment())

      this.setState({
        days: moment.duration(countdown).days(),
        hours: moment.duration(countdown).hours(),
        minutes: moment.duration(countdown).minutes(),
        seconds: moment.duration(countdown).seconds()
      })
    }, 1000)
  }

  render() {
    return <Home context={this} nominations={this.props.nominations}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('nominations')

  return {
    nominations: NominationsCollection.find().fetch()
  }
})(HomeContainer);
