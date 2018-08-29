import React from 'react';
import { Link } from 'react-router-dom'

const cartItemsForOrderModal = ({amount, ...rest}) => (
  <div
    {...rest}
    className="modal fade right"
    tabIndex={-1} role="dialog"
    aria-labelledby="cartItemsForOrderModal"
    data-backdrop="false"
    aria-hidden="true">
    <div className="modal-dialog modal-side modal-top-right modal-warning modal-notify" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" {...rest} style={{color: '#fff'}}>Нет на складе</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style={{color: '#fff'}}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <i className="fa fa-exclamation-triangle fa-4x mb-3 animated rotateIn" />
            <h5><strong>Количество товара превышает количество товара на складе</strong></h5>
            <p>Заказ выше {amount} штук будет оформлятся под заказ, всю информацию Вы найдете в разделе "Доставка и оплата"</p>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn-md btn btn-blue-grey" data-dismiss="modal">Продолжить</button>
          <Link
            to="/dispatchAndPayment"
            type="button"
            className="btn-md btn btn-deep-orange">Просмотреть ифнормацию</Link>
        </div>
      </div>
    </div>
  </div>
);

export default cartItemsForOrderModal;
