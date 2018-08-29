import React from 'react';
import Transition from 'react-transition-group/Transition';

import Aux from '/client/hoc/Aux/Aux'

function numberWithSpaces(num) {
  if(isNaN(parseInt(num)))
    return ''

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const booksContent = ({onAddToCart, books, cart, favoriteBooks, context}) => (
  books.length !== 0 ? books.map((book) => {
    let discountPrice = book.price * parseInt(book.discount.value) / 100
    let isBookInTheCart = cart.some(cart => cart.bookId === book._id)
    let isFavorite = favoriteBooks ? favoriteBooks.some(id => id === book._id) : false
    let isHovered = context.state.hoverId === book._id

    return (
      <Aux key={book._id}>
        <div className="book-content">
          <div onClick={() => context.props.history.push(`/books/${book._id}`)}>
            <div className="cover">
              <div className="extra" onClick={e => e.stopPropagation()}>
                {book.new ? <div className="new">Новинка</div> : <div style={{height: 15, width: 65}}/>}
                {book.discount.value !== "0" ? <div className="discount" style={{width: 80}}>Скидка {book.discount.label}</div> : <div style={{ height: 15, width: 55}}/>}
              </div>
              <div>
                <a>
                  <img
                    className="books4kids-product"
                    src={book.cover ? book.cover.link : "#"}
                    alt={book.name} />
                </a>
              </div>
            </div>
            <a className="description" style={{cursor: 'pointer', display: 'block', textDecoration: 'none', color: '#000'}}>
              <div className="name">
                <p>{book.author}</p>
              </div>
              <div className="title">
                <p>{book.name}</p>
              </div>
            </a>
          </div>
          <div className="price">
            {book.oldPrice ? (
              <div className="with-discount">
                <p className="new" style={{marginRight: '4px', textDecoration: 'line-through', color: '#ff5500'}}>
                  <span style={{color: '#ff5500'}}>
                    <span>{numberWithSpaces(book.oldPrice)}</span>
                  </span>
                </p>
                <p className="new">
                  <span>{numberWithSpaces(book.price)}</span> тг.
                </p>
              </div>
            ) : (
              <div className="with-discount">
                <p className="new">
                  <span>{numberWithSpaces(book.price)}</span> тг.
                </p>
              </div>
            )}
          </div>
          <div className="actions">
            <Transition
              in={isBookInTheCart}
              timeout={300}>
              {state => (
                <a
                  className={state === 'entered' ? 'butta -on -state_added' : 'butta'}
                  onMouseOver={() => isBookInTheCart ? context.setState({hoverId: book._id}) : null}
                  onMouseOut={() => isBookInTheCart ? context.setState({hoverId: ''}) : null}
                  onClick={() => {
                    if(!isBookInTheCart){
                      onAddToCart(book._id, book.price - discountPrice, book.amount)
                    } else {
                      context.props.history.push('/cart')
                    }
                  }}>
                  <span>{isBookInTheCart ? isHovered ? "Оформить" : "В корзине" : "В корзину"}</span>
                </a>
              )}
            </Transition>
            <Transition
              in={isFavorite}
              timeout={300}>
              {state => (
                <a
                  className={isFavorite ? "favorite on" : "favorite"}
                  onClick={() => {
                    if(!Meteor.userId()) {
                      toastr.warning("Пожалуйста авторизуйтесь для добавления товара в избранные", "Вы не авторизованы!")
                    } else if(!isFavorite){
                      Meteor.call('user.book.favorite.add', book._id, (err, res) => {
                        if(err) {
                          toastr.error(err.reason, "Упс, что-то пошло не так!")
                        } else {
                          toastr.success(`Книга "${book.name}" добавлена в избранные!`)
                        }
                      })
                    } else {
                      Meteor.call('user.book.favorite.remove', book._id, (err, res) => {
                        if(err) {
                          toastr.error(err.reason, "Упс, что-то пошло не так!")
                        } else {
                          toastr.success(`Книга "${book.name}" удалена из избранных!`)
                        }
                      })
                    }
                  }}/>
              )}
            </Transition>
          </div>
        </div>
      </Aux>
    )
  }) : <span style={{fontStyle: 'italic', color: "#c7c7c7"}}>"По вашему запросу ничего не найдено..."</span>
)

export default booksContent;
