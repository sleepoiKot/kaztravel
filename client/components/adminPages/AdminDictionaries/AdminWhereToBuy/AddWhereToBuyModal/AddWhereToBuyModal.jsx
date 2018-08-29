import React from 'react';

import Input from '/client/components/func/Input'

const addWheretoBuyModal = ({context, ...rest}) => {
  const {
    addWhereToBuyName,
    addWhereToBuyAddress,
    addWhereToBuyOperatingMode,
    addWhereToBuyPhone,
    addWhereToBuyEmail,
    addWhereToBuyImage
  } = context.state

  const allFieldsAreFilledOut = addWhereToBuyName &&
                                addWhereToBuyAddress &&
                                addWhereToBuyOperatingMode &&
                                addWhereToBuyPhone &&
                                addWhereToBuyEmail &&
                                addWhereToBuyImage

  return (
    <div
      {...rest}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addWhereToBuyModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={(e) => {
              e.preventDefault()

              if(allFieldsAreFilledOut){
                context.closeAddWhereToBuyModal.click()
                context.onAddWhereToBuyDictionary()
              } else {
                toastr.warning("Заполните все поля для продолжения")
              }
            }}>
              <div className="modal-header">
                  <h5 className="modal-title" id="addWhereToBuyModalLabel">Добавить место</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addWhereToBuyName"
                    stateName="addWhereToBuyName"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addWhereToBuyName">Наименование магазина</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addWhereToBuyAddress"
                    stateName="addWhereToBuyAddress"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addWhereToBuyAddress">Адрес магазина</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addWhereToBuyYandexMap"
                    stateName="addWhereToBuyYandexMap"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addWhereToBuyYandexMap">Адрес магазина на карте Яндекс</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addWhereToBuyOperatingMode"
                    stateName="addWhereToBuyOperatingMode"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addWhereToBuyOperatingMode">Время работы магазина</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addWhereToBuyPhone"
                    stateName="addWhereToBuyPhone"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addWhereToBuyPhone">Телефон магазина</label>
                </div>
                <div className="md-form mb-3">
                  <Input
                    type="text"
                    context={context}
                    id="addWhereToBuyEmail"
                    stateName="addWhereToBuyEmail"
                    className="form-control form-control-sm"/>
                  <label htmlFor="addWhereToBuyEmail">Email магазина</label>
                </div>
              </div>
              <div className="modal-footer">
                  <button
                    type="button"
                    className="btn-md btn btn-blue-grey"
                    ref={ closeButton => context.closeAddWhereToBuyModal = closeButton }
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

export default addWheretoBuyModal;
