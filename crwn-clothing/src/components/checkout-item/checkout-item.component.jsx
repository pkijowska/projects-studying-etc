import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { reduceCount, increaseCount } = useContext(CartContext);
  const removeFromCart = () => reduceCount(cartItem);
  const increaseCountInCart = () => increaseCount(cartItem);

  return(
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeFromCart}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={ increaseCountInCart }>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' >
        &#10005;
      </div>
    </div>

  )
}

export default CheckoutItem;
