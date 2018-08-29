import React from 'react';
import { Link } from 'react-router-dom'

const navigationItems = ({context}) => {
  const { locStrings } = context.props

  return (
    <nav className="main-nav" style={{minWidth: 'initial'}}>
      <div className="row clearfix" style={{minWidth: 'initial'}}>
        <ul className="menu">
          <li>
            <Link to="/books">Каталог книг</Link>
          </li>
          <li>
            <a href="/cleverskidki/">Акции</a>
          </li>
          <li>
            <a href="/support/">Доставка и оплата</a>
          </li>
          <li>
            <Link to="/contacts">Контакты | Где купить</Link>
          </li>
          <li>
            <a href="/izdatelstvo/">О нас</a>
          </li>
          <li>
            <a href="/blog/">Книжный клуб</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default navigationItems;
