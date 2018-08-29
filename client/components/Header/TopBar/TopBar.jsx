import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems'
import TopElements from './TopElements/TopElements'
import ImageSlider from '/client/components/func/ImageSlider'

import Aux from '/client/hoc/Aux/Aux'

const topBar = ({context, configs}) => {
  let items = (
    <header className={ context.state.toggleFiltersOnMobile ? "main-header opened" : "main-header"}>
      <NavigationItems context={context}/>
      {configs ? <Aux>
        <TopElements context={context} configs={configs}/>
        <ImageSlider id="posters" images={configs.posters}/>
      </Aux> : null}
    </header>
  )

  if(!(context.props.location.pathname === '/' || context.props.location.pathname === '/books'))
    items = (
      <header className={ context.state.toggleFiltersOnMobile ? "main-header opened" : "main-header"}>
        <NavigationItems context={context}/>
        <TopElements context={context} configs={configs}/>
      </header>
    )

  return items
}

export default topBar;
