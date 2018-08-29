import React from 'react';
import { Link } from 'react-router-dom'

const cartClearModal = ({onConfirm, ...rest}) => (
  <div
    {...rest}
    className="modal fade"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="cartClearModal"
    aria-hidden="true">
    <div className="modal-dialog modal-danger modal-notify" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" {...rest} style={{color: '#fff'}}>Очистка корзины</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style={{color: '#fff'}}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <i className="fa fa-close fa-4x mb-3 animated rotateIn" />
            <p>Вы уверены что хотите очистить корзину?</p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            onClick={() => {
              onConfirm()
              this.closeModal.click()
            }}
            type="button"
            className="btn btn-danger">Подтвердить</a>
          <a
            ref={ closeButton => this.closeModal = closeButton}
            type="button"
            className="btn btn-outline-danger waves-effect"
            data-dismiss="modal">Отменить</a>
        </div>
      </div>
    </div>
  </div>
);

export default cartClearModal;
