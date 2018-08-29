import React from 'react';

import { cartCase, cartPrice, numberWithSpaces } from '/client/libs/cartRelated'

const orderingDetails = ({context, books}) => {
  let discountPrice = 0
  let totalPrice = 0

  books.forEach(book => {
    let cartBook = context.props.cart.find(cart => cart.bookId === book._id)
    if(cartBook){
      let amount = cartBook.amount + cartBook.forOrder
      totalPrice += book.price * amount
      discountPrice += (book.price * parseInt(book.discount.value) / 100) * amount
    }
  })

  return (
    <div className="ordering clearfix">
      <div>
        <div style={{fontSize: '14px !important'}}>
          {`В корзине ${context.props.cart.length} ${cartCase(context.props.cart.length)} на сумму ${numberWithSpaces(totalPrice)} тг. `}
          <span>
            <a
              data-toggle="modal"
              data-target="#cart-clear-modal"
              style={{fontWeight: 700, color: '#929292', textDecoration: 'underline'}}
              className="smk-shopping-cart-del-all-items">Очистить корзину</a></span>
        </div>
        <div style={{marginLeft: '5%'}}>
          <div style={{fontSize: 22, fontWeight: 600}}>
            <span style={{color: '#929292', whiteSpace: 'nowrap'}}>Скидка: {numberWithSpaces(discountPrice)} тг.</span>
          </div>
          <div>
            <span style={{fontSize: 22, fontWeight: 700, whiteSpace: 'nowrap'}}>Сумма заказа </span>
            <span style={{fontSize: 22, fontWeight: 700}}>(без учета доставки):</span>
            <span style={{fontSize: 22, fontWeight: 700, whiteSpace: 'nowrap'}}> {numberWithSpaces(cartPrice(context.props.cart))} тг.</span>
          </div>
          <div style={{color: '#929292', fontSize: 14, fonrWeight: 600, textAlign: 'right'}}>
            <span>Доставка бесплатно от </span><span style={{whiteSpace: 'nowrap'}}>7000 тг., при расчете стоимости доставки – 0.</span>
          </div>
        </div>
        <div className="ordering__row" style={{marginBottom: 30}}>
          <div className="ordering__promo">
            <label className="ordering__promoName">
              Введите промо-код или номер подарочного сертификата:
              <input type="text" placeholder="Промо-код" className="ordering__promoField form-control d-correct-by-all-input"/>
            </label>
            <input type="button" value="Активировать" className="ordering__promoButton ordering__promoButtonMdn btn btn-primary d-correct-by-all-input"/>
            <input type="button" value="Очистить" className="ordering__promoButton ordering__promoButtonMdn btn btn-primary d-correct-by-all-input"/>
            <div style={{fontFamily: 'Open Sans', fontStyle: 'italic', fontSize: 12, padding: '6px 2px'}}>* промокод можно получить в одной из писем, присылаемых нами по подписке</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default orderingDetails;
