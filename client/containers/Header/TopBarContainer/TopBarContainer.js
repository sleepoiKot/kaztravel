import React, { Component } from 'react'

import TopBar from '/client/components/Header/TopBar/TopBar'

const defaultState = {
  username: ''
}

class TopBarContainer extends Component {
  state = defaultState
  
  render() {
    return (
      <TopBar context={this}/>
    );
  }
}

export default TopBarContainer;
