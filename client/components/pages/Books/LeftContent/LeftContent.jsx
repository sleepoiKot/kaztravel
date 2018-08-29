import React from 'react';

import AgeFilter from './AgeFilter/AgeFilter'
import SubjectFilter from './SubjectFilter/SubjectFilter'
import PublishingHouseFilter from './PublishingHouseFilter/PublishingHouseFilter'
import EmailDispatch from './EmailDispatch/EmailDispatch'

const leftContent = ({context}) => (
  <div className="select-category">
    <div className="filter">
      <AgeFilter context={context}/>
      <SubjectFilter context={context}/>
      <PublishingHouseFilter context={context}/>
      <div className="category-figure jsd-category-figure clearfix" style={{borderBottomWidth: 0}}>
        <div className="category-content">
          <div className="form-check checkbox-filled">
            <input
              type="checkbox"
              className="filled-in form-check-input"
              onChange={(e) => context.props.onFilterMadeInKZ()}
              id="madeInKzCheckbox"/>
            <label className="form-check-label" htmlFor="madeInKzCheckbox">Сделано в Казахстане</label>
          </div>
        </div>
      </div>
    </div>
    <EmailDispatch context={context}/>
  </div>
);

export default leftContent;
