export const cartCase = (cartlength) => {
  let lastNumber = cartlength.toString().charAt(cartlength.length - 1)
  const knigi = [2, 3, 4]
  const knig = [0, 5, 6, 7, 8, 9]

  if(cartlength.length === 2 && cartlength.toString().charAt(0) === "1") return 'книг'

  if(parseInt(lastNumber) === 1) return 'книга'
  if(knigi.includes(parseInt(lastNumber))) return 'книги'
  if(knig.includes(parseInt(lastNumber))) return 'книг'
}

export const cartPrice = (cart) => {
  let price = 0
  cart.forEach( c => price += c.price)
  return price
}

export const numberWithSpaces = (num) => {
  if(isNaN(parseInt(num)))
    return ''

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
