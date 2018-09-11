import React from 'react';

const voting = ({context}) => (
  <div id="voting" className="c-section -space-large -bg-blue-light">
    <div className="c-container">
      {/* Heading */}
      <h6 className="u-text-sup u-text-center">КОНКУРСНЫЙ ОТБОР</h6>
      <p className="u-text-lead u-text-center">Заявки соискателей на участие принимаются в период <br /> с 20 сентября 2018 года по 20 октября 2018 года</p>
      {/* Heading End */}
      <h2 className="u-text-title u-text-center">до начала конкурсного отбора осталось:</h2>
      {/* Space */}
      <div className="u-space u-space-40@sm" />
      {/* Space End */}
      {/* Countdown */}
      <div className="c-countdown-1 -size-large -js-countdown" data-cursor-countdown="2018/09/20 23:59:59">
        <div className="c-countdown-1-inner row">
          <div className="c-countdown-1-item col-sm-6 col-md-3">
            <div className="c-countdown-1-value value-days">{context.state.days}</div>
            <div className="c-countdown-1-text">ДНЕЙ</div>
          </div>
          <div className="c-countdown-1-item col-sm-6 col-md-3">
            <div className="c-countdown-1-value value-hours">{context.state.hours}</div>
            <div className="c-countdown-1-text">ЧАСОВ</div>
          </div>
          <div className="c-countdown-1-item col-sm-6 col-md-3">
            <div className="c-countdown-1-value value-minutes">{context.state.minutes}</div>
            <div className="c-countdown-1-text">МИНУТ</div>
          </div>
          <div className="c-countdown-1-item col-sm-6 col-md-3">
            <div className="c-countdown-1-value value-seconds">{context.state.seconds}</div>
            <div className="c-countdown-1-text">СЕКУНД</div>
          </div>
        </div>
      </div>
      {/* Countdown End */}
    </div>
    <div className="col-md-12 mt-5">
      <div className="text-center">
        <button
          type="button"
          className="btn btn-outline-default waves-effect fill-form-button"
          onClick={() => context.props.history.push('/form')}><h4>Заполнить анкету на участие</h4></button>
      </div>
    </div>
  </div>
);

export default voting;
