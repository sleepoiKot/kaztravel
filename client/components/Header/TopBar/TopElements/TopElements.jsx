import React from 'react';
import { Link } from 'react-router-dom'

import Input from '/client/components/func/Input'

const topElements = ({context, configs}) => (
  <div className="b-mobile row clearfix">
    <ul className="logo" onClick={() => context.props.history.replace('/')} style={{cursor: 'pointer'}}>
      <li>
        <a href="/" className="header-logo" />
      </li>
    </ul>
    <div
      className={ context.state.toggleFiltersOnMobile ? "b-header__button_mobile b-header__button_mobile--close" : "b-header__button_mobile"}
      onClick={(e) => {
        context.setState({
          toggleFiltersOnMobile: !context.state.toggleFiltersOnMobile
        })}
      }/>
    <div className="b-header__search_mobile" onClick={(e) => {
      context.setState({
        toggleFiltersOnMobile: !context.state.toggleFiltersOnMobile
      })
    }}/>
    <div className="search">
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault()
          context.props.history.replace('/books')
          context.props.onSearch(context.state.searchQuery.trim())
          context.setState({searchQuery: ''})
        }}>
        <div style={{display: 'flex', width: '100%'}}>
          <Input
            type="text"
            id="searchQuery"
            stateName="searchQuery"
            placeholder="Введите название или автора книги"
            context={context}/>
          <button type="submit" className="search__button" />
        </div>
      </form>
    </div>
    <div className="b-dash">
      <div className="profile">
        <div className="figure clearfix">
          <div className="name">
            <a onClick={() => console.log('go to the Доставка и Оплата section')} className="underline">Доставим бесплатно от 7000 тг. </a>
            <br />
            <div className="wordwrap-config">
              {configs ?
                <span>
                  <b>{configs.phone},</b> {configs.operatingMode}
                </span> : null}
            </div>
          </div>
          <div className="avatar__geo">
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="figure clearfix">
          {context.props.authenticated && context.props.user ? (
            <div className="name">
              <Link to="cabinet" className="underline">{context.props.user.profile.name} </Link>
              <br />
              <a onClick={() => Meteor.logout()} style={{color: "#1f1404", fontSize: "12px"}}>Выход</a>
            </div>
          ) : (
            <div className="name">
              <Link to="/login" className="underline">Личный кабинет </Link>
              <br />
              <span>и история заказов</span>
            </div>
          )}
          <span className="avatar__cab" />
        </div>
      </div>
      <div className="profile">
        <div className="figure clearfix">
          <div className="name">
            <Link to="/cart" className="underline">Моя корзина</Link><br />
            <span>Товаров: <span style={{display: 'inline'}}>{context.props.cart.length}</span></span>
          </div>
          <div className="avatar__cart">
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default topElements;
