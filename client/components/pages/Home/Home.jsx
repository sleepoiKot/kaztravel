import React from 'react';
import Scroll, { Element, scroller } from "react-scroll";

import Aux from '/client/hoc/Aux/Aux'

import Nominations from './Nominations/Nominations'

const home = () => (
  <Aux>
    <Element name="nominations" />
    <Nominations />
  </Aux>
);

export default home;
