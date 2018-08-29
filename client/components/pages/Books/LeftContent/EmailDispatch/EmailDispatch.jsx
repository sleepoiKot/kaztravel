import React from 'react';

import Input from '/client/components/func/Input'

const emailValidationRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailDispatch = ({context}) => (
  <div className="email">
    <h4 style={{color: '#ff5500'}}>
      <br />
      СВЕЖИЕ НОВОСТИ
      <br />
      АКЦИИ И СКИДКИ
    </h4>
    <p style={{paddingRight: 0}}>
      Подпишись на рассылку, следи
      <br />
      за новостями и предложениями,
      <br />
      которые мы подготовили
      <br />
      специально для тебя!
    </p>
    <form
      action="#"
      onSubmit={ (e) => {
        e.preventDefault()

        if(!context.state.dispatchEmail) {
          toastr.warning("Заполните поле для получения рассылок")
          return
        }

        let emailValidation = emailValidationRegEx.test(String(context.state.dispatchEmail).toLowerCase())
        if(!emailValidation) {
          toastr.error("Неверный формат email")
          return
        }

        context.saveDispathEmail()
      }}>
      <div className="dn-form">
        <Input
          type="text"
          context={context}
          id="dispatchEmail"
          stateName="dispatchEmail"
          placeholder="Введите e-mail"/>
        <button type="submit">Подписаться</button>
      </div>
    </form>
  </div>
);

export default emailDispatch;
