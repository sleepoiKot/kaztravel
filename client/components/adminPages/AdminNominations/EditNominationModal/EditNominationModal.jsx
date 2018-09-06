import React from 'react';

import Input from '/client/components/func/Input'

const editNominationModal = ({context, ...rest}) => {
  const {
    editNominationName
  } = context.state

  const allFieldsAreFilledOut = editNominationName

  return (
    <div
      {...rest}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="editNominationModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={(e) => {
              e.preventDefault()

              if(allFieldsAreFilledOut){
                context.closeEditNominationModal.click()
                context.onEditNomination()
              } else {
                toastr.warning("Заполните все поля для продолжения")
              }
            }}>
              <div className="modal-header">
                  <h5 className="modal-title" id="editNominationModalLabel">Редактировать номинацию</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="editNominationName"
                    stateName="editNominationName"
                    className="form-control form-control-sm"/>
                  <label className={context.state.editNominationName ? "active" : null} htmlFor="editNominationName">Наименование номинации *</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="editNominationShortDescription"
                    stateName="editNominationShortDescription"
                    className="form-control form-control-sm"/>
                  <label className={context.state.editNominationShortDescription ? "active" : null} htmlFor="editNominationShortDescription">Краткое описание номинации</label>
                </div>
              </div>
              <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-md btn btn-outline-primary waves-effect"
                    ref={ closeButton => context.closeEditNominationModal = closeButton }
                    data-dismiss="modal">Закрыть</button>
                  <button
                    type="submit"
                    className="btn-md btn btn-primary">Сохранить</button>
              </div>
            </form>
          </div>
      </div>
  </div>
  );
}

export default editNominationModal;
