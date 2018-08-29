import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withTracker } from 'meteor/react-meteor-data'

import { AgesCollection } from '/api/ages'
import { SubjectsCollection } from '/api/subjects'
import { PublishingHousesCollection } from '/api/publishingHouses'
import { BooksCollection } from '/api/books'

import Books from '/client/components/pages/Books/Books'

import { multipleSubscribe } from '/client/libs/subscriptionsRelated'
import * as actionTypes from '/client/store/actions';

const defaultState = {
  ageCollapse: true,
  subjectCollapse: true,
  publishingHouseCollapse: true,
  madeInKz: false,

  sortBooks: {
    best: false
  },

  dispatchEmail: '',

  hoverId: ''
}

class BooksContainer extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
  }

  onFilterToggle = (parentProps, checked, itemId, actionType) => {
    const initialFilter = this.props[parentProps]

    if(checked){
      const newFilter = [...initialFilter, itemId]

      this.props.onFilter(newFilter, actionType)
    } else {
      const fiteredArray = initialFilter.filter( el => el !== itemId)

      this.props.onFilter(fiteredArray, actionType)
    }
  }

  saveDispathEmail = () => {
    Meteor.call('dispatch.insert', this.state.dispatchEmail, (err, res) => {
      if(err){
        toastr.warning(err.error)
        this.setState({dispatchEmail: ''})
      } else {
        toastr.success("Подписка оформлена!")
        this.setState({dispatchEmail: ''})
      }
    })
  }

  componentWillUnmount() {
    this.props.onResetFilters()
  }

  render() {
    return <Books context={this} />
  }
}

// receive here as a props filtered CONTENT
// then pass them into our withTracker
const mapStateToProps = state => {
    return {
        ageFilter: state.ageFilter,
        subjectFilter: state.subjectFilter,
        publishingHouseFilter: state.publishingHouseFilter,
        madeInKz: state.madeInKz,
        cart: state.cart,
        searchQuery: state.searchQuery,
        sortByNew: state.new,
        sortByLowPrice: state.lowPrice,
        sortByHighPrice: state.highPrice,
        limit: state.limit
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFilter: (filteredArray, actionType) => dispatch({type: actionTypes[actionType], newArray: filteredArray}),
        onFilterMadeInKZ: () => dispatch({type: actionTypes.FILTER_MADE_IN_KZ}),
        onAddToCart: (bookId, price, amount) => dispatch({type: actionTypes.BOOK_ADD_TO_CART, bookId, price, amount}),
        onSortByNew: () => dispatch({type: actionTypes.SORT_BOOK_BY_NEW}),
        onSortByLowPrice: () => dispatch({type: actionTypes.SORT_BOOK_BY_LOW_PRICE}),
        onSortByHighPrice: () => dispatch({type: actionTypes.SORT_BOOK_BY_HIGH_PRICE}),
        onResetFilters: () => dispatch({type: actionTypes.RESET_FILTERS}),
        onLimit: () => dispatch({type: actionTypes.LIMIT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTracker((props) => {
  // implement here filter of our CONTENT via props
  multipleSubscribe([
    'ages',
    'subjects',
    'publishingHouses'
  ])

  Meteor.subscribe('books',
    props.searchQuery,
    props.ageFilter,
    props.subjectFilter,
    props.publishingHouseFilter,
    props.madeInKz,
    props.sortByNew,
    props.sortByLowPrice,
    props.sortByHighPrice,
    props.limit
  )

  let sortOptions = { sort: {createdAt: 1}}
  if(props.sortByNew) sortOptions = { sort: { new: -1 }}
  if(props.sortByLowPrice) sortOptions = { sort: { price: 1 }}
  if(props.sortByHighPrice) sortOptions = { sort: { price: -1 }}

  return {
    ages: AgesCollection.find().fetch(),
    subjects: SubjectsCollection.find().fetch(),
    publishingHouses: PublishingHousesCollection.find().fetch(),
    books: BooksCollection.find({}, sortOptions).fetch()
  }
})(BooksContainer));
