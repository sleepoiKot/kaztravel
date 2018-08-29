import React from 'react';

import SortContent from './SortContent/SortContent'
import BooksContent from './BooksContent/BooksContent'

const topContent = ({context}) => (
  <div className="col-category books clearfix">
    <div className="books-figure clearfix dn-fix">
      <SortContent context={context}/>
      <div className="content-divider"/>
      <BooksContent
        context={context}
        favoriteBooks={context.props.user ? context.props.user.profile.favorite : null}
        books={context.props.books}
        cart={context.props.cart}
        onAddToCart={(_id, price, amount) => context.props.onAddToCart(_id, price, amount)}/>
    </div>
    {context.props.limit === context.props.books.length ?
      <button
        onClick={() => context.props.onLimit()}
        className="btn btn-rounded"
        style={{width: '50%', display: 'block', margin: '0 auto', backgroundColor: '#f80'}}>Загрузить еще</button>
        :
        null
    }
  </div>
);

export default topContent;
