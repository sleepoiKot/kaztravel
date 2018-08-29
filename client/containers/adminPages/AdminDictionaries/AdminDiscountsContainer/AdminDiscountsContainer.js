import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'

import { DiscountsCollection } from '/api/discounts'

import AdminDiscounts from '/client/components/adminPages/AdminDictionaries/AdminDiscounts/AdminDiscounts'

const defaultState = {
  itemId: '',
  itemName: '',

  addDiscountLabel: '',
  addDiscountValue: '',
  editDiscountLabel: '',
  editDiscountValue: ''
}

class AdminDiscountsContainer extends Component {
  state = defaultState

  onAddDiscountDictionary = () => {
    const { addDiscountLabel, addDiscountValue } = this.state

    const data = {
      label: addDiscountLabel,
      value: addDiscountValue
    }

    Meteor.call('discount.insert', data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Скидка успешно добавлена в справочник")
        this.setState(defaultState)
      }
    })
  }

  onEditDiscountDictionary = () => {
    const {
      itemId,
      editDiscountLabel,
      editDiscountValue
    } = this.state

    const data = {
      label: editDiscountLabel,
      value: editDiscountValue
    }

    Meteor.call('discount.edit', itemId, data, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Скидка успешно изменена")
        this.setState(defaultState)
      }
    })
  }

  onDeleteDiscountDictionary = () => {
    Meteor.call('discount.delete', this.state.itemId, (err, res) => {
      if(err){
        toastr.error(err.reason, "Что-то пошло не так!")
      } else {
        toastr.success("Скидка успешно удалена")
      }
    })
  }

  render() {
    return <AdminDiscounts context={this}/>
  }
}

export default withTracker(() => {
  Meteor.subscribe('discounts')

  return {
    discounts: DiscountsCollection.find().fetch()
  }
})(AdminDiscountsContainer);
