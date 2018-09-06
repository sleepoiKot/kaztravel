import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const adminNavBar = ({context}) => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
    <div className="container-fluid">
      {/* Brand */}
      <a className="navbar-brand waves-effect">
        KAZTRAVEL
      </a>
      {/* Collapse */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      {/* Links */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Left */}
        <ul className="navbar-nav mr-auto">
          <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
            <NavLink exact to="/admin" activeClassName="nav-item active" className="nav-item">
              <label className="nav-link waves-effect">Анкеты</label>
            </NavLink>
          </li>
          <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
            <NavLink to="/admin/nominations" activeClassName="nav-item active" className="nav-item">
              <label className="nav-link waves-effect">Номинации</label>
            </NavLink>
          </li>
          {/* <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
            <NavLink to="/admin/users" activeClassName="nav-item active" className="nav-item">
              <label className="nav-link waves-effect">Пользователи</label>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false">Справочники</a>
              <ul className="dropdown-menu">
                <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
                  <Link className="dropdown-item" to="/admin/dictionaries/ages">Возраст</Link>
                </li>
                <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
                  <Link className="dropdown-item" to="/admin/dictionaries/subjects">Тематика</Link>
                </li>
                <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
                  <Link className="dropdown-item" to="/admin/dictionaries/publishingHouses">Издательства</Link>
                </li>
                <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
                  <Link className="dropdown-item" to="/admin/dictionaries/authors">Авторы</Link>
                </li>
                <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
                  <Link className="dropdown-item" to="/admin/dictionaries/dispatches">Рассылки</Link>
                </li>
                <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
                  <Link className="dropdown-item" to="/admin/dictionaries/discounts">Скидки</Link>
                </li>
                <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
                  <Link className="dropdown-item" to="/admin/dictionaries/whereToBuy">Где купить</Link>
                </li>
              </ul>
          </li>
          <li data-toggle={context.state.collapse ? "collapse" : null} data-target="#navbarSupportedContent">
            <NavLink to="/admin/configs" activeClassName="nav-item active" className="nav-item">
              <label className="nav-link waves-effect">Конфигурация</label>
            </NavLink>
          </li> */}
        </ul>
        {/* Right */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link border border-light rounded waves-effect"
              style={{ color: 'white', backgroundColor: '#007bff' }}>
              <i className="fa fa-home mr-2" />Перейти на сайт
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin"
              className="nav-link border border-light rounded waves-effect"
              onClick={() => Meteor.logout()}>
              <i className="fa fa-sign-out mr-2" />Выйти
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default adminNavBar;
