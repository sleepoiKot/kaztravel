import React from 'react';

import Aux from '/client/hoc/Aux/Aux'
import NavigationBar from './NavigationBar/NavigationBar'
import TopElements from './TopElements/TopElements'

const topBar = ({context}) => {
  let items = (
    <Aux>
      <NavigationBar context={context}/>
      <TopElements />
    </Aux>
  )

  if(context.props.location.pathname !== '/')
    items = <NavigationBar context={context}/>


  return items
}

export default topBar;
