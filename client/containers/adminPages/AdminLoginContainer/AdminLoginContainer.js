import React, { Component } from 'react'

import AdminLogin from '/client/components/adminPages/AdminLogin/AdminLogin'

class AdminLoginContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      login: '',
      password: ''
    }
  }

  componentWillMount() {
    document.getElementById("admin-main-styles").disabled = false;
  }

  componentWillUnmount() {
    document.getElementById("admin-main-styles").disabled = true;
  }

  onSignInAsAdminitrator(e) {
    e.preventDefault()

    const { login, password } = this.state

    let errorMessage = ''

    if(!login || !password) {
      errorMessage = !login ? 'Необходимо заполнить поле "Логин"' : errorMessage
      errorMessage = !password ? 'Необходимо заполнить поле "Пароль"' : errorMessage
      errorMessage = !login && !password ? 'Необходимо заполнить поля для продолжения' : errorMessage

      toastr.error(errorMessage, 'Ошибка авторизации')

      return
    }

    Meteor.loginWithPassword(
        login, password
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
          let theUser = Meteor.user()
          let userGreetings = `Добро пожаловать!`

          const log = {
            username: theUser.username,
            user: theUser.profile.name,
            createdAt: Date.now(),
            service: 'admin.logged.in',
            payload: {}
          }
          Meteor.call('log.insert', log)

          toastr.success(userGreetings)
        }
    });
  }

  render() {
    return <AdminLogin context={this}/>
  }
}

export default AdminLoginContainer;
