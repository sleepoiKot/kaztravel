import React from 'react';
import { Link } from 'react-router-dom'

const footer = ({contacts}) => (
  <footer className="c-footer-1 -bg-white">
    <div className="c-container">
      <div className="c-footer-1-top">
        <div className="c-footer-1-about">
          {/* <p><img src="assets/img/logo-dark.png" width="140" alt="Cursor"></p> */}
          <h1 className="u-text-hero u-text-pacifico">National Tourism Awards</h1>
          <p>Открытый конкурс на соискание Национальной премии в области туризма,<br /> как инструмента по выявлению наиболее успешных проектов в области туризма</p>
        </div>
        <nav className="c-footer-1-nav">
          <h6 className="c-footer-1-nav-title">Навигация</h6>
          <ul>
            <li className="c-footer-1-nav-item"><Link className="c-footer-1-nav-link" to="/">Главная</Link></li>
            <li className="c-footer-1-nav-item"><a className="c-footer-1-nav-link" href="#nominations">Номинации</a></li>
            <li className="c-footer-1-nav-item"><a className="c-footer-1-nav-link" href="#voting">Голосование</a></li>
            <li className="c-footer-1-nav-item"><a className="c-footer-1-nav-link" href="#">Открытие</a></li>
          </ul>
        </nav>
        <nav className="c-footer-1-nav">
          <h6 className="c-footer-1-nav-title">Мероприятия</h6>
          <ul>
            <li className="c-footer-1-nav-item"><a className="c-footer-1-nav-link" href="#">Открытие</a></li>
            <li className="c-footer-1-nav-item"><a className="c-footer-1-nav-link" href="#">Закрытие</a></li>
            <li className="c-footer-1-nav-item"><a className="c-footer-1-nav-link" href="#">Вручение</a></li>
          </ul>
        </nav>
      </div>
      <div className="c-footer-1-bottom">
        <div className="c-footer-1-copyright">
          <p>© 2018 Kazakh Tourism — All Rights Reserved.</p>
        </div>
        <div className="c-footer-1-social">
          <div className="c-social-1 -color-dark-simple -hover-mixed-default -corner-circle -size-small">
            <ul className="c-social-1-inner">
              <li className="c-social-1-item"><a className="c-social-1-link -icon-facebook" href="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li className="c-social-1-item"><a className="c-social-1-link -icon-twitter" href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li className="c-social-1-item"><a className="c-social-1-link -icon-linkedin" href="#" target="_blank"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
              <li className="c-social-1-item"><a className="c-social-1-link -icon-google-plus" href="#" target="_blank"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
