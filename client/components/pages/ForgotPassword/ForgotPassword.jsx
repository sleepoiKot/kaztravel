import React from 'react';

const forgotPassword = (props) => (
  <div className="login row clearfix tabs seria jsd-forgot-pwd-div-out">
      <h1>Что делать, если вы забыли свой пароль:</h1>
      <div className="forget">
          <p>
              В форму ниже введите электронный адрес, указанный при регистрации,
              и через несколько минут на ваш e-mail придет письмо с паролем!
          </p>
          <div className="dn-form clearfix">
              <input name="forgotPassword" type="text" className="form-control" placeholder="Введите e-mail" />
              <button onClick={() => console.log('send email to reset password')} className="jsd-forgot-pwd-btn btn">Отправить пароль</button>
              <div style={{pading: "2px 8px"}}>
                  <span className="form-control-error" style={{ fontSize: "14px", color: "#b00", visibility: "hidden"}}>Please enter a user name or email</span>
              </div>
          </div>
      </div>
  </div>
);

export default forgotPassword;
