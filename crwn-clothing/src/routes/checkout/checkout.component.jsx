import './checkout.styles.scss';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  //setupp reducers and pass cartobj. when clicked find that item in the cart and increase or decrease count => {})

  //also increase cart count

  //also setup total

  return(
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  )
}

export default Checkout;
