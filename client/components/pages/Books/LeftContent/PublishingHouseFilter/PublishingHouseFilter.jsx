import React from 'react';

import * as actionTypes from '/client/store/actions';

const section = 'publishingHouse'

const publishingHouseFilter = ({context}) => {
  renderPublshingHouseFilter = () => (
    context.props.publishingHouses.map(publishingHouse => (
      <div key={publishingHouse._id} className="form-check checkbox-filled">
        <input
          type="checkbox"
          className="filled-in form-check-input"
          onChange={(e) => context.onFilterToggle('publishingHouseFilter', e.target.checked, publishingHouse._id, actionTypes.FILTER_PUBLISHING_HOUSE)}
          id={publishingHouse._id}/>
        <label className="form-check-label" htmlFor={publishingHouse._id}>{publishingHouse.name}</label>
      </div>
    ))
  )

  let publishingHouseProperties = {
    publishingHouseTitleClassName: !context.state.publishingHouseCollapse ? 'category-title category-open' : 'category-title',
    publishingHouseContentClassName: context.state.publishingHouseCollapse ? 'category-content dn-collapse' : 'category-content'
  }

  return (
    <div className="category-figure jsd-category-figure clearfix">
      <div
        className={publishingHouseProperties.publishingHouseTitleClassName}
        onClick={() => context.setState({publishingHouseCollapse: !context.state.publishingHouseCollapse})}>
        <a>По издательству</a>
      </div>
      <div className={ publishingHouseProperties.publishingHouseContentClassName }>
        {renderPublshingHouseFilter()}
      </div>
    </div>
  );
}

export default publishingHouseFilter;
