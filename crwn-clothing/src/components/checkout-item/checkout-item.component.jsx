import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { reduceCount, increaseCount, removeItem} = useContext(CartContext);

  return(
    <div>
      <div className='checkout-item-container'>
        <div className='image-container'>
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className='name'> {name} </span>
        <span className='quantity'>
          <div className='arrow' onClick={() => reduceCount(cartItem)}>
            &#10094;
          </div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={ () => increaseCount(cartItem) }>
            &#10095;
          </div>
        </span>
        <span className='price'> {price}</span>
        <div className='remove-button' onClick={()=> removeItem(cartItem)}>
          &#10005;
        </div>
      </div>
  </div>

  )
}

export default CheckoutItem;
