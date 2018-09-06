import React, { Component } from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

class Authenticated extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  render() {
    const { loggingIn, authenticated, component, user, locStrings, lang, ...rest } = this.props
    return (
      <Route
        { ...rest }
        render={ (props) => {
          if(loggingIn)
            return <div />

          if(!authenticated)
            return toastr.error("You are not logged in")

          return (React.createElement(component, {...props, lang, user, loggingIn, authenticated, locStrings}))
        } }
      />
    )
  }
}

export default Authenticated;
