import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { AuthorsCollection } from '/api/authors'

import AdminAuthors from '/client/components/adminPages/AdminDictionaries/AdminAuthors/AdminAuthors'

class AdminAuthorsContainer extends Component {
  state = {
    itemId: '',
    editAuthorName: '',
    editAuthorDescription: ''
  }

  onEditAuthorDictionary = () => {
    Meteor.call('author.update', this.state.itemId, this.state.editAuthorDescription, (err, res) => {
      if(err){
        toastr.error(err.reason, "Упс, что-то пошло не так")
      } else {
        toastr.success("Изменения сохранены!")
      }
    })
  }

  render() {
    return <AdminAuthors context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('authors')

  return {
    authors: AuthorsCollection.find({}, {sort : { name: 1}}).fetch()
  }
})(AdminAuthorsContainer);
