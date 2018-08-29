import React from 'react';
import { Link } from 'react-router-dom'

const contacts = ({contacts}) => (
  <div className="dn-b-specialForms" style={{width: 1200}}>
    <h1>Где купить книги Books4kids | Контакты</h1>
    <h3><strong><span style={{lineHeight: '44.8px'}}>Интернет-магазин</span></strong></h3>
    <p>
      <Link to="/"><u>www.books4kids.kz</u></Link><br/>
      {contacts ? contacts.phone : null}<br/>
      {contacts ? contacts.operatingMode : null}<br />
      <a href={`mailto:${contacts ? contacts.email : null}`}>{contacts ? contacts.email : null}</a><br />
      Все акции интернет-магазина <u><Link to="/discount">здесь</Link></u><br/>
    </p>
    <h3><strong><span style={{lineHeight: '44.8px'}}>Фирменный магазин в Астане, ТЦ ЦДМ</span></strong></h3>
    <p>Москва, Театральный пр-д., д. 5/1, 3 этаж, магазин 3-16а. <u><a href="https://yandex.kz/maps/163/astana/?ll=71.440963%2C51.162258&z=15&mode=whatshere&whatshere%5Bpoint%5D=71.429977%2C51.164430&whatshere%5Bzoom%5D=15" target="_blank">Посмотреть этот адрес на карте</a></u>
      Ежедневно с 10.00 до 22.00<br />
      Телефон: +7&nbsp;495&nbsp;744 03 91 (доб. 1001)<br />
      <br />
      <a href="mailto:cdm_retail@clever-media.ru">retail@clever-media.ru</a><br />
      <br />
      <img alt="1_cdm.jpg" src="/getattachment/Pages/Контакты/1_cdm.jpg.aspx" style={{width: 600, height: 450}} title="1_cdm.jpg" />
    </p>
  </div>
);

export default contacts;
