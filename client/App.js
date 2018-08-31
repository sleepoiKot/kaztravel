import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import ScrollToTop from 'react-scroll-up'

import Aux from './hoc/Aux/Aux'
import Public from './components/func/Public'
import Authenticated from './components/func/Authenticated'

// Default components
import TopBarContainer from './containers/Header/TopBarContainer/TopBarContainer'
import FooterContainer from './containers/Footer/FooterContainer/FooterContainer'

// App Pages
import HomeContainer from './containers/pages/HomeContainer/HomeContainer'
import ForgotPasswordContainer from './containers/pages/ForgotPasswordContainer/ForgotPasswordContainer'
import BooksContainer from './containers/pages/BooksContainer/BooksContainer'
import BookDescriptionContainer from './containers/pages/BooksContainer/BookDescriptionContainer/BookDescriptionContainer'
import LoginContainer from './containers/pages/LoginContainer/LoginContainer'
import CartContainer from './containers/pages/CartContainer/CartContainer'
import ContactsContainer from './containers/pages/ContactsContainer/ContactsContainer'
import NominationContainer from './containers/pages/NominationContainer/NominationContainer'

import { cookie } from './libs/coreLib'
import { locStrings } from '/imports/localization/localization'

class App extends Component {
  componentWillMount() {
    document.getElementById("default-main-slate").disabled = true;
    document.getElementById("admin-main-styles").disabled = true;
    document.getElementById("default-main-styles").disabled = false;
    document.getElementById("default-theme-styles").disabled = false;
  }

  componentDidMount() {
    setTimeout(() => {$('#preloader').fadeOut('slow')}, 500)
  }

  render() {
    let routes = (
      <Aux classNameAux="site-wrapper">
        <Preloader/>
        <Public path="/" component={ TopBarContainer } {...this.props} />
        <Switch>
          <Public exact path="/" component={ HomeContainer } {...this.props} />
          <Public exact path="/nomination/:_id" component={ NominationContainer } {...this.props} />
          {/* <Public exact path="/books" component={ BooksContainer } {...this.props} />
          <Public exact path="/login" component={ LoginContainer } {...this.props} />
          <Public exact path="/forgotPassword" component={ ForgotPasswordContainer } {...this.props} />
          <Public exact path="/cart" component={ CartContainer } {...this.props} />
          <Public exact path="/contacts" component={ ContactsContainer } {...this.props} /> */}
          <Redirect to="/" />
        </Switch>
        <Public path="/" component={ FooterContainer } {...this.props} />
      </Aux>
    )

    // if(this.props.authenticated) {
    //   routes = (
    //     <Aux>
    //       <Authenticated path="/" component={ TopBarContainer } {...this.props} />
    //       <Switch>
    //         <Authenticated exact path="/" component={ HomeContainer } {...this.props} />
    //         <Authenticated exact path="/books" component={ BooksContainer } {...this.props} />
    //         <Authenticated exact path="/books/:_id" component={ BookDescriptionContainer } {...this.props} />
    //         <Authenticated exact path="/cart" component={ CartContainer } {...this.props} />
    //         <Authenticated exact path="/contacts" component={ ContactsContainer } {...this.props} />
    //         <Redirect to="/" />
    //       </Switch>
    //       <Authenticated path="/" component={ FooterContainer } {...this.props} />
    //     </Aux>
    //   )
    // }

    return (
      <Aux>
        {routes}
        {/* Back Top */}
        <div className="scrollToTop">
          <ScrollToTop duration={1000} showUnder={160}>
            <a className="btn-floating btn-large orange">
              <i className="fa fa-arrow-up" style={{fontSize: '2.625rem'}}></i>
            </a>
          </ScrollToTop>
        </div>
        {/* Back Top End */}
      </Aux>
    )
  }
}

export default withTracker(() => {
  let lang = cookie.get('lang')
  if(lang === '') {
    cookie.set('lang', 'ru', 9999);
    lang = 'ru';
  }

  const loggingIn = Meteor.loggingIn()
  const userId = Meteor.userId()
  const user = Meteor.user()

  return {
    locStrings: locStrings[lang],
    loggingIn,
    authenticated: !loggingIn && !!userId,
    user
  }
})(App);
