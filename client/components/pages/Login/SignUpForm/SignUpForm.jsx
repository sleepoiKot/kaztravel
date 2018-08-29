import React from 'react';

import InputForm from '/client/components/func/InputForm'

const signUpForm = ({context}) => {
  const {
    name,
    email,
    password,
    passwordConfirmation,
    emailValidation,
    passwordValidation,
    passwordValidationMessage,
    agreement
  } = context.state.signUp

  const allFieldsFilledOut = name && email && password && passwordConfirmation && emailValidation && passwordValidation

  return (
    <section id="content1">
       <div className="getin dn-rl-form">
         <div className="col">
           <label htmlFor="txtFirstName">Имя</label>
           <InputForm
             context={context}
             parentState="signUp"
             stateName="name"
             name="Имя"
             type="text"
             className="form-control"
             validation
             placeholder="Ваше имя"/>
         </div>
         <div className="col">
           <label htmlFor="txtEmail">Адрес электронной почты</label>
           <InputForm
             context={context}
             parentState="signUp"
             stateName="email"
             name="email"
             type="text"
             className="form-control"
             validation
             onBlur={() => {
               const emailValidationRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               const state = {
                 ...context.state.signUp,
                 emailValidation: emailValidationRegEx.test(String(email).toLowerCase())
               }
               context.setState({signUp: state})
             }}
             placeholder="Ваш email"/>
             {!emailValidation && email ?
               <div>
                 <span className="error">Неверный формат email</span>
               </div>
               : null
             }
         </div>
         <div className="col">
           <label htmlFor="passStrength">Пароль</label>
           <InputForm
             context={context}
             parentState="signUp"
             stateName="password"
             name="Пароль"
             type="password"
             className="form-control"
             validation
             onBlur={() => context.onCheckPasswordConfirmation()}
             placeholder="Введите пароль"/>
             {!passwordValidation && password ?
               <div>
                 <span className="error">{passwordValidationMessage}</span>
               </div>
               : password ? <div>
                 <span style={{ color: "grey"}} className="error">Введите пароль не менее 6 символов</span>
               </div> : null
             }
         </div>
         <div className="col">
           <label htmlFor="txtConfirmPassword">Подтверждение пароля</label>
           <InputForm
             context={context}
             parentState="signUp"
             stateName="passwordConfirmation"
             name="Подтверждение пароля"
             type="password"
             className="form-control"
             validation
             onBlur={() => context.onCheckPasswordConfirmation()}
             placeholder="Подтвердите пароль"/>
             {!passwordValidation && passwordConfirmation ?
               <div>
                 <span className="error">Пароли не совпадают</span>
               </div>
               : null
             }
         </div>
         <div className="signin">
           <div className="check" style={{width: 'auto', marginBottom: 14}}>
             <div className={context.state.signUp.agreement ? "checkbox jsd-checkbox-apply checked" : "checkbox jsd-checkbox-apply"}
             onClick={() => context.onCheckState('signUp', 'agreement')}/>
             <label style={{lineHeight: 'initial'}}>Нажимая кнопку "Зарегистрироваться", я подтверждаю, что я старше 18 лет, даю согласие на обработку моих персональных данных и принимаю условия Пользовательского соглашения</label>
           </div>
         </div>
         <div className="signin">
           <div className="check" style={{width: 'auto', marginBottom: 14}}>
             <div className={context.state.signUp.getDispatch ? "checkbox jsd-checkbox-apply-subscribe checked" : "checkbox jsd-checkbox-apply-subscribe"}
             onClick={() => context.onCheckState('signUp', 'getDispatch')}/>
             <label style={{lineHeight: 'initial'}}>Я хочу получать рассылки</label>
           </div>
         </div>
         <div style={{textAlign: 'center'}}>
           <button
             type="submit"
             onClick={() => {
               const state = {
                 ...context.state.signUp,
                 submitted: true
               }
               context.setState({ signUp: state }, () => {
                 if(!allFieldsFilledOut){
                   toastr.warning('Заполните необходимые поля для продолжения')
                   return
                 }
                 context.signUpNewUser()
               })
             }}
             disabled={!agreement}
             className="js-popupThanksLink btn btn-default"
             style={{ clear: 'both'}}
             >Регистрация</button>
         </div>
       </div>
     </section>
  );
}

export default signUpForm;
