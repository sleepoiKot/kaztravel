import React, { Component } from 'react'

import Login from '/client/components/pages/Login/Login'

const defaultState = {
  signIn: {
    email: '',
    password: '',
    rememberMe: false,

    checked: true,
    submitted: false,
    emailValidation: true
  },
  signUp: {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    agreement: true,
    getDispatch: false,

    checked: false,
    submitted: false,
    emailValidation: true,
    passwordValidation: true,
    passwordValidationMessage: ''
  }
}

class LoginContainer extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
  }

  onCheckPasswordConfirmation() {
    const {passwordConfirmation, password} = this.state.signUp

    let passwordValidation = true
    let passwordValidationMessage = ''

    if(passwordConfirmation && password !== passwordConfirmation){
      passwordValidation = false
      passwordValidationMessage = 'Пароли не совпадают'
    }

    if(password.length < 6) {
      passwordValidation = false
      passwordValidationMessage = 'Ваш пароль менее 6 символов'
    }

    const state = {
      ...this.state.signUp,
      passwordValidation,
      passwordValidationMessage
    }
    this.setState({signUp: state})
  }

  onCheckState = (parentState, state) => {
    const newState = {
      ...this.state[parentState],
      [state]: !this.state[parentState][state]
    }
    this.setState({ [parentState]: newState })
  }

  signIn = () => {
    const { email, password, rememberMe } = this.state.signIn

    Meteor.loginWithPassword(
        email, password
    , (err) => {
        if(err) {
          if(err.reason === "User not found"){
            toastr.error("Пользователь не найден", "Не удалось выполнить вход!")
          } else if(err.reason === "Incorrect password"){
            toastr.error("Неверный пароль", "Не удалось выполнить вход!")
          }
        } else {
          let theUser = Meteor.user()
          let userGreetings = `Добро пожаловать ${theUser.profile.name}!`

          toastr.success(userGreetings)
          this.props.history.push('/cabinet')
        }
    });
  }

  signUpNewUser() {
    const {
      name,
      email,
      password,
      getDispatch
    } = this.state.signUp

    const data = {
      username: email.toLowerCase(),
      email: email.toLowerCase(),
      password,
      profile: {
        name,
        customer: true,
        getDispatch
      }
    }

    Meteor.call('user.insert', data, (err, res) => {
      if(err){
        toastr.error(err.reason, 'Регистрация не прошла')
      } else {
        Meteor.loginWithPassword(
            email, password
        , (err) => {
            if(err) {
              toastr.error(err.reason, 'Что-то пошло не так...')
            } else {
              let theUser = Meteor.user()
              let userGreetings = `Добро пожаловать ${theUser.profile.name}!`

              toastr.success(userGreetings)
              this.props.history.push('/cabinet')
            }
        });
      }
    })
  }

  render() {
    return (
      <Login context={this}/>
    );
  }
}

export default LoginContainer;
