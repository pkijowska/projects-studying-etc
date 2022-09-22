import './checkout-item.styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, increaseCartItems, reduceCount, removeItem } from '../../store/cart/cart.action';

const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  return(
    <div>
      <div className='checkout-item-container'>
        <div className='image-container'>
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className='name'> {name} </span>
        <span className='quantity'>
          <div className='arrow' onClick={() => dispatch(reduceCount(cartItems, cartItem))}>
            &#10094;
          </div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={ () => dispatch(increaseCartItems(cartItems, cartItem))}>
            &#10095;
          </div>
        </span>
        <span className='price'> {price}</span>
        <div className='remove-button' onClick={()=> dispatch(removeItem(cartItems, cartItem))}>
          &#10005;
        </div>
      </div>
  </div>

  )
}

export default CheckoutItem;
