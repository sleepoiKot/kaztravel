import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './store/reducers'

import App from './App'
import Admin from './Admin'

const store = createStore(reducers)

const app = (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={ Admin }/>
      <Route path="/" component={ App }/>
    </Switch>
  </BrowserRouter>
);

Meteor.startup(function() {
  Accounts.config({
    loginExpirationInDays: 14
  })
  // MDB core JavaScript
  $('body').append('<script type="text/javascript" src="/assets/js/mdb.min.js"></script>');

  // Toastr options
  // toastr.options.closeButton = true;

  render(<Provider store={store}>{app}</Provider>, root)
});
