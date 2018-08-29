import React from 'react';
import { Link } from 'react-router-dom'

const footer = ({contacts}) => (
  <footer className="main-footer">
  <div className="row clearfix">
    <div className="colonk">
      <ul className="footer-nav">
        <li>Издательство</li>
        <li><a href="/izdatelstvo/">О нас</a></li>
        <li><a href="/team/">Команда</a></li>
        <li><a href="/blog/">Статьи</a></li>
        <li><a href="/partner">Сотрудничество</a></li>
        <li><a href="/rabota">Вакансии</a></li>
      </ul>
    </div>
    <div className="colonk">
      <ul className="footer-nav">
        <li>Интернет-магазин</li>
        <li><Link to="/books">Каталог</Link></li>
        <li><Link to="/cabinet">Личный кабинет</Link></li>
        <li><a href="/smallbusiness/" target="_blank">Оптовые продажи и ИП</a></li>
      </ul>
    </div>
    <div className="colonk">
      <ul className="footer-nav">
        <li>Помощь</li>
        <li><a href="/support/">Доставка и оплата</a></li>
        <li><a href="/faq">Ответы на вопросы</a></li>
        <li><a href="/terms-of-use">Условия продажи</a></li>
      </ul>
    </div>
    <div className="colonk">
      <ul className="footer-nav">
        <li>Спецпроекты</li>
        <li><a href="/cleverskidki">Акции</a></li>
        <li><a href="/lp/clevergame/">Настольные игры</a></li>
        <li><a href="">Коллекции</a></li>
      </ul>
    </div>
    <div className="colonk">
      <ul className="footer-nav">
        <li>Наши контакты</li>
        <li><Link to="/contacts">Контакты</Link></li>
        <li><a href="/contacts/#cdm">Где купить</a></li>
        <li><a href="/property">Реквизиты</a></li>
        <li><span>Телефон: <b>{contacts ? contacts.phone : null}</b></span></li>
        <li><span>E-mail: <a href={`mailto:${contacts ? contacts.email : null}`}><b>{contacts ? contacts.email : null}</b></a></span></li>
      </ul>
    </div>
    <div className="col-8 footer-social">
      <div className="social-icon">
        <a href="" target="_blank" className="ok" />
        <a href="" target="_blank" className="facebook" style={{marginLeft: 27}} />
        <a href="" target="_blank" className="vkontakte" />
        <a href="" target="_blank" className="youtube" />
        <a href="" target="_blank" className="instagram" />
      </div>
    </div>
    <address>© 2018 Издательство Books4Kids.
      <br />
      Все права защищены.</address>
    <div className="klevik" />
  </div>
</footer>
);

export default footer;
