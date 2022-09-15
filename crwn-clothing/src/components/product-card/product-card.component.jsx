import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({product}) => {
  const {name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}/>
      <div className="footer">
        <span className="price">{price}</span>
        <span className="name">{name}</span>
      </div>
      <Button buttonType="inverted"> Add to cart</Button>
    </div>
  )
}

export default ProductCard;
