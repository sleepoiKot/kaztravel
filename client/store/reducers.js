import * as actionTypes from './actions';

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems")) ? JSON.parse(localStorage.getItem("cartItems")) : []

const initialState = {
    ageFilter: [],
    subjectFilter: [],
    publishingHouseFilter: [],
    madeInKz: false,
    cart: cartItemsFromLocalStorage,
    searchQuery: '',
    new: false,
    lowPrice: false,
    highPrice: false,
    limit: 20
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FILTER_AGE:
            return {
                ...state,
                ageFilter: action.newArray
            }
        case actionTypes.FILTER_SUBJECT:
            return {
                ...state,
                subjectFilter: action.newArray
            }
        case actionTypes.FILTER_PUBLISHING_HOUSE:
            return {
                ...state,
                publishingHouseFilter: action.newArray
            }
        case actionTypes.FILTER_MADE_IN_KZ:
            return {
                ...state,
                madeInKz: !state.madeInKz
            }
        case actionTypes.BOOK_ADD_TO_CART:
            const cartItems = [...state.cart]
            let cartObj = {
              bookId: action.bookId,
              price: action.price,
              amount: action.amount ? 1 : 0,
              forOrder: action.amount ? 0 : 1
            }

            cartItems.push(cartObj)
            localStorage.setItem('cartItems', JSON.stringify(cartItems))

            return {
                ...state,
                cart: cartItems
            }
        case actionTypes.SEARCH_BOOK:
            return {
                ...state,
                searchQuery: action.searchQuery
            }
        case actionTypes.SORT_BOOK_BY_NEW:
            return {
                ...state,
                new: !state.new,
                lowPrice: false,
                highPrice: false
            }
        case actionTypes.SORT_BOOK_BY_LOW_PRICE:
            return {
                ...state,
                lowPrice: !state.lowPrice,
                new: false,
                highPrice: false
            }
        case actionTypes.SORT_BOOK_BY_HIGH_PRICE:
            return {
                ...state,
                highPrice: !state.highPrice,
                new: false,
                lowPrice: false
            }
        case actionTypes.MINUS_BOOK_AMOUNT:
          let cartBooksMinus = [...state.cart]
          let cartItemsWithMinusAmount = cartBooksMinus.map(book => {
            if(book.bookId === action.bookId && book.amount === 0 && book.forOrder > 1){
              return {
                ...book,
                forOrder: book.forOrder -= 1,
                price: book.price -= action.price
              }
            }
            if(book.bookId === action.bookId && book.amount !== 0 && book.forOrder >= 1){
              return {
                ...book,
                forOrder: book.forOrder -= 1,
                price: book.price -= action.price
              }
            }
            if(book.bookId === action.bookId && book.amount > 1) {
              return {
                ...book,
                amount: book.amount -= 1,
                price: book.price -= action.price
              }
            }
            return book
          })

          return {
              ...state,
              cart: cartItemsWithMinusAmount
          }
        case actionTypes.PLUS_BOOK_AMOUNT:
          let cartBooksPlus = [...state.cart]
          let cartItemsWithPlusAmount = cartBooksPlus.map(book => {
            if(book.bookId === action.bookId) {
              return {
                ...book,
                amount: book.amount += 1,
                price: book.price += action.price
              }
            }
            return book
          })

          return {
              ...state,
              cart: cartItemsWithPlusAmount
          }
        case actionTypes.PLUS_BOOK_FOR_ORDER:
          let cartBooksPlusOrder = [...state.cart]
          let cartItemsWithPlusForOrder = cartBooksPlusOrder.map(book => {
            if(book.bookId === action.bookId) {
              return {
                ...book,
                forOrder: book.forOrder += 1,
                price: book.price += action.price
              }
            }

            return book
          })

          return {
              ...state,
              cart: cartItemsWithPlusForOrder
          }
        case actionTypes.REMOVE_BOOK_FROM_CART:
          let cartBooksRemove = [...state.cart]
          let newCartBooks = cartBooksRemove.filter( book => book.bookId !== action.bookId)

          let cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"))
          let removedCartItemsFromLocalStorage = cartItemsFromLocalStorage.filter(cartItem => cartItem.bookId !== action.bookId)
          localStorage.setItem('cartItems', JSON.stringify(removedCartItemsFromLocalStorage))

          return {
              ...state,
              cart: newCartBooks
          }
        case actionTypes.SET_VALUE_FOR_ORDER:
          let cartItemsForSetValue = [...state.cart]
          let cartItemsWithNewValue = cartItemsForSetValue.map(item => {
            if(item.bookId === action.bookId){
              return {
                ...item,
                amount: action.amount,
                forOrder: action.order
              }
            }

            return item
          })

          return {
              ...state,
              cart: cartItemsWithNewValue
          }
        case actionTypes.CLEAR_CART:
          return {
              ...state,
              cart: []
          }
        case actionTypes.RESET_FILTERS:
          return {
            ...state,
            ageFilter: [],
            subjectFilter: [],
            publishingHouseFilter: [],
            madeInKz: false,
            searchQuery: '',
            new: false,
            lowPrice: false,
            highPrice: false,
            limit: 20
          }
        case actionTypes.LIMIT:
          return {
            ...state,
            limit: state.limit + 20
          }
    }
    return state;
};

export default reducer;
