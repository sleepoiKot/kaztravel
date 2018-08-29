import React from 'react';
import { Link } from 'react-router-dom'

import InputForm from '/client/components/func/InputForm'

const signInForm = ({context}) => {
  const {
    email,
    password,
    emailValidation
  } = context.state.signIn

  const allFieldsFilledOut = email && password && emailValidation

  return (
    <section id="content2">
     <div className="getin dn-rl-form">
       <form
         action="#"
         onSubmit={(e) => {
           e.preventDefault()

           const state = {
             ...context.state.signIn,
             submitted: true
           }
           context.setState({ signIn: state }, () => {
             if(!allFieldsFilledOut){
               toastr.warning('Заполните необходимые поля для продолжения')
               return
             }
             context.signIn()
           })
         }}>
         <div className="col">
           <label htmlFor="UserName">Адрес электронной почты</label>
           <InputForm
             context={context}
             parentState="signIn"
             stateName="email"
             name="email"
             type="text"
             className="form-control"
             onBlur={() => {
               const emailValidationRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               const state = {
                 ...context.state.signIn,
                 emailValidation: emailValidationRegEx.test(String(email).toLowerCase())
               }
               context.setState({signIn: state})
             }}
             validation
             placeholder="Ваш e-mail"/>
             {!emailValidation && email ?
               <div>
                 <span className="error">Неверный формат email</span>
               </div>
               : null
             }
         </div>
         <div className="col">
           <label htmlFor="Password">Пароль</label>
           <InputForm
             context={context}
             parentState="signIn"
             stateName="password"
             name="Пароль"
             type="password"
             className="form-control"
             validation
             placeholder="Введите пароль"/>
           <div />
         </div>
         <div className="signin" style={{marginBottom: 20}}>
           <button
             style={{ display: 'inline-block'}}
             type="submit"
             className="small jsd-btn-login-button btn btn-default">Войти</button>
           <span><Link to="/forgotPassword" style={{color: '#727272', fontSize: 12}}>Забыли пароль?</Link></span>
         </div>
       </form>
     </div>
   </section>
  );
}

export default signInForm;
