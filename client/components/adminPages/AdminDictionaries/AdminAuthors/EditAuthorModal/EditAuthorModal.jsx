import React from 'react';

import Input from '/client/components/func/Input'

const editAuthorModal = ({context, ...rest}) => (
  <div
    {...rest}
    className="modal fade"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="editAuthorModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form onSubmit={(e) => {
            e.preventDefault()

            context.closeEditAuthorModal.click()
            context.onEditAuthorDictionary()
          }}>
            <div className="modal-header">
                <h5 className="modal-title" id="editAgeModalLabel">Редактировать автора</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form">
                <Input
                  disabled
                  type="text"
                  context={context}
                  id="editAuthorName"
                  stateName="editAuthorName"
                  className="form-control form-control-sm"/>
                <label className={context.state.editAuthorName ? "active" : null} htmlFor="editAuthorName">Имя автора</label>
              </div>
              <div className="md-form">
                <div className="form-group">
                  <label htmlFor="editAuthorDescription">Про автора</label>
                  <textarea
                    onChange={(e) => context.setState({editAuthorDescription: e.currentTarget.value})}
                    className="md-textarea form-control"
                    id="editAuthorDescription"
                    rows="3"
                    defaultValue={context.state.editAuthorDescription} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
                <button
                  type="button"
                  className="btn-md btn btn-blue-grey"
                  ref={ closeButton => context.closeEditAuthorModal = closeButton }
                  data-dismiss="modal">Закрыть</button>
                <button
                  type="submit"
                  className="btn-md btn btn-deep-orange">Сохранить</button>
            </div>
          </form>
        </div>
    </div>
  </div>
);

export default editAuthorModal;
