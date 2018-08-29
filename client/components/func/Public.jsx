import React, { Component } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'

class Public extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  render() {
    const {loggingIn, authenticated, component, locStrings, ...rest} = this.props

    return (
      <Route
        { ...rest }
        render={ props => {
          if(loggingIn) return <div />
          return React.createElement(component, { ...props, locStrings, loggingIn, authenticated, })
        } }
      />
    )
  }
}

export default Public;
