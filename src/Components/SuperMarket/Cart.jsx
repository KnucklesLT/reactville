import CartItem from './CartItem'

const Cart = ({cart, removeFromCart, setCart}) => {
  const clearCart = () => {
    setCart([])
  }

  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.map((item, index) => 
        <CartItem key={index} item={item} removeFromCart={removeFromCart}/>
      )}

      <div className="cart-total">
        <p>Total:</p>
        <p>$ Display Amount Here</p>
      </div>

      <button>CHECKOUT</button>
      <button onClick={clearCart}>CLEAR CART</button>
    </div>
  )
}

export default Cart