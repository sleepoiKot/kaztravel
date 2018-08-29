import React, { Component } from 'react';
import Slider from "react-slick";
import Transition from 'react-transition-group/Transition';

import Aux from '/client/hoc/Aux/Aux'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function numberWithSpaces(num) {
  if(isNaN(parseInt(num)))
    return ''

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function SampleNextArrow(props) {
  const { onClick } = props;
  let style = {
    width: 40,
    height: 50,
    right: -50
  }

  if(window.innerWidth <= 550 ) style = {width: 40, height: 50, right: 0, zIndex: 100}

  return (
    <div
      style={style}
      className={`slide-arrow-right`}
      onClick={onClick}/>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  let style = {
    width: 40,
    height: 50,
    left: -50
  }

  if(window.innerWidth <= 550 ) style = {width: 40, height: 50, left: 0, zIndex: 100}

  return (
    <div
      style={style}
      className={`slide-arrow-left`}
      onClick={onClick}/>
  );
}

class BooksSlider extends Component {
  state = {
    hoverId: ''
  }

  render() {
    let defaultAmountOfItemsToShow = 5

    if(window.innerWidth <= 850 ) defaultAmountOfItemsToShow = 3

    if(window.innerWidth <= 550 ) defaultAmountOfItemsToShow = 1

    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: defaultAmountOfItemsToShow,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
        <Slider {...settings}>
          {this.props.books.map( book => {
            let discountPrice = book.price * parseInt(book.discount.value) / 100
            let isBookInTheCart = this.props.cart.some(cart => cart.bookId === book._id)
            let isFavorite = this.props.favoriteBooks ? this.props.favoriteBooks.some(id => id === book._id) : false
            let isHovered = this.state.hoverId === book._id

            return (
              <Aux key={book._id}>
                <div className="book-content">
                  <div onClick={() => this.props.context.props.history.replace(`/books/${book._id}`)}>
                    <div className="cover">
                      <div className="extra" onClick={e => e.stopPropagation()}>
                        {book.new ? <div className="new">Новинка</div> : book.discount.value !== "0" ? <div className="discount" style={{width: 80}}>Скидка {book.discount.label}</div> : null}
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
                          onMouseOver={() => isBookInTheCart ? this.setState({hoverId: book._id}) : null}
                          onMouseOut={() => isBookInTheCart ? this.setState({hoverId: ''}) : null}
                          onClick={() => {
                            if(!isBookInTheCart){
                              this.props.onAddToCart(book._id, book.price - discountPrice, book.amount)
                            } else {
                              this.props.context.props.history.push('/cart')
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
          })}
        </Slider>
      </div>
    )
  }
}

export default BooksSlider;
