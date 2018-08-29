import React from 'react';

import SignInForm from './SignInForm/SignInForm'
import SignUpForm from './SignUpForm/SignUpForm'

import LoginRadioButton from '/client/components/func/LoginRadioButton'

const login = ({context}) => (
  <div>
    <div className="login row clearfix tabs seria">
      <h1>Войти на сайт</h1>
      <div className="tabs">
        <LoginRadioButton
          context={context}
          value="tab1"
          name="registration form"
          id="tab1"
          stateName="signUp"/>
        <label htmlFor="tab1" title="Вкладка 1">Зарегистрироваться</label>
        <LoginRadioButton
          context={context}
          value="tab2"
          name="login form"
          id="tab2"
          stateName="signIn"/>
        <label htmlFor="tab2" title="Вкладка 2">Войти в личный кабинет</label>
        <hr />
        <SignInForm context={context}/>
        <SignUpForm context={context}/>
      </div>
    </div>
  </div>
);

export default login;
