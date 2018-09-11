import React, { Component } from 'react'

import Signup from '/client/components/pages/Signup/Signup'

const defaultState = {
  registrationEmail: '',
  registrationPhone: '',
  registrationPassword: '',
  registrationPasswordConfirm: '',

  passwordValidation: true,
  errors: [],

  emailSentInfo: false
}

const emailValidationRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class SignupContainer extends Component {
  state = defaultState

  onCheckPasswordConfirmation() {
    const {registrationPasswordConfirm, registrationPassword} = this.state

    let passwordValidation = true

    if(registrationPasswordConfirm && registrationPassword !== registrationPasswordConfirm){
      passwordValidation = false
    }

    this.setState({passwordValidation})
  }

  signUp(e) {
    e.preventDefault()

    const {
      registrationEmail,
      registrationPhone,
      registrationPassword,
      registrationPasswordConfirm,
      errors,
      passwordValidation
    } = this.state

    let emailValidation = emailValidationRegEx.test(String(registrationEmail).toLowerCase())
    if(!emailValidation) {
      this.setState((prevState) => {
        let errors = [...prevState.errors]
        if(!errors.some(err => err === 'registrationEmail')) errors.push('registrationEmail')

        return {
          ...prevState,
          errors
        }
      })
    }

    const allFieldsAreFilledOut = emailValidation && registrationEmail && registrationPhone && registrationPassword && registrationPasswordConfirm && errors.length === 0 && passwordValidation

    if(!allFieldsAreFilledOut){
      toastr.warning('Заполните все поля для продолжения')
      return
    }

    const data = {
      username: registrationEmail.toLowerCase(),
      email: registrationEmail.toLowerCase(),
      password: registrationPassword,
      profile: {
        phoneNumber: registrationPhone
      }
    }

    Meteor.call('user.insert', data, (err, res) => {
      if(err){
        toastr.error(err.reason, 'Регистрация не прошла')
      } else {
        this.setState({emailSentInfo: true})
      }
    })
  }

  render() {
    return <Signup context={this}/>
  }
}

export default SignupContainer;
