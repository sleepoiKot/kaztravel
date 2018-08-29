import React, { Component } from 'react'

import AdminBar from '/client/components/Header/AdminBar/AdminBar'

class AdminBarContainer extends Component {
  state = {
    collapse: false
  }

  componentDidMount() {
    if ($(window).width() < 992) {
      this.setState({collapse: true})
    }
  }

  render() {
    return <AdminBar context={this}/>
  }
}

export default AdminBarContainer;
