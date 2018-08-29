import React from 'react';

import FileUploadContainer from '/client/containers/func/FileUploadContainer'

import Input from '/client/components/func/Input'

const adminConfigurations = ({context}) => (
  <main className="pt-5 mx-lg-5">
    <div className="container-fluid mt-5">
      <div className="card">
        <div className="card-header"><h3><strong>Элементы главной страницы</strong></h3></div>
        <div className="card-body">
          <div className="md-form input-group">
            <i className="fa fa-clock-o prefix" />
            <Input
              type="text"
              context={context}
              id="configOperatingMode"
              stateName="configOperatingMode"
              className="form-control"
              placeholder="Режим работы"/>
            <div className="input-group-btn">
              <button
                onClick={() => {
                  if(!context.state.configOperatingMode || context.state.configOperatingMode && context.state.configOperatingMode.trim() === ''){
                    toastr.warning("Заполните поле!")
                    return
                  }
                  context.onEditOperatingModeConfig()
                }}
                type="button"
                className="btn btn-md btn-outline-warning">Изменить</button>
            </div>
          </div>
          <div style={{paddingLeft: '1rem'}}>
            <FileUploadContainer
              multi
              title="Афиша"
              buttonName="Выберите файлы"
              context={ context }
              stateName='configPosters'
            />
            <div className="d-flex justify-content-center">
              {context.state.configPosters.length !== 0 ? <button
                onClick={() => {
                  if(context.state.configPosters.length === 0){
                    toastr.warning("Загрузите файлы!")
                    return
                  }
                  context.onEditPostersConfig()
                }}
                type="button"
                className="btn btn-md btn-outline-warning">Опубликовать</button> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-5">
      <div className="card">
        <div className="card-header"><h3><strong>Контактные данные</strong></h3></div>
        <div className="card-body">
          <div className="md-form input-group">
            <i className="fa fa-phone-square prefix" />
            <Input
              type="text"
              context={context}
              id="configPhone"
              stateName="configPhone"
              className="form-control"
              placeholder="Телефон"/>
            <div className="input-group-btn">
              <button
                onClick={() => {
                  if(!context.state.configPhone || context.state.configPhone && context.state.configPhone.trim() === ''){
                    toastr.warning("Заполните поле!")
                    return
                  }
                  context.onEditPhoneConfig()
                }}
                type="button"
                className="btn btn-md btn-outline-warning">Изменить</button>
            </div>
          </div>
          <div className="md-form input-group">
            <i className="fas fa-home prefix" />
            <Input
              type="text"
              context={context}
              id="configActualAddress"
              stateName="configActualAddress"
              className="form-control"
              placeholder="Введите фактический адрес"/>
            <div className="input-group-btn">
              <button
                onClick={() => {
                  if(!context.state.configActualAddress || context.state.configActualAddress && context.state.configActualAddress.trim() === ''){
                    toastr.warning("Заполните поле!")
                    return
                  }
                  context.onEditActualAddressConfig()
                }}
                type="button"
                className="btn btn-md btn-outline-warning">Изменить</button>
            </div>
          </div>
          <div className="md-form input-group">
            <i className="fas fa-building prefix" />
            <Input
              type="text"
              context={context}
              id="configLegalAddress"
              stateName="configLegalAddress"
              className="form-control"
              placeholder="Введите юридический адрес"/>
            <div className="input-group-btn">
              <button
                onClick={() => {
                  if(!context.state.configLegalAddress || context.state.configLegalAddress && context.state.configLegalAddress.trim() === ''){
                    toastr.warning("Заполните поле!")
                    return
                  }
                  context.onEditLegalAddressConfig()
                }}
                type="button"
                className="btn btn-md btn-outline-warning">Изменить</button>
            </div>
          </div>
          <div className="md-form input-group">
            <i className="fas fa-envelope prefix" />
            <Input
              type="text"
              context={context}
              id="configEmail"
              stateName="configEmail"
              className="form-control"
              placeholder="Введите электронный адерс"/>
            <div className="input-group-btn">
              <button
                onClick={() => {
                  if(!context.state.configEmail || context.state.configEmail && context.state.configEmail.trim() === ''){
                    toastr.warning("Заполните поле!")
                    return
                  }
                  context.onEditEmailConfig()
                }}
                type="button"
                className="btn btn-md btn-outline-warning">Изменить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default adminConfigurations;
