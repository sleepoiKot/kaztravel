import React from 'react';

import * as actionTypes from '/client/store/actions';

const section = 'subject'

const subjectFilter = ({context}) => {
  renderSubjectFilter = () => (
    context.props.subjects.map(subject => (
      <div key={subject._id} className="form-check checkbox-filled">
        <input
          type="checkbox"
          className="filled-in form-check-input"
          onChange={(e) => context.onFilterToggle('subjectFilter', e.target.checked, subject._id, actionTypes.FILTER_SUBJECT)}
          id={subject._id}/>
        <label className="form-check-label" htmlFor={subject._id}>{subject.name}</label>
      </div>
    ))
  )

  let subjectProperties = {
    subjectTitleClassName: !context.state.subjectCollapse ? 'category-title category-open' : 'category-title',
    subjectContentClassName: context.state.subjectCollapse ? 'category-content dn-collapse' : 'category-content'
  }

  return (
    <div className="category-figure jsd-category-figure clearfix">
      <div
        className={subjectProperties.subjectTitleClassName}
        onClick={() => context.setState({subjectCollapse: !context.state.subjectCollapse}) }>
        <a>Тематика</a>
      </div>
      <div className={ subjectProperties.subjectContentClassName }>
        {renderSubjectFilter()}
      </div>
    </div>
  );
}

export default subjectFilter;
