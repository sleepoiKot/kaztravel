import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import AdminConfigurations from '/client/components/adminPages/AdminConfigurations/AdminConfigurations'

const defaultState = {
  configId: '',
  configPhone: '',
  configOperatingMode: '',
  configPosters: [],

  configActualAddress: '',
  configLegalAddress: '',
  configEmail: ''
}

class AdminConfigurationsContainer extends Component {
  state = defaultState

  componentWillMount() {
    Meteor.call('get.configs', (err, res) => {
      if(err) {
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        this.setState({
          configId: res._id,
          configPhone: res.phone,
          configOperatingMode: res.operatingMode,
          configPosters: res.posters ? res.posters : [],
          configActualAddress: res.actualAddress,
          configLegalAddress: res.legalAddress,
          configEmail: res.email
        })
      }
    })
  }

  onEditPhoneConfig = () => {
    Meteor.call('config.phone.edit', this.state.configId, this.state.configPhone, (err, res) => {
      if(err) {
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Телефон успешно изменен")
      }
    })
  }

  onEditOperatingModeConfig = () => {
    Meteor.call('config.operatingMode.edit', this.state.configId, this.state.configOperatingMode, (err, res) => {
      if(err) {
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Режим работы успешно изменен")
      }
    })
  }

  onEditPostersConfig = () => {
    Meteor.call('config.posters.edit', this.state.configId, this.state.configPosters, (err, res) => {
      if(err) {
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Постеры успешно изменены")
      }
    })
  }

  onEditActualAddressConfig = () => {
    Meteor.call('config.actualAddress.edit', this.state.configId, this.state.configActualAddress, (err, res) => {
      if(err) {
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Фактический адрес изменен")
      }
    })
  }

  onEditLegalAddressConfig = () => {
    Meteor.call('config.legalAddress.edit', this.state.configId, this.state.configLegalAddress, (err, res) => {
      if(err) {
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Юридический адрес изменен")
      }
    })
  }

  onEditEmailConfig = () => {
    Meteor.call('config.email.edit', this.state.configId, this.state.configEmail, (err, res) => {
      if(err) {
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Электронный адрес изменен")
      }
    })
  }

  render() {
    return <AdminConfigurations context={this}/>
  }
}

export default AdminConfigurationsContainer;
