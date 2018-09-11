import React from 'react';
import { Link } from 'react-router-dom'
import Heading from '/client/components/func/Heading'

const nomination = ({context}) => {
  const { nomination } = context.props

  let SUP = "NATIONAL TOURISM AWARDS"
  let HEAD = nomination ? nomination.name[context.props.lang] : null
  let LEAD = nomination ? nomination.shortDescription[context.props.lang] : null

  renderForms = () => (
    context.props.forms.map(form => (
      <div key={form._id} className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 illustration graphic">
        <div className="c-portfolio-1-item-inner">
          <div className="c-portfolio-1-media">
            <div className="c-portfolio-1-photo">
              <img src={form.coverImage ? form.coverImage.link : "/assets/img/portfolio-1-500x500.jpg"} alt={form.organizationName} />
            </div>
            <div className="c-portfolio-1-caption -style-1 -visible">
              <div className="c-portfolio-1-caption-inner">
                <h3 className="c-portfolio-1-caption-title">{form.organizationName}</h3>
                <div className="c-portfolio-1-caption-tags">
                  <span>{form.organizationFunctions}</span>
                </div>
              </div>
            </div>
            <Link className="c-portfolio-1-link" to={`/nomination/${nomination.suffix}/${form._id}`} />
          </div>
        </div>
      </div>
    ))
  )

  return (
    <div className="c-section -space-large">
      <div className="c-container">
        <Heading sup={SUP} head={HEAD} lead={LEAD} />
        <div className="u-space-100 u-space-120@xl" />
        <div className="c-portfolio-1 -js-popup -js-isotope" data-cursor-portfolio-layout="grid">
          <div className="c-portfolio-1-inner row -gutter-small">
            {renderForms()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default nomination;
