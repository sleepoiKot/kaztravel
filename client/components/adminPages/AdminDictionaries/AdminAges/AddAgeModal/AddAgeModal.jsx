import React from 'react';
import Select from 'react-select'

import Input from '/client/components/func/Input'

const addAgeModal = ({context, ...rest}) => {
  const {
    addAgeName,
    addAgeRange
  } = context.state

  const allFieldsAreFilledOut = addAgeName && addAgeRange

  return (
    <div
      {...rest}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addAgeModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={(e) => {
              e.preventDefault()

              if(allFieldsAreFilledOut){
                context.closeAddAgeModal.click()
                context.onAddAgeDictionary()
              } else {
                toastr.warning("Заполните все поля для продолжения")
              }
            }}>
              <div className="modal-header">
                  <h5 className="modal-title" id="addAgeModalLabel">Добавить возраст</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addAgeName"
                    stateName="addAgeName"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addAgeName">Название (прим. 0-3)</label>
                </div>
                <label>Возрастной диапазон</label>
                <div className="md-form">
                  <Select
                    value={context.state.addAgeRange}
                    onChange={values => context.setState({ addAgeRange: values })}
                    placeholder="Выберите возрастной диапазон"
                    options={context.ageOptions}/>
                </div>
              </div>
              <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-md btn btn-blue-grey"
                    ref={ closeButton => context.closeAddAgeModal = closeButton }
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

export default addAgeModal;
