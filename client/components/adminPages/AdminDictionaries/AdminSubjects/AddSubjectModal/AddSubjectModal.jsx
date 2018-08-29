import React from 'react';

import Input from '/client/components/func/Input'

const addSubjectModal = ({context, ...rest}) => {
  const { addSubjectName } = context.state

  return (
    <div
      {...rest}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addSubjectModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={(e) => {
              e.preventDefault()

              if(addSubjectName){
                context.closeAddSubjectModal.click()
                context.onAddSubjectDictionary()
              } else {
                toastr.warning("Заполните все поля для продолжения")
              }
            }}>
              <div className="modal-header">
                  <h5 className="modal-title" id="addSubjectModalLabel">Добавить тематику</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addSubjectName"
                    stateName="addSubjectName"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addSubjectName">Название тематики</label>
                </div>
              </div>
              <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-md btn btn-blue-grey"
                    ref={ closeButton => context.closeAddSubjectModal = closeButton }
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

export default addSubjectModal;
