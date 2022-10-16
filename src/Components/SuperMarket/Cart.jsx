import CartItem from './CartItem'

const Cart = ({cart, removeFromCart, setCart, handleExchange}) => {
  const format = (num) => (Math.round(num * 100) / 100).toFixed(2)
  const total = format(cart.reduce((sum, item) => {
    return item.quantity > 1 
    ? sum + (item.price * item.quantity)
    : sum + item.price
  }, 0))
  
  
  const clearCart = () => {
    setCart([])
  }

  const handleCheckout = () => {
    handleExchange(total)
    clearCart()
  }

  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.map((item, index) => 
        <CartItem key={index} item={item} removeFromCart={removeFromCart}/>
      )}

      <div className="cart-total">
        <p>Total:</p>

        <p>${total}</p>
      </div>

      <button onClick={handleCheckout}>CHECKOUT</button>
      <button onClick={clearCart}>CLEAR CART</button>
    </div>
  )
}

export default Cart