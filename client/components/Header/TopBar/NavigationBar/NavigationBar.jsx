import React from 'react';
import Scroll, { Element, scroller } from "react-scroll";

const navigationBar = () => (
  <header className="c-header-2 -bg-white -overlap -js-header">
    <div className="c-container">
      <div className="c-header-2-row">
        <nav className="c-header-2-nav">
          <ul>
            <li><a href="#section-home" style={{paddingLeft: 0}}>Главная</a></li>
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
          </ul>
        </nav>
        <div className="c-header-2-toggle">
          <span className="ion-navicon" />
        </div>
      </div>
    </div>
  </header>
)

export default navigationBar;
