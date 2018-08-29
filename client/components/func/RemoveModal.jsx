import React, { Component } from 'react';

class RemoveModal extends Component {
  render() {
    const { context, titleName, onConfirm, bodyContent, ...rest } = this.props

    return(
      <div
        {...rest}
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="removeModal"
        aria-hidden="true">
        <div className="modal-dialog modal-notify modal-danger" role="document">
          {/*Content*/}
          <div className="modal-content">
            {/*Header*/}
            <div className="modal-header">
              <p className="heading lead">Удалить {titleName}</p>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="white-text">×</span>
              </button>
            </div>
            {/*Body*/}
            <div className="modal-body">
              <div className="text-center">
                <i className="fa fa-close fa-4x mb-3 animated rotateIn" />
                <p>Вы уверены что хотите удалить {bodyContent}?</p>
              </div>
            </div>
            {/*Footer*/}
            <div className="modal-footer justify-content-center">
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
          {/*/.Content*/}
        </div>
      </div>
    );
  }
}

export default RemoveModal;
