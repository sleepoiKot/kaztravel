import React from 'react';
import { Link } from 'react-router-dom'

import { numberWithSpaces } from '/client/libs/cartRelated'

const mobileUsersCartTable = ({context, books}) => (
  books.map(book => {
    let discountPrice = book.price * parseInt(book.discount.value) / 100
    let cartBook = context.props.cart.find( item => item.bookId === book._id)
    let bookAmount = cartBook ? cartBook.amount : 0
    let bookForOrder = cartBook ? cartBook.forOrder : 0

    return (
      <div key={book._id} className="jsd-shopping-cart-div-parent">
        <div className="list__item item jsd-shopping-cart-div-item jsd-skuid-4885">
          <div className="item__col -type_img">
            <Link to={`/books/${book._id}`} className="b-cartem__imgWrap">
              <img src={book.cover.link} alt="" className="item__img" width="120" height="160"/>
            </Link>
          </div>
          <div className="item__col">
            <div className="item__info" style={{display: 'table', width: '100%'}}>
              <div className="item__col -type_description">
                <div className="item__description">
                  <Link to={`/books/${book._id}`} className="item__title">{book.name}</Link>
                  <div className="item__options">
                    <span className="item__option">
                      {book.amount !== 0 ? <span className="item__option">В наличии</span> : <span className="item__option none">Под заказ</span>}
                    </span>
                  </div>
                </div>
              </div>
              <div className="item__col -type_count" style={{textAlign: 'cneter'}}>
                <label className="item__count">
                  <div style={{display: 'inline'}}>
                    <div className="value">
                      <div className="input-group spinner">
                        <button onClick={() => {
                          if(bookAmount + bookForOrder <= 1){
                            toastr.warning("В вашей корзине находится минимальное количество товара")
                            return
                          }
                          context.props.onMinusBookAmount(book._id, book.price - discountPrice)
                        }} type="button" className="d-correct-by-all-button smk-shopping-cart-change-item-count">–</button>
                        <input
                          onBlur={() => {
                            if(bookAmount >= book.amount && book.amount !== 0 && !context.state.informed.includes(book._id))
                              context.setState(prevState => {
                                let arrayOfInformedBooks = [...prevState.informed]
                                arrayOfInformedBooks.push(book._id)

                                return {
                                  itemAmount: bookAmount,
                                  informed: arrayOfInformedBooks
                                }
                              }, () => $("#cart-items-for-order-modal").modal())
                          }}
                          onChange={(e) => {
                            let value = parseInt(e.currentTarget.value)
                            let valueAmount = 0
                            let valueForOrder = 0

                            if(typeof value === 'number' && value > 0){
                              if(value < book.amount) valueAmount = value
                              if(value > book.amount) {
                                valueAmount = book.amount
                                valueForOrder = value - book.amount
                              }
                              context.props.onSetValueForOrder(book._id, valueAmount, valueForOrder)
                            }

                          }}
                          value={bookAmount + bookForOrder}
                          type="number"
                          name="count"
                          className="form-control spinner-input d-correct-by-all-input"/>
                          <button onClick={() => {
                            if(bookAmount >= book.amount){
                              if(bookForOrder === 0 && !context.state.informed.includes(book._id))
                                context.setState(prevState => {
                                  let arrayOfInformedBooks = [...prevState.informed]
                                  arrayOfInformedBooks.push(book._id)

                                  return {
                                    itemAmount: bookAmount,
                                    informed: arrayOfInformedBooks
                                  }
                                }, () => $("#cart-items-for-order-modal").modal())

                              context.props.onPlusBookForOrder(book._id, book.price - discountPrice)
                              return
                            }
                            context.props.onPlusBookAmount(book._id, book.price - discountPrice)
                          }} type="button" className="d-correct-by-all-button smk-shopping-cart-change-item-count">+</button>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="item__col -type_price" style={{textAlign: 'center'}}>
                  <div className="item__price dn-old-price-line">{numberWithSpaces(book.price * (bookAmount + bookForOrder))} тг.</div>
                </div>
                <div className="item__col -type_price" style={{textAlign: 'center'}}>
                  <div className="item__price">{numberWithSpaces((book.price - discountPrice) * (bookAmount + bookForOrder))} тг.</div>
                </div>
                <div className="item__col -type_remove" style={{textAlign: 'center'}}>
                  <a onClick={() => context.props.onRemoveBookFromCart(book._id)} className="item__remove smk-shopping-cart-del-item" style={{cursor: 'pointer'}}></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  })
);

export default mobileUsersCartTable;
