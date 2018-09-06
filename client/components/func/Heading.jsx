import React from 'react';

import Aux from '/client/hoc/Aux/Aux'

const heading = ({sup, head, lead}) => (
  <Aux>
    {/* Heading */}
    <h6 className="u-text-sup">{sup}</h6>
    <h1 className="u-text-hero">{head}</h1>
    <p className="u-text-lead">{lead}</p>
    {/* Heading End */}
  </Aux>
);

export default heading;
