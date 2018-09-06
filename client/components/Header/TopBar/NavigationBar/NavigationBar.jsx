import React from 'react';
import { Link } from 'react-router-dom'
import Scroll, { Element, scroller } from "react-scroll";

const navigationBar = () => (
  <header className="c-header-2 -bg-white -overlap -js-header">
    <div className="c-container">
      <div className="c-header-2-row">
        {Meteor.userId() ?
          <nav className="c-header-2-nav">
            <ul>
              <li><Link to="/" style={{paddingLeft: 0}}>Главная</Link></li>
              <li><a href="#nominations" onClick={() => {
                scroller.scrollTo('nominations', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart'
                })
              }}>Номинации</a></li>
              <li><a href="#voting" onClick={() => {
                scroller.scrollTo('voting', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart'
                })
              }}>Голосование</a></li>
              <li><a href="#" onClick={() => {
                Meteor.logout()
                setTimeout(() => {$('#preloader').fadeOut('slow')}, 500)
              }}>Выход</a></li>
            </ul>
          </nav>
          :
          <nav className="c-header-2-nav">
            <ul>
              <li><Link to="/" style={{paddingLeft: 0}}>Главная</Link></li>
              <li><a href="#nominations" onClick={() => {
                scroller.scrollTo('nominations', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart'
                })
              }}>Номинации</a></li>
              <li><a href="#voting" onClick={() => {
                scroller.scrollTo('voting', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart'
                })
              }}>Голосование</a></li>
              <li><Link to="/signup">Регистрация</Link></li>
              <li><Link to="/login">Вход</Link></li>
            </ul>
          </nav>
        }

        <div className="c-header-2-toggle">
          <span className="ion-navicon" />
        </div>
      </div>
    </div>
  </header>
)

export default navigationBar;
