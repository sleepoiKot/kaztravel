import React from 'react';

const videoModal = ({id}) => (
  <div id={id} className="modal fade" tabIndex={-1} role="dialog" aria-labelledby={id} aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      {/*Content*/}
      <div className="modal-content">
        {/*Body*/}
        <div className="modal-body mb-0 p-0">
          <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com" allowFullScreen data-gtm-yt-inspected-2340190_699="true" id={907703404} />
          </div>
        </div>
        {/*Footer*/}
        <div className="modal-footer justify-content-center video-modal-footer">
          <span className="mr-4">Поделитесь "Название видео" с друзьями!</span>
          <a type="button" className="btn-floating btn-sm btn-fb waves-effect waves-light"><i className="fa fa-facebook" /></a>
          {/*Twitter*/}
          <a type="button" className="btn-floating btn-sm btn-tw waves-effect waves-light"><i className="fa fa-twitter" /></a>
          {/*Google +*/}
          <a type="button" className="btn-floating btn-sm btn-gplus waves-effect waves-light"><i className="fa fa-google-plus" /></a>
          {/*Linkedin*/}
          <a type="button" className="btn-floating btn-sm btn-ins waves-effect waves-light"><i className="fa fa-linkedin" /></a>
          <button type="button" className="btn btn-outline-warning btn-rounded btn-md ml-4 waves-effect waves-light" data-dismiss="modal">Закрыть</button>
        </div>
      </div>
      {/*/.Content*/}
    </div>
  </div>
);

export default videoModal;
