import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Aux from './hoc/Aux/Aux'
import Public from './components/func/Public'
import Authenticated from './components/func/Authenticated'

// Default components
import AdminBarContainer from './containers/Header/AdminBarContainer/AdminBarContainer'

// Admin pages
import AdminLoginContainer from './containers/adminPages/AdminLoginContainer/AdminLoginContainer'
import AdminDashboardContainer from './containers/adminPages/AdminDashboardContainer/AdminDashboardContainer'
import AdminBooksContainer from './containers/adminPages/AdminBooksContainer/AdminBooksContainer'
import AdminNewBookContainer from './containers/adminPages/AdminBooksContainer/AdminNewBookContainer/AdminNewBookContainer'
import AdminUsersContainer from './containers/adminPages/AdminUsersContainer/AdminUsersContainer'
import AdminConfigurationsContainer from './containers/adminPages/AdminConfigurationsContainer/AdminConfigurationsContainer'

// Dictionaries
import AdminAgesContainer from './containers/adminPages/AdminDictionaries/AdminAgesContainer/AdminAgesContainer'
import AdminSubjectsContainer from './containers/adminPages/AdminDictionaries/AdminSubjectsContainer/AdminSubjectsContainer'
import AdminPublishingHousesContainer from './containers/adminPages/AdminDictionaries/AdminPublishingHousesContainer/AdminPublishingHousesContainer'
import AdminAuthorsContainer from './containers/adminPages/AdminDictionaries/AdminAuthorsContainer/AdminAuthorsContainer'
import AdminDispatchesContainer from './containers/adminPages/AdminDictionaries/AdminDispatchesContainer/AdminDispatchesContainer'
import AdminDiscountsContainer from './containers/adminPages/AdminDictionaries/AdminDiscountsContainer/AdminDiscountsContainer'
import AdminWhereToBuyContainer from './containers/adminPages/AdminDictionaries/AdminWhereToBuyContainer/AdminWhereToBuyContainer'

import { cookie } from './libs/coreLib'
import { locStrings } from '/imports/localization/localization'

class Admin extends Component {
  componentWillMount() {
    if(Meteor.userId()) {
      document.getElementById("admin-main-styles").disabled = true;
    }

    if(this.props.match.path === '/admin') {
      document.getElementById("default-main-slate").disabled = true;
      document.getElementById("default-main-styles").disabled = true;
      document.getElementById("default-dun-correct-main-styles").disabled = true;
      document.getElementById("default-kk-styles").disabled = true;
      document.getElementById("default-dun-styles").disabled = true;
    }
  }

  render() {
    let routes = (
      <Aux>
        <Public path="/admin" component={ AdminLoginContainer } {...this.props} />
      </Aux>
    )

    if(this.props.authenticated && this.props.userIsAdmin) {
      routes = (
        <Aux>
          <Authenticated path="/admin" component={ AdminBarContainer } {...this.props} />
          <Switch>
            <Authenticated exact path="/admin" component={ AdminDashboardContainer } {...this.props} />
            <Authenticated exact path="/admin/books" component={ AdminBooksContainer } {...this.props} />
            <Authenticated exact path="/admin/books/newBook" component={ AdminNewBookContainer } { ...this.props } />
            <Authenticated exact path="/admin/books/newBook/:_id" component={ AdminNewBookContainer } { ...this.props } />
            <Authenticated exact path="/admin/users" component={ AdminUsersContainer } {...this.props} />
            <Route path="/admin/dictionaries">
              <Aux>
                <Authenticated exact path="/admin/dictionaries/ages" component={ AdminAgesContainer } {...this.props} />
                <Authenticated exact path="/admin/dictionaries/subjects" component={ AdminSubjectsContainer } {...this.props} />
                <Authenticated exact path="/admin/dictionaries/publishingHouses" component={ AdminPublishingHousesContainer } {...this.props} />
                <Authenticated exact path="/admin/dictionaries/authors" component={ AdminAuthorsContainer } {...this.props} />
                <Authenticated exact path="/admin/dictionaries/dispatches" component={ AdminDispatchesContainer } {...this.props} />
                <Authenticated exact path="/admin/dictionaries/discounts" component={ AdminDiscountsContainer } {...this.props} />
                <Authenticated exact path="/admin/dictionaries/whereToBuy" component={ AdminWhereToBuyContainer } {...this.props} />
              </Aux>
            </Route>
            <Authenticated exact path="/admin/configs" component={ AdminConfigurationsContainer } {...this.props} />
            <Redirect to="/admin" />
          </Switch>
        </Aux>
      )
    }

    return (
      <Aux>
        {!this.props.loggingIn ? routes : null}
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
  const userIsAdmin = user ? user.username === 'superadmin' : false

  return {
    locStrings: locStrings[lang],
    loggingIn,
    authenticated: !loggingIn && !!userId,
    user,
    userIsAdmin
  }
})(Admin);
