import React from 'react';
import { NavLink } from 'react-router-dom'

const adminSideBar = ({context}) => (
  <div className="sidebar-fixed position-fixed" style={{overflowY: 'scroll', top: 0, bottom: 0}}>
    <a className="logo-wrapper waves-effect">
      <img src="/img/admin/baiterek.png" className="img-fluid" />
    </a>
    <div className="list-group list-group-flush">
      <NavLink
        exact
        to="/admin"
        activeClassName="list-group-item active waves-effect"
        className="list-group-item list-group-item-action waves-effect">
        <i className="fa fa-pie-chart mr-3" />{context.props.locStrings.navForms}</NavLink>
      <NavLink
        to="/admin/nominations"
        activeClassName="list-group-item active waves-effect"
        className="list-group-item list-group-item-action waves-effect">
        <i className="fa fa-book mr-3" />{context.props.locStrings.navNominations}</NavLink>
      {/* <NavLink
        to="/admin/users"
        activeClassName="list-group-item active waves-effect"
        className="list-group-item list-group-item-action waves-effect">
        <i className="fa fa-user mr-3" />Пользователи</NavLink>
      <a
        data-toggle="collapse"
        data-parent="#accordionEx"
        href="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        className="list-group-item list-group-item-action waves-effect">
        <i className="fa fa-database mr-3" />Справочники</a>
        <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordionEx">
          <div className="collapseIconItem">
            <a className="list-group-item list-group-item-action waves-effect arrowCollapse"
              href="#collapseOne"><i className="fa fa-chevron-right"></i></a>
            <NavLink
              to="/admin/dictionaries/ages"
              activeClassName="list-group-item active waves-effect"
              className="list-group-item list-group-item-action waves-effect"> Возраст</NavLink>
          </div>
          <div className="collapseIconItem">
            <a className="list-group-item list-group-item-action waves-effect arrowCollapse"
              href="#collapseOne"><i className="fa fa-chevron-right"></i></a>
            <NavLink
              to="/admin/dictionaries/subjects"
              activeClassName="list-group-item active waves-effect"
              className="list-group-item list-group-item-action waves-effect"> Тематика</NavLink>
          </div>
          <div className="collapseIconItem">
            <a className="list-group-item list-group-item-action waves-effect arrowCollapse"
              href="#collapseOne"><i className="fa fa-chevron-right"></i></a>
            <NavLink
              to="/admin/dictionaries/publishingHouses"
              activeClassName="list-group-item active waves-effect"
              className="list-group-item list-group-item-action waves-effect"> Издательства</NavLink>
          </div>
          <div className="collapseIconItem">
            <a className="list-group-item list-group-item-action waves-effect arrowCollapse"
              href="#collapseOne"><i className="fa fa-chevron-right"></i></a>
            <NavLink
              to="/admin/dictionaries/authors"
              activeClassName="list-group-item active waves-effect"
              className="list-group-item list-group-item-action waves-effect"> Авторы</NavLink>
          </div>
          <div className="collapseIconItem">
            <a className="list-group-item list-group-item-action waves-effect arrowCollapse"
              href="#collapseOne"><i className="fa fa-chevron-right"></i></a>
            <NavLink
              to="/admin/dictionaries/dispatches"
              activeClassName="list-group-item active waves-effect"
              className="list-group-item list-group-item-action waves-effect"> Рассылки</NavLink>
          </div>
          <div className="collapseIconItem">
            <a className="list-group-item list-group-item-action waves-effect arrowCollapse"
              href="#collapseOne"><i className="fa fa-chevron-right"></i></a>
            <NavLink
              to="/admin/dictionaries/discounts"
              activeClassName="list-group-item active waves-effect"
              className="list-group-item list-group-item-action waves-effect"> Скидки</NavLink>
          </div>
          <div className="collapseIconItem">
            <a className="list-group-item list-group-item-action waves-effect arrowCollapse"
              href="#collapseOne"><i className="fa fa-chevron-right"></i></a>
            <NavLink
              to="/admin/dictionaries/whereToBuy"
              activeClassName="list-group-item active waves-effect"
              className="list-group-item list-group-item-action waves-effect"> Где купить</NavLink>
          </div>
        </div>
        <NavLink
          to="/admin/configs"
          activeClassName="list-group-item active waves-effect"
          className="list-group-item list-group-item-action waves-effect">
          <i className="fa fa-cogs mr-3" />Конфигурация</NavLink> */}
    </div>
  </div>
);

export default adminSideBar;
