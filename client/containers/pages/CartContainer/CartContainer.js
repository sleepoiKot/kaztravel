import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withTracker } from 'meteor/react-meteor-data'

import { BooksCollection } from '/api/books'
import { TerritoriesCollection } from '/api/territories'

import Cart from '/client/components/pages/Cart/Cart'

import { multipleSubscribe } from '/client/libs/subscriptionsRelated'
import * as actionTypes from '/client/store/actions';

const defaultState= {
  itemAmount: 0,
  informed: [],

  cartOrdererFirstName: '',
  cartOrdererLastName: '',
  cartOrdererEmail: '',
  cartOrdererPhone: '',
  cartOrdererAddress: '',
  cartOrdererAddressExtra: '',

  submitted: false,
  territories: [],

  placeSelectLoading: false,
  territoriesNotFound: false,
  deliveryWay: '',

  selectedPayment: 1
}

class CartContainer extends Component {
  state = defaultState

  onPlaceSearch(e) {
    Meteor.call('territory.has.parent', e, (err, res) => {
      if(!err) {
        this.setState({territories: res, placeSelectLoading: false, territoriesNotFound: !res.length})
      }
    })
  }

  render() {
    return (
      <Cart books={this.props.books} context={this}/>
    );
  }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMinusBookAmount: (bookId, price) => dispatch({type: actionTypes.MINUS_BOOK_AMOUNT, bookId, price}),
        onPlusBookAmount: (bookId, price) => dispatch({type: actionTypes.PLUS_BOOK_AMOUNT, bookId, price}),
        onPlusBookForOrder: (bookId, price) => dispatch({type: actionTypes.PLUS_BOOK_FOR_ORDER, bookId, price}),
        onRemoveBookFromCart: (bookId) => dispatch({type: actionTypes.REMOVE_BOOK_FROM_CART, bookId}),
        onSetValueForOrder: (bookId, amount, order) => dispatch({type: actionTypes.SET_VALUE_FOR_ORDER, bookId, amount, order}),
        onCartClear: () => dispatch({type: actionTypes.CLEAR_CART})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withTracker(props => {
  let booksIds = props.cart.map( cart => cart.bookId)

  Meteor.subscribe('books.cart', booksIds)
  return {
    books: BooksCollection.find().fetch()
  }
})(CartContainer));
