import Button from "../button/button.component";
import './product-card.styles.scss'

const ProductCard = ({product}) => {
    const {name, id, price, imageUrl} = product;
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='iverted'>Add to Cart</Button>
        </div>

    )
}

export default ProductCard;