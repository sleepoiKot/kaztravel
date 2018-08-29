import React from 'react';

import Input from '/client/components/func/Input'

const addDiscountModal = ({context, ...rest}) => {
  const { addDiscountLabel, addDiscountValue } = context.state

  return (
    <div
      {...rest}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addDiscountModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={(e) => {
              e.preventDefault()

              if(addDiscountLabel && addDiscountValue){
                context.closeAddDiscountModal.click()
                context.onAddDiscountDictionary()
              } else {
                toastr.warning("Заполните все поля для продолжения")
              }
            }}>
              <div className="modal-header">
                  <h5 className="modal-title" id="addDiscountModalLabel">Добавить скидку</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addDiscountLabel"
                    stateName="addDiscountLabel"
                    placeholder="10%"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addDiscountLabel" className="active">Наименование скидки</label>
                </div>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addDiscountValue"
                    stateName="addDiscountValue"
                    placeholder="10"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addDiscountValue" className="active">Значение скидки</label>
                </div>
              </div>
              <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-md btn btn-blue-grey"
                    ref={ closeButton => context.closeAddDiscountModal = closeButton }
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

export default addDiscountModal;
