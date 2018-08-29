import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { connect } from 'react-redux';

import { ConfigurationsCollection } from '/api/configs'

import TopBar from '/client/components/Header/TopBar/TopBar'

import * as actionTypes from '/client/store/actions';

const defaultState = {
  toggleFiltersOnMobile: false,
  searchQuery: ''
}

class TopBarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
  }

  render() {
    return (
      <TopBar
        context={this}
        configs={this.props.configs}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (searchQuery) => dispatch({type: actionTypes.SEARCH_BOOK, searchQuery})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTracker(() => {
  Meteor.subscribe('configs')

  return {
    configs: ConfigurationsCollection.findOne()
  }
})(TopBarContainer));
