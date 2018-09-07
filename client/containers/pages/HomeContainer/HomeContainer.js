import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import moment from 'moment'

import Home from '/client/components/pages/Home/Home'

import { NominationsCollection } from '/api/nominations'
import { NominationsStylingCollection } from '/api/nominationsStyling'

import { multipleSubscribe } from '/client/libs/subscriptionsRelated'

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
    this.interval = setInterval(() => {
      let countdown = moment('2018/09/20 23:59:59', 'YYYY/MM/DD HH:mm:ss').diff(moment())

      this.setState({
        days: moment.duration(countdown).days(),
        hours: moment.duration(countdown).hours(),
        minutes: moment.duration(countdown).minutes(),
        seconds: moment.duration(countdown).seconds()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return <Home
      context={this}
      nominations={this.props.nominations}
      nomStyles={this.props.nominationsStyling.map(({position, left, top}) => ({ position, left, top }))}/>
  }
}

export default withTracker(() => {
  multipleSubscribe([
    'nominations',
    'nominations.styling'
  ])

  return {
    nominationsStyling: NominationsStylingCollection.find({}, {sort: {i: 1}}).fetch(),
    nominations: NominationsCollection.find().fetch()
  }
})(HomeContainer);
