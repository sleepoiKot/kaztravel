import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { connect } from 'react-redux';

import { BooksCollection } from '/api/books'

import BookDescription from '/client/components/pages/Books/BookDescription/BookDescription'

import * as actionTypes from '/client/store/actions';

class BookContainer extends Component {
  state = {
    hoverId: '',
    sameBooks: []
  }

  componentWillMount(){
    Meteor.call('find.same.books', this.props.match.params._id, (err, res) => {
      if(err){
        toastr.error(err.reason, "Упс, что-то пошло не так!")
      } else {
        this.setState({sameBooks: res})
      }
    })
  }

  componentDidUpdate() {
    const { book } = this.props

    if(book) {
      let uploadingFiles = [...book.images]

      uploadingFiles.push(book.cover)

      uploadingFiles.map( file => {
        if(file){
          Meteor.call('get.link', file, (err, res) => {
            if(err) {
              toastr.error(err.reason)
            }
            else {
              const link = document.querySelector(`#link-description-${file._id}`)
              const linkBottom = document.querySelector(`#link-description-bottom-${file._id}`)
              if(link) link.href = res
              if(linkBottom) linkBottom.href = res
            }
          })
        }
      })
    }
  }

  renderNode = props => {
    const { attributes, children, node } = props
    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
    }
  }

  renderMark = props => {
    const { children, mark, attributes } = props
    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>
      case 'code':
        return <code {...attributes}>{children}</code>
      case 'italic':
        return <em {...attributes}>{children}</em>
      case 'underlined':
        return <u {...attributes}>{children}</u>
    }
  }

  render() {
    return this.props.book ?
        <BookDescription
          context={this}
          book={this.props.book}
          cart={this.props.cart}
          onAddToCart={(_id, price, amount) => this.props.onAddToCart(_id, price, amount)}
          favoriteBooks={this.props.user ? this.props.user.profile.favorite : null}
        /> : null
  }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (bookId, price, amount) => dispatch({type: actionTypes.BOOK_ADD_TO_CART, bookId, price, amount}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTracker((props) => {
  Meteor.subscribe('book', props.match.params._id)

  return {
    book: BooksCollection.findOne()
  }
})(BookContainer));
