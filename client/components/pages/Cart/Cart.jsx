import React from 'react';

import Basket from './Basket/Basket'
import Ordering from './Ordering/Ordering'

import Aux from '/client/hoc/Aux/Aux'

const cart = ({context, books}) => (
  <Aux>
    <Basket context={context} books={books}/>
    {books.length !== 0 ? <Ordering context={context}/> : null}
  </Aux>
);

export default cart;
