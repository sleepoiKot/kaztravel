import React, { Component } from 'react'

import TopBar from '/client/components/Header/TopBar/TopBar'

class TopBarContainer extends Component {
  render() {
    return (
      <TopBar context={this}/>
    );
  }
}

export default TopBarContainer;
