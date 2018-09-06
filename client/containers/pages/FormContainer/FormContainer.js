import React, { Component } from 'react'
import Scroll, { Element, scroller } from "react-scroll";
import { withTracker } from 'meteor/react-meteor-data'

import Form from '/client/components/pages/Form/Form'

import { NominationsCollection } from '/api/nominations'

const defaultState = {
  formNomination: '',
  formEmail: '',
  formLastName: '',
  formFirstName: '',
  formMiddleName: '',
  formOrganization: '',
  formOrganizationName: '',
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

  componentWillMount() {
    if(Meteor.userId()){
      Meteor.call('get.form', (err, res) => {
        if(err){
          toastr.error(err.reason, 'Упс... что-то пошло не так')
        } else if(!res){
          this.setState({formEmail: Meteor.user().emails[0].address})
        } else {
          this.setState({
            formNomination: res.nomination,
            formEmail: res.email,
            formLastName: res.lastName,
            formFirstName: res.firstName,
            formMiddleName: res.middleName,
            formOrganization: res.organization,
            formOrganizationName: res.organizationName,
            formOrganizationAddress: res.organizationAddress,
            formOrganizationFunctions: res.organizationFunctions,
            organizationPortfolio: res.organizationPortfolio,
            formPhone: res.phone,
            formWeb: res.web,
            project: res.project,
            photos: res.photos,
            formYoutubeLink: res.youtubeLink
          })
        }
      })
    }
  }

  submitForm = (e) => {
    e.preventDefault()

    const {
      formNomination,
      formEmail,
      formLastName,
      formFirstName,
      formMiddleName,
      formOrganization,
      formOrganizationName,
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
      nomination: formNomination,
      email: formEmail,
      lastName: formLastName,
      firstName: formFirstName,
      middleName: formMiddleName,
      organization: formOrganization,
      organizationName: formOrganizationName,
      organizationAddress: formOrganizationAddress,
      organizationFunctions: formOrganizationFunctions,
      organizationPortfolio: organizationPortfolio,
      phone: formPhone,
      web: formWeb,
      project: project,
      photos: photos,
      youtubeLink: formYoutubeLink
    }

    let formId = Meteor.user().profile.formId

    Meteor.call('form.insert', formId, data, (err, res) => {
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
    this.nominationOptions = this.props.nominations.map( nom => {
      return {
        value: nom._id,
        label: nom.name[this.props.lang]
      }
    })

    this.organizationOptions = [
      {value: '0', label: 'Физическое лицо'},
      {value: '1', label: 'ИП'},
      {value: '2', label: 'ТОО'}
    ]

    return <Form context={this} submitForm={this.submitForm.bind(this)}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('nominations')

  return {
    nominations: NominationsCollection.find().fetch()
  }
})(FormContainer);
