import React from 'react';
import Select from 'react-select'

import Input from '/client/components/func/Input'

const editAgeModal = ({context, ...rest}) => {
  const {
    editAgeName,
    editAgeRange
  } = context.state

  const allFieldsAreFilledOut = editAgeName && editAgeRange

  return (
    <div
      {...rest}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="editAgeModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={(e) => {
              e.preventDefault()

              if(allFieldsAreFilledOut){
                context.closeEditAgeModal.click()
                context.onEditAgeDictionary()
              } else {
                toastr.warning("Заполните все поля для продолжения")
              }
            }}>
              <div className="modal-header">
                  <h5 className="modal-title" id="editAgeModalLabel">Редактировать возраст</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="editAgeName"
                    stateName="editAgeName"
                    className="form-control form-control-sm"/>
                  <label className={context.state.editAgeName ? "active" : null} htmlFor="editAgeName">Название (прим. 0-3)</label>
                </div>
                <label>Возрастной диапазон</label>
                <div className="md-form">
                  <Select
                    onChange={ values => context.setState({ editAgeRange: values })}
                    placeholder="Выберите возрастной диапазон"
                    value={context.state.editAgeRange}
                    options={context.ageOptions}/>
                </div>
              </div>
              <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-md btn btn-blue-grey"
                    ref={ closeButton => context.closeEditAgeModal = closeButton }
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

export default editAgeModal;
