import React from 'react';

import * as actionTypes from '/client/store/actions';

const section = 'age'

const ageFilter = ({context}) => {
  renderAgeFilter = () => (
    context.props.ages.map(age => (
      <div key={age._id} className="form-check checkbox-filled">
        <input
          type="checkbox"
          className="filled-in form-check-input"
          onChange={(e) => context.onFilterToggle('ageFilter', e.target.checked, age._id, actionTypes.FILTER_AGE)}
          id={age._id}/>
        <label className="form-check-label" htmlFor={age._id}>{age.name}</label>
      </div>
    ))
  )

  let ageProperties = {
    ageTitleClassName: !context.state.ageCollapse ? 'category-title category-open' : 'category-title',
    ageContentClassName: context.state.ageCollapse ? 'category-content dn-collapse' : 'category-content'
  }

  return (
    <div className="category-figure jsd-category-figure clearfix">
      <div
        className={ageProperties.ageTitleClassName}
        onClick={() => context.setState({ageCollapse: !context.state.ageCollapse})}>
        <a>Возраст</a>
      </div>
      <div className={ ageProperties.ageContentClassName }>
        {renderAgeFilter()}
      </div>
    </div>
  );
}

export default ageFilter;
