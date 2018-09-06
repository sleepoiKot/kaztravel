import React, { Component } from 'react'

import Login from '/client/components/pages/Login/Login'

const defaultState = {
  loginEmail: '',
  loginPassword: ''
}

const emailValidationRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class LoginContainer extends Component {
  state = defaultState

  signIn = (e) => {
    e.preventDefault()

    const allFieldsAreFilledOut = this.state.loginEmail && this.state.loginPassword

    if(!allFieldsAreFilledOut){
      toastr.warning('Заполните все поля для продолжения')
      return
    }

    Meteor.loginWithPassword(
        this.state.loginEmail, this.state.loginPassword
    , (err) => {
        if(err) {
          if(err.reason === 'User not found') {
            toastr.error('Пользователь не найден')
          } else if(err.reason === 'Incorrect password') {
            toastr.error('Неверный пароль')
          } else {
            toastr.error(err.reason, 'Упс... что-то пошло не так')
          }
        } else {
          toastr.success('Добро пожаловать!')
          this.props.history.push('/')
        }
    });
  }

  render() {
    return <Login context={this}/>
  }
}

export default LoginContainer;
