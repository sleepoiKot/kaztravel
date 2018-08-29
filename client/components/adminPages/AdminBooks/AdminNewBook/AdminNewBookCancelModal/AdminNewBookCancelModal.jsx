import React from 'react';
import { Link } from 'react-router-dom'

const adminNewBookCancelModal = ({...rest}) => (
  <div
    {...rest}
    className="modal fade right"
    tabIndex={-1} role="dialog"
    aria-labelledby="adminNewBookCancelModal"
    data-backdrop="false"
    aria-hidden="true">
    <div className="modal-dialog modal-side modal-top-right modal-warning modal-notify" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" {...rest}>Отменить изменения</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <i className="fa fa-exclamation-triangle fa-4x mb-3 animated rotateIn" />
            <h3>Вы уверены что хотите отменить?</h3>
            <p>Все несохраненные данные будут потеряны!</p>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn-md btn btn-blue-grey" data-dismiss="modal">Закрыть</button>
          <Link
            to="/admin/books"
            type="button"
            className="btn-md btn btn-deep-orange">Продолжить</Link>
        </div>
      </div>
    </div>
  </div>
);

export default adminNewBookCancelModal;
