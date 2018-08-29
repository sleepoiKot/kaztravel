import React from 'react';

const emailValidationRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

import Input from '/client/components/func/Input'

const subscribeDispatcher = ({context}) => (
  <div className="news b-grid b-mail">
    <div className="b-mail row">
      <h5>Свежие новости и кибер-скидки</h5>
      <p>{`Подпишись на рассылку, следи за новостями и предложениями,
        которые мы подготовили специально для тебя!`}</p>
      <div className="b-grid">
        <div className="b-block sockane">
          <img src="/img/blocks/l-site-pngs/8.png" />
        </div>
        <div className="b-block sockane">
          <img src="/img/blocks/l-site-pngs/6-mail.png" />
        </div>
        <div className="b-block sockane">
          <img src="/img/blocks/l-site-pngs/38.png" />
        </div>
      </div>
      <form
        action="#"
        onSubmit={ (e) => {
          e.preventDefault()

          if(!context.state.dispatchEmailHome) {
            toastr.warning("Заполните поле для получения рассылок")
            return
          }

          let emailValidation = emailValidationRegEx.test(String(context.state.dispatchEmailHome).toLowerCase())
          if(!emailValidation) {
            toastr.error("Неверный формат email")
            return
          }

          context.getOnDispathEmail()
        }}>
          <div className="dn-form forms">
            <label>Электронная почта</label>
            <Input
              type="text"
              context={context}
              className="jsd-dnip-email-tb"
              id="dispatchEmailHome"
              stateName="dispatchEmailHome"
              placeholder="Введите e-mail"/>
            <button type="submit" className="small jsd-dnip-email-btn btn">Подписаться</button>
          </div>
        </form>
    </div>
  </div>
);

export default subscribeDispatcher;
