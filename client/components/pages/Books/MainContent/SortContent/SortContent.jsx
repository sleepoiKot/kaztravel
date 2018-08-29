import React from 'react';

const defaultSort = {
  new: false,
  best: false,
  lowPrice: false,
  highPrice: false
}

const sortContent = ({context}) => {
  const style = {
    color: '#ff8800'
  }

  return(
    <div className="clearfix category-sort">
      <div className="sort">
        Сортировка по:
        <ul>
          <li><a style={ context.props.sortByNew ? style : null} onClick={() => {
            context.props.onSortByNew()
            context.forceUpdate()
          }}>новинкам</a></li> &nbsp; | &nbsp;
          <li><a style={ context.state.sortBooks.best ? style : null} onClick={() => {
            let sort = {
              ...defaultSort,
              best: true
            }
            context.setState({ sortBooks: sort })
          }}>бестселлерам</a></li> &nbsp; | &nbsp;
          <li><a style={ context.props.sortByLowPrice ? style : null} onClick={() => context.props.onSortByLowPrice()}>наименьшей цене</a></li> &nbsp; | &nbsp;
          <li><a style={ context.props.sortByHighPrice ? style : null} onClick={() => context.props.onSortByHighPrice()}>наибольшей цене</a></li></ul>
      </div>
    </div>
  );
}

export default sortContent;
