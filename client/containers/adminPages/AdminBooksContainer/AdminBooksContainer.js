import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { BooksCollection } from '/api/books'

import AdminBooks from '/client/components/adminPages/AdminBooks/AdminBooks'

const defaultState = {
  itemId: '',
  itemName: ''
}

class AdminBooksContainer extends Component {
  state = defaultState

  onDeleteBook = () => {
    Meteor.call('book.delete', this.state.itemId, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Книга успешно удалена")
      }
    })
  }

  render() {
    return <AdminBooks context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('admin.books')

  return {
    books: BooksCollection.find().fetch()
  }
})(AdminBooksContainer);
