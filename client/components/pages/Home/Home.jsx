import React from 'react';
import Scroll, { Element, scroller } from "react-scroll";

import Aux from '/client/hoc/Aux/Aux'

import Nominations from './Nominations/Nominations'
import Voting from './Voting/Voting'
import Testimonials from './Testimonials/Testimonials'

const home = ({context, nominations, nomStyles}) => (
  <Aux>
    <Element name="nominations" />
    <Nominations context={context} nominations={nominations} nomStyles={nomStyles}/>
    {/* Divider */}
    <div className="c-divider-1 -style-solid -size-large u-position-relative" />
    {/* Divider End */}
    <Element name="voting" />
    <Voting context={context}/>
    <Testimonials />
  </Aux>
);

export default home;
