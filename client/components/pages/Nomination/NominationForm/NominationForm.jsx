import React from 'react';
import Aux from '/client/hoc/Aux/Aux'

const nominationForm = ({context, form, nomination}) => {
  renderPhotos = () => (
    form.photos.map(photo => {
      Meteor.call('get.link', photo, (err, res) => {
        if(err) {
          toastr.error(err.reason)
        }
        else {
          const img = document.querySelector(`#img-${photo._id}`)
          if(img) img.href = res
        }
      })

      return (
        <div key={photo._id} className="c-gallery-1-item col-md-4">
          <a
            id={`img-${photo._id}`}
            href="#"
            data-lightbox="photos"
            data-title={photo.name}
            className="c-gallery-1-link">
            <img
              src={photo.link}
              alt={photo.name}
              className="c-gallery-1-image" />
          </a>
        </div>
      )
    })
  )

  return nomination && form ? (
    <Aux>
      <div className="c-section -space-large">
        <div className="c-container">
          <p><span className="c-label-1 -style-outline -color-green -corner-circle">{context.props.locStrings.nominationFormNomination}: {nomination.name[context.props.lang]}</span></p>
    			<h1 className="u-text-title">{form.organizationName}</h1>
    			<p className="u-text-lead">{form.organizationFunctions}</p>
          <div className="u-space-100 u-space-120@xl" />
          <div className="row -gutter-medium">
            <div className="col-md-6">
              <div className="row -gutter-medium">
                <div className="col-sm-6">
                  <h5 className="u-text-w400">{context.props.locStrings.nominationFormOwner}</h5>
                  <p className="u-color-grey">{form.organization.label} {form.organizationName}</p>
                </div>
                <div className="col-sm-6">
                  <h5 className="u-text-w400">{context.props.locStrings.nominationFormVotes}</h5>
                  <p className="u-color-grey">0</p>
                </div>
                <div className="col-sm-6">
                  <h5 className="u-text-w400">Services</h5>
                  <p className="u-color-grey">Джип-туры, Плато Ассы</p>
                </div>
                <div className="col-sm-6">
                  <h5 className="u-text-w400">Веб-сайт</h5>
                  <p><a className="u-color-grey" href="https://www.city-tour.kz" target="_blank">https://www.city-tour.kz</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5 className="u-text-w400">Описание</h5>
              <p className="u-color-grey">Отличная возможность полюбоваться красивейшими природными ландшафтами на высокогорном плато Асы - традиционном еще с древних времен месте летнего выпаса скота.</p>
              <p className="u-color-grey">Путешествие на внедорожниках в Национальный природный парк "Алтын-Емель" позволит Вам сделать новые открытия и получить незабываемые впечатления!</p>
            </div>
          </div>
  				<div className="u-space u-space-120@sm"></div>
          <div className="c-gallery-1 -js-popup -js-isotope">
            <div className="c-gallery-1-inner row -gutter-small">
              {renderPhotos()}
            </div>
          </div>
          <div className="u-space-30"></div>
          {form.youtubeLink ?
            <div className="fitvids">
              <iframe src={form.youtubeLink} width={1100} height={619} allowFullScreen />
            </div>
            :
            null
          }
          <div className="u-space-30"></div>
        </div>
      </div>
      <div className="c-section">
  			<div className="c-container -size-full">
  				<nav className="c-pager-1 -style-centered">
  					<ul className="c-pager-1-inner">
  						<li className="c-pager-1-item -prev">
  							<h5 className="c-pager-1-title">ПРЕДЫДУЩИЙ НОМИНАНТ</h5>
  							<a className="c-pager-1-link" href="#">Знакомство с Астаной</a>
  						</li>
  						<li className="c-pager-1-item -next">
  							<h5 className="c-pager-1-title">СЛЕДУЮЩИЙ НОМИНАНТ</h5>
  							<a className="c-pager-1-link" href="#">Оазисы казахских степей</a>
  						</li>
  					</ul>
  				</nav>
  			</div>
  		</div>
    </Aux>
  )
  :
  null
}

export default nominationForm;
