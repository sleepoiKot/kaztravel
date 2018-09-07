import React from 'react';
import { Link } from 'react-router-dom'

import Heading from '/client/components/func/Heading'

const nominations = ({context, nominations, nomStyles}) => {
  let SUP = context.props.locStrings.nominationsSup
  let HEAD = context.props.locStrings.nominationsHead
  let LEAD = context.props.locStrings.nominationsLead

  renderNominations = () => (
    nominations.map((nomination, i) => {
      let style = nomStyles[i]

      return (
        <div key={nomination._id} className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3" style={style}>
          <div className="c-portfolio-1-item-inner">
            <div className="c-portfolio-1-media">
              <div className="c-portfolio-1-photo">
                <img src={nomination.src} alt={nomination.name[context.props.lang]} />
              </div>
              <div className="c-portfolio-1-caption -style-1 -visible">
                <div className="c-portfolio-1-caption-inner">
                  <h3 className="c-portfolio-1-caption-title">{nomination.name[context.props.lang]}</h3>
                  <div className="c-portfolio-1-caption-tags">
                    <span>{nomination.shortDescription[context.props.lang]}</span>
                  </div>
                </div>
              </div>
              <Link className="c-portfolio-1-link" to={`/nomination/${nomination.suffix}`} />
            </div>
          </div>
        </div>
      )
    })
  )

  return nominations.length !== 0 ? (
    <div id="nominations" className="c-section -space-large">
      <div className="c-container">
        {/* Heading */}
        <Heading sup={SUP} head={HEAD} lead={LEAD} />
        {/* Heading End */}
        {/* Space */}
        <div className="u-space-100 u-space-120@xl" />
        {/* Space End */}
        {/* Portfolio */}
        <div className="c-portfolio-1 -js-popup -js-isotope" data-cursor-portfolio-layout="masonry">
          <div className="c-portfolio-1-inner row -gutter-none" style={{position: 'relative', height: 1380}}>
            {renderNominations()}
          </div>
          {/* Portfolio Inner End */}
        </div>
        {/* Portfolio End */}
      </div>
    </div>
  ) : null;
}

export default nominations;
