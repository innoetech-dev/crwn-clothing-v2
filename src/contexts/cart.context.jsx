import { createContext, useState } from "react";
import CartItem from "../components/cart-item/cart-item.component";

const addCartItem = (cartItems, productToAdd) => {
    //find if cart items constais product to Add
    const exisitingCartItem =cartItems.find((cartItem) => cartItem.id == productToAdd.id);
    //if found, increment by 1
    if(exisitingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem);
    }
    //return new array with modified cart items/new cart item
    return [...cartItems, {productToAdd, quantity: 1}];
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemTocart: () => {}
});

export const CartProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const addItemTocart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value = { isCartOpen, setIsCartOpen, addItemTocart, cartItems};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}