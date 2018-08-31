import React from 'react';

import Aux from '/client/hoc/Aux/Aux'
import NavigationBar from './NavigationBar/NavigationBar'
import TopElements from './TopElements/TopElements'

const topBar = () => (
  <Aux>
    <NavigationBar />
    <TopElements />
  </Aux>
)

export default topBar;
