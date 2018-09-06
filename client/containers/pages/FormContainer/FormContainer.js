import React, { Component } from 'react'
import Scroll, { Element, scroller } from "react-scroll";

import Form from '/client/components/pages/Form/Form'

const defaultState = {
  formEmail: '',
  formLastName: '',
  formFirstName: '',
  formMiddleName: '',
  formOrganization: '',
  formOrganizationAddress: '',
  formOrganizationFunctions: '',
  organizationPortfolio: '',
  formPhone: '',
  formWeb: '',
  project: '',
  photos: [],
  formYoutubeLink: '',

  smsCode: '',

  errors: []
}

const emailValidationRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class FormContainer extends Component {
  state = defaultState

  submitForm = (e) => {
    e.preventDefault()

    const {
      formEmail,
      formLastName,
      formFirstName,
      formMiddleName,
      formOrganization,
      formOrganizationAddress,
      formOrganizationFunctions,
      organizationPortfolio,
      formPhone,
      formWeb,
      project,
      photos,
      formYoutubeLink
    } = this.state

    // Email client side validation
    let emailValidation = emailValidationRegEx.test(String(formEmail).toLowerCase())
    if(!emailValidation) {
      this.setState((prevState) => {
        let errors = [...prevState.errors]
        if(!errors.some(err => err === 'formEmail')) errors.push('formEmail')

        return {
          ...prevState,
          errors
        }
      }, () => {
        toastr.warning("Неверный формат email")
        scroller.scrollTo('formEmail', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      })
      return
    }

    const data = {
      email: formEmail,
      lastName: formLastName,
      firstName: formFirstName,
      middleName: formMiddleName,
      organization: formOrganization,
      organizationAddress: formOrganizationAddress,
      organizationFunctions: formOrganizationFunctions,
      organizationPortfolio: organizationPortfolio,
      phone: formPhone,
      web: formWeb,
      project: project,
      photos: photos,
      youtubeLink: formYoutubeLink
    }

    Meteor.call('form.insert', data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Упс, что-то пошло не так")
      } else {
        toastr.success("Ваша анкета сохранена")
      }
    })
  }

  verifySMS = (e) => {
    e.preventDefault()

    if(this.state.smsCode.length !== 4){
      toastr.warning('Код должен состоять из 4 цифр')
      return
    }

    Meteor.call('verify.sms', this.state.smsCode, (err, res) => {
      if(err){
        toastr.error(err.reason, "Упс, что-то пошло не так")
      } else if(!res) {
        toastr.error('Неверный код СМС')
        this.setState(defaultState)
      } else {
        toastr.success("Верификация прошла успешно")
      }
    })
  }

  render() {
    this.organizationOptions = [
      {value: '0', label: 'Физическое лицо'},
      {value: '1', label: 'ИП'},
      {value: '2', label: 'ТОО'}
    ]

    return <Form context={this} submitForm={this.submitForm.bind(this)}/>
  }
}

export default FormContainer;
