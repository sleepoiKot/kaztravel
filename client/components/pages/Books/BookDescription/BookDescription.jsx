import React from 'react';
import { Link } from 'react-router-dom'
import Transition from 'react-transition-group/Transition';
import { Editor } from 'slate-react'
import { Value } from 'slate'

import ImageSlider from '/client/components/func/ImageSlider'
import BooksSlider from '/client/components/func/BooksSlider'

import { cartCase, cartPrice } from '/client/libs/cartRelated'

import Aux from '/client/hoc/Aux/Aux'

function numberWithSpaces(num) {
  if(isNaN(parseInt(num)))
    return ''

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


const bookDescription = ({book, cart, onAddToCart, context, favoriteBooks}) => {
  renderBookImages = () => (
    book ? book.images.map(image => (
      <li key={image._id} className="b-productCard__gallery-item">
        <a
          id={`link-description-${image._id}`}
          className="b-productCard__gallery-link js-gallery"
          href="#"
          data-lightbox="bookDescriptionImages"
          data-title={image.name}>
          <img className="b-productCard__img sel" src={image.link} alt={image.name} width="38" height="120"/>
        </a>

        <a className="b-productCard__gallery-link js-gallery" href="#">

        </a>
      </li>
    )) : null
  )

  renderBookFeatures = () => book ? book.shortDescriptions.map((feature, index) => <li key={index}>{feature}</li>) : null

  let discountPrice = book.price * parseInt(book.discount.value) / 100
  let isBookInTheCart = cart.some(cart => cart.bookId === book._id)
  let isHovered = context.state.hoverId === book._id
  let isFavorite = favoriteBooks ? favoriteBooks.some(id => id === book._id) : false

  return (
    <Aux>
      <main className="l-landingCard row" role="main">
        <div className="b-catalog__content">
          <div className="l-breadcrumbs">
            <ul className="b-breadcrumbs">
              <li className="b-breadcrumbs__item"><Link className="b-breadcrumbs__link" to="/">Главная</Link></li>
              <li className="b-breadcrumbs__item"><Link className="b-breadcrumbs__link" to="/books">Книги</Link></li>
              <li className="b-breadcrumbs__item"><Link className="b-breadcrumbs__link" to={`/books/${book._id}`}>{book.name}</Link></li>
            </ul>
          </div>
        </div>
        <div className="l-productPage">
          <div className="b-productPage">
            <div className="b-productCard__cover">
              <div className="b-productCard__gallery">
                <ul className="b-productCard__gallery--items">
                  {renderBookImages()}
                </ul>
                <ul className="b-productCard__gallery -full">
                  <li className="b-productCard__gallery-item-style_fullWidth">
                    <a
                      id={`link-description-${book.cover._id}`}
                      className="b-productCard__gallery-link js-gallery"
                      href="#"
                      data-lightbox="bookDescriptionCover">
                      <img className="b-productCard__img" alt={book.cover.name} width="318" height="540" src={book.cover.link} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="b-productCard__content">
              <h1 className="b-productCard__title">
                {book.name}&nbsp;
                {book.new ? <div className="sticker new">новинка</div> : null } { book.discount.value !== "0" ? <div className="sticker sale">Скидка - {book.discount.label}</div> : null}
              </h1>
              <h2 className="b-productCard__subtitle"></h2>
              <div className="b-productCard__descr">
                <dl className="b-productCard__list">
                  <dt>Автор:</dt><dd><a href="#">{book.author}</a></dd><br />
                  <dt>Издание:</dt><dd><a href="#">{book.publishingHouse.label}</a></dd><br />
                  <dt>Тематика:</dt><dd><a href="#">{book.subject.map(sub => sub.label).join('; ')}</a></dd><br />
                  <dt>Формат издания:</dt><dd>{book.proportions}</dd><br />
                  <dt>Возраст:</dt><dd><a href="#">{book.age.map(age => age.label).join('; ')}</a></dd>
                </dl>
                <ul className="b-productCard__features">
                  {renderBookFeatures()}
                </ul>
              </div>
              <div className="b-productCard__bottom">
                <div className="b-productCard__prices">
                  <span className="b-productCard__price">Цена:</span>
                  {book.oldPrice ? <span className="b-productCard__price -style_previous"><span style={{color: '#ff5500'}}>{numberWithSpaces(book.oldPrice)}</span></span> : null}
                  <span className="b-productCard__price -style_present">{numberWithSpaces(book.price)} тг.</span>
                </div>
                <Transition
                  in={isBookInTheCart}
                  timeout={300}>
                  {state => (
                    <a
                      className={state === 'entered' ? 'b-productCard__add -on -state_added' : 'b-productCard__add'}
                      onMouseOver={() => isBookInTheCart ? context.setState({hoverId: book._id}) : null}
                      onMouseOut={() => isBookInTheCart ? context.setState({hoverId: ''}) : null}
                      onClick={() => {
                        if(!isBookInTheCart){
                          onAddToCart(book._id, book.price - discountPrice, book.amount)
                        } else {
                          context.props.history.push('/cart')
                        }
                      }}>
                      <div className="b-productCard__basket">{isBookInTheCart ? isHovered ? "Оформить" : "В корзине" : "В корзину"}</div>
                    </a>
                  )}
                </Transition>
                <Transition
                  in={isFavorite}
                  timeout={300}>
                  {state => (
                    <a
                      className={isFavorite ? "b-productCard__favorite -state_added" : "b-productCard__favorite"}
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
                      }}
                      tooltip="Добавить в избранное">Добавить в избранное</a>
                  )}
                </Transition>
              </div>
            </div>
            <div className="newKkInfoAboutFreeDeliverUpnlClass b-productCard__cart">
              <div>
                <p style={{marginBottom: 10, height: 44}}>
                  Сейчас <Link to="/cart">в&nbsp;корзине</Link> <span>{cart.length !== 0 ? `${cart.length} ${cartCase(cart.length)} на сумму ${numberWithSpaces(cartPrice(cart))} тг.` : "нет книг"}</span>
                </p>
                <p style={{marginTop: 10}}>
                  Доставка:
                  <br />из РК – в течение 7 дней
                  <br />из РФ – в течение 14 дней
                  <br />+ доставка по городам
                </p>
                <p style={{color: '#8f8f8f', marginTop: 64, lineHeight: 1.6, position: 'relative', zIndex: 4}}>
                  Мы принимаем к оплате пластиковые карты
                  <img className="b-productCard__img" src="/img/blocks/b-productCard/logos.png" alt="Image" style={{paddingTop: 0}}/>
                </p>
                <div className="b-productCard__share" style={{marginTop: 1}}>
                  <p>Поделиться с друзьями:</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="l-wrapper row">
        <main className="l-landingCard">
          <div className="b-productPage__section b-productPage__ff b-productPage__about">
            <h2 className="b-productPage__title">Описание</h2>
            <div className="b-text">
              <Editor
                readOnly
                value={Value.fromJSON(book.description)}
                renderNode={context.renderNode}
                renderMark={context.renderMark}
              />
            </div>
          </div>
          <div className="b-productPage__section b-productPage__ff  b-productPage__about">
            <h3 className="b-productPage__subtitle">Развиваем навыки</h3>
            <ul className="b-productCard__features">
              <li>Письмо</li>
              <li>Речь</li>
              <li>Чтение</li>
              <li>Воображение</li>
              <li>Мелкую моторику</li>
              <li>Пространственное мышление</li>
              <li>Готовимся к школе</li>
            </ul>
          </div>






        </main>
      </div>
      <div className="l-main">
        {context.state.sameBooks.length >= 5 ? <div className="newest row dn-index-page-new-out">
          <h2 className="center">ПОХОЖИЕ ТОВАРЫ</h2>
          <div className="catalog-page">
             <div className="books">
               <div className="clearfix">
                 <BooksSlider
                   context={context}
                   onAddToCart={onAddToCart}
                   favoriteBooks={favoriteBooks}
                   cart={cart}
                   books={context.state.sameBooks}/>
               </div>
             </div>
           </div>

        </div> : null}
      </div>

      <div className="b-bannerPage__sectionb _brown b-illustration">
        <h2 className="b-bannerPage__title">Иллюстрации</h2>
        <ImageSlider id="illustrations" images={book.images}/>
      </div>

      <div className="l-wrapper row">
        <main className="l-landingCard">
          <div className="b-productCard__about-author b-productPage__section b-productPage__ff b-productPage__about">
            <h2 className="b-productPage__title">Про автора</h2>
            <div className="b-text">
              <p>
                Краткое описание автора
              </p>
              <a href="#" className="b-productCard__more">Смотреть все книги этого автора</a>
            </div>
          </div>
        </main>
      </div>

      <div className="l-wrapper">
        <main className="l-landingCard row" role="main">
          <div className="l-productPage l-productPage--mini">
            <div className="b-productPage b-productPage__ff">
              <div className="b-productCard__cover">
                <div className="b-productCard__gallery">
                  <ul className="b-productCard__gallery -full">
                    <li className="b-productCard__gallery-item-style_fullWidth">
                      <a
                        id={`link-description-bottom-${book.cover._id}`}
                        data-lightbox="bookDescriptionCoverBottom"
                        className="b-productCard__gallery-link js-gallery"
                        href="#">
                        <img className="b-productCard__img" alt={book.cover.name} width="238" height="540" src={book.cover.link} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="b-productCard__content">
                <h1 className="b-productCard__title">{book.name}</h1>
                <h2 className="b-productCard__subtitle">
                  {book.new ? <div className="sticker new">новинка</div> : null }&nbsp;
                  {book.discount.value !== "0" ? <div className="sticker sale">Скидка - {book.discount.label}</div> : null}
                </h2>
                <div className="b-productCard__bottom">
                  <span className="b-productCard__price">Цена:</span>
                  {book.oldPrice ? <span className="b-productCard__price -style_previous"><span style={{color: '#ff5500'}}>{numberWithSpaces(book.oldPrice)}</span></span> : null}
                  <span className="b-productCard__price -style_present">{numberWithSpaces(book.price)} тг.</span><br/><br/>
                  <Transition
                    in={isBookInTheCart}
                    timeout={300}>
                    {state => (
                      <a
                        className={state === 'entered' ? 'b-productCard__add -on -state_added' : 'b-productCard__add'}
                        onMouseOver={() => isBookInTheCart ? context.setState({hoverId: book._id}) : null}
                        onMouseOut={() => isBookInTheCart ? context.setState({hoverId: ''}) : null}
                        onClick={() => {
                          if(!isBookInTheCart){
                            onAddToCart(book._id, book.price - discountPrice, book.amount)
                          } else {
                            context.props.history.push('/cart')
                          }
                        }}>
                        <div className="b-productCard__basket">{isBookInTheCart ? isHovered ? "Оформить" : "В корзине" : "В корзину"}</div>
                      </a>
                    )}
                  </Transition>
                  <Transition
                    in={isFavorite}
                    timeout={300}>
                    {state => (
                      <a
                        className={isFavorite ? "b-productCard__favorite -state_added" : "b-productCard__favorite"}
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
                        }}
                        tooltip="Добавить в избранное">Добавить в избранное</a>
                    )}
                  </Transition>
                </div>
              </div>
              <div className="newKkInfoAboutFreeDeliverUpnlClass b-productCard__cart">
                <div>
                  <p style={{marginBottom: 10, height: 44}}>
                    Сейчас <Link to="/cart">в&nbsp;корзине</Link> <span>{cart.length !== 0 ? `${cart.length} ${cartCase(cart.length)} на сумму ${numberWithSpaces(cartPrice(cart))} тг.` : "нет книг"}</span>
                  </p>
                  <p style={{marginTop: 10}}>
                    Доставка:
                    <br />из РК – в течение 7 дней
                    <br />из РФ – в течение 14 дней
                    <br />+ доставка по городам
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Aux>
  )
}

export default bookDescription;
