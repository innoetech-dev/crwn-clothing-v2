import Button from "../button/button.component";
import './product-card.styles.scss'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({product}) => {
    const {name, id, price, imageUrl} = product;
    const {addItemTocart } = useContext(CartContext);
    const addProductToCart = () => addItemTocart(product);
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
        </div>

    )
}

export default ProductCard;