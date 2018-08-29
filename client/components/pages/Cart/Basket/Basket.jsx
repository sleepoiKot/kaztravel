import React from 'react';

import CartItem from './CartItem/CartItem'

import CartItemsForOrderModal from './CartItemsForOrderModal/CartItemsForOrderModal'
import CartClearModal from './CartClearModal/CartClearModal'
import OrderingDetails from './OrderingDetails/OrderingDetails'
import MobileUsersCartTable from './MobileUsersCartTable/MobileUsersCartTable'

const basket = ({context, books}) => {
  renderCartItemsList = () => books.map(book => <CartItem key={book._id} context={context} book={book}/> )

  return (
    <div className="basket catalog row clearfix seria">
      <div className="cart">
        <div className="cart__title">Корзина</div>
        {books.length !== 0 ?
          <div className="list">
            { window.innerWidth <= 480 ?
              <MobileUsersCartTable context={context} books={books} />
              :
              <div className="row like-table-row">
                <table className="table table-responsive">
                  <thead>
                    <tr>
                      <th className="col-4">Товары</th>
                      <th className="col col-lg-2 text-center">Количество</th>
                      <th className="col col-lg-2 text-center">Цена без скидки</th>
                      <th className="col col-lg-2 text-center">Цена со скидкой</th>
                      <th className="col col-lg-2 text-center">Удалить из корзины</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderCartItemsList()}
                  </tbody>
                </table>
              </div>
            }
            <OrderingDetails context={context} books={books}/>
          </div>
          :
          <div className="list">
            <div className="list__item item" style={{padding: '30px 10px'}}>
              <div className="cabinet" style={{textAlign: 'center', margin: '0 auto'}}>
                {context.props.cart.length !== 0 ? <p style={{marginBottom: 24}}>У Вас в корзине имеются книги, которых нет в наличии</p> : <p style={{marginBottom: 24}}>У Вас в корзине нет книг</p>}
                {context.props.cart.length !== 0 ?
                  <button className="btn" type="button" onClick={() => context.props.onCartClear()}>Очистить корзину</button>
                  :
                  <button className="btn" type="button" onClick={() => context.props.history.push('/books')}>Отправиться на поиски увлекательных книг</button>}
              </div>
            </div>
          </div>}
      </div>
      <CartItemsForOrderModal amount={context.state.itemAmount} id="cart-items-for-order-modal"/>
      <CartClearModal onConfirm={context.props.onCartClear} id="cart-clear-modal"/>
    </div>
  );
}

export default basket;
