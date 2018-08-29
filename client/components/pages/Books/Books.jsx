import React from 'react';

import LeftContent from './LeftContent/LeftContent'
import MainContent from './MainContent/MainContent'

const books = ({context}) => (
  <div className="row catalog-page">
    <div className="clearfix category-sort" />
    <div className="clearfix main-content">
      <LeftContent context={context}/>
      <MainContent context={context}/>
    </div>
  </div>
);

export default books;
