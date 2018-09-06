import React from 'react';

import Input from '/client/components/func/Input'

const addNominationModal = ({context, ...rest}) => {
  const {
    addNominationName
  } = context.state

  const allFieldsAreFilledOut = addNominationName

  return (
    <div
      {...rest}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addNominationModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={(e) => {
              e.preventDefault()

              if(allFieldsAreFilledOut){
                context.closeAddNominationModal.click()
                context.onAddNomination()
              } else {
                toastr.warning("Заполните все поля для продолжения")
              }
            }}>
              <div className="modal-header">
                  <h5 className="modal-title" id="addNominationModalLabel">Добавить номинацию</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addNominationName"
                    stateName="addNominationName"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addNominationName">Наименование номинации *</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addNominationShortDescription"
                    stateName="addNominationShortDescription"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addNominationShortDescription">Краткое описание номинации</label>
                </div>
              </div>
              <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-md btn btn-blue-grey"
                    ref={ closeButton => context.closeAddNominationModal = closeButton }
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
}

export default addNominationModal;
