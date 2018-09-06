import React from 'react';
import { Link } from 'react-router-dom'

const nominations = ({context, nominations}) => {
  let event = nominations.find( nom => nom.suffix === 'event')
  let company = nominations.find( nom => nom.suffix === 'company')
  let product = nominations.find( nom => nom.suffix === 'product')
  let guide = nominations.find( nom => nom.suffix === 'guide')
  let hotel = nominations.find( nom => nom.suffix === 'hotel')
  let youth = nominations.find( nom => nom.suffix === 'youth')
  let culture = nominations.find( nom => nom.suffix === 'culture')
  let web = nominations.find( nom => nom.suffix === 'web')
  let journalist = nominations.find( nom => nom.suffix === 'journalist')
  let media = nominations.find( nom => nom.suffix === 'media')
  let guidebook = nominations.find( nom => nom.suffix === 'guidebook')
  let info = nominations.find( nom => nom.suffix === 'info')
  let route = nominations.find( nom => nom.suffix === 'route')

  return nominations.length !== 0 ? (
    <div id="nominations" className="c-section -space-large">
      <div className="c-container">
        {/* Heading */}
        <h6 className="u-text-sup">KAZAKH TOURISM</h6>
        <h1 className="u-text-hero">Номинации</h1>
        <p className="u-text-lead">География проведения конкурса – Республика Казахстан</p>
        {/* Heading End */}
        {/* Space */}
        <div className="u-space-100 u-space-120@xl" />
        {/* Space End */}
        {/* Portfolio */}
        <div className="c-portfolio-1 -js-popup -js-isotope" data-cursor-portfolio-layout="masonry">
          {/* Portfolio Inner */}
          <div className="c-portfolio-1-inner row -gutter-none" style={{position: 'relative', height: 1380}}>
            {/* Portfolio Size */}
            <div className="c-portfolio-1-size col-md-6 col-lg-4 col-xl-3" />
            {/* Portfolio Size End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 illustration graphic" style={{position: 'absolute', left: '0%', top: 0}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-1-500x500.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{event.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{event.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${event.suffix}`} />
                  {/* <a class="c-portfolio-1-zoom -visible-hover" href="assets/img/portfolio-1-1000x1000.jpg" title="Project Name"><i class="fa fa-arrows-alt" aria-hidden="true"></i></a> */}
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 graphic art" style={{position: 'absolute', left: '25%', top: 0}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-13-500x1000.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{company.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{company.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${company.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 art logo" style={{position: 'absolute', left: '50%', top: 0}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-4-500x500.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{product.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{product.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${product.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 logo corporate" style={{position: 'absolute', left: '75%', top: 0}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-5-500x1000.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{guide.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{guide.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${guide.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 corporate illustration" style={{position: 'absolute', left: '0%', top: 276}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-11-500x1000.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{hotel.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{hotel.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${hotel.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 illustration graphic" style={{position: 'absolute', left: '50%', top: 276}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-7-500x1000.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{culture.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{culture.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${culture.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 graphic art" style={{position: 'absolute', left: '25%', top: 552}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-3-500x500.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{youth.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{youth.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${youth.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 art logo" style={{position: 'absolute', left: '75%', top: 552}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-6-500x500.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{web.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{web.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${web.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 logo corporate" style={{position: 'absolute', left: '0%', top: 828}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-14-500x500.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{journalist.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{journalist.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${journalist.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 corporate illustration" style={{position: 'absolute', left: '25%', top: 828}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-8-500x500.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{media.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{media.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${media.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 illustration graphic" style={{position: 'absolute', left: '50%', top: 828}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-9-500x500.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{guidebook.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{guidebook.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${guidebook.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 illustration graphic" style={{position: 'absolute', left: '75%', top: 828}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-10-500x500.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{info.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{info.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${info.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="c-portfolio-1-item col-md-6 col-lg-4 col-xl-3 illustration graphic" style={{position: 'absolute', left: '0%', top: 1104}}>
              <div className="c-portfolio-1-item-inner">
                <div className="c-portfolio-1-media">
                  <div className="c-portfolio-1-photo">
                    <img src="assets/img/portfolio-10-500x500.jpg" alt="Project Name" />
                  </div>
                  <div className="c-portfolio-1-caption -style-1 -visible">
                    <div className="c-portfolio-1-caption-inner">
                      <h3 className="c-portfolio-1-caption-title">{route.name[context.props.lang]}</h3>
                      <div className="c-portfolio-1-caption-tags">
                        <span>{route.shortDescription}</span>
                      </div>
                    </div>
                  </div>
                  <Link className="c-portfolio-1-link" to={`/nomination/${route.suffix}`} />
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
          </div>
          {/* Portfolio Inner End */}
        </div>
        {/* Portfolio End */}
      </div>
    </div>
  ) : null;
}

export default nominations;
