import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withTracker } from 'meteor/react-meteor-data'

import { BooksCollection } from '/api/books'

import Home from '/client/components/pages/Home/Home'

import * as actionTypes from '/client/store/actions';

class HomeContainer extends Component {
  state = {
    hoverId: '',
    dispatchEmailHome: ''
  }

  getOnDispathEmail = () => {
    Meteor.call('dispatch.insert', this.state.dispatchEmailHome, (err, res) => {
      if(err){
        toastr.warning(err.error)
        this.setState({dispatchEmailHome: ''})
      } else {
        toastr.success("Подписка оформлена!")
        this.setState({dispatchEmailHome: ''})
      }
    })
  }

  render() {
    const newBooks = this.props.books.filter(book => book.new).slice(0, 12)
    const popularBooks = this.props.books.filter(book => book.popular).slice(0, 12)

    return (
      <Home
        popularBooks={popularBooks}
        newBooks={newBooks}
        favoriteBooks={this.props.user ? this.props.user.profile.favorite : null}
        context={this}
        cart={this.props.cart}
        onAddToCart={(_id, price, amount) => this.props.onAddToCart(_id, price, amount)}/>
    );
  }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (bookId, price, amount) => dispatch({type: actionTypes.BOOK_ADD_TO_CART, bookId, price, amount}),
        onSortByNew: () => dispatch({type: actionTypes.SORT_BOOK_BY_NEW}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTracker((props) => {
  Meteor.subscribe('all.books')

  return {
    books: BooksCollection.find().fetch()
  }
})(HomeContainer));
