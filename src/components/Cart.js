import React, {useContext} from 'react';
import '../styles/Cart.css';
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext";
import {handleScrollToTop} from '../utils/utils';

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const itemCount = cartItems.length;

    return (
        <div className="cart">
            <p className="item-count">{itemCount}</p>
            <i className="bi bi-cart"></i>
            <p><Link to="/checkout" onClick={() => handleScrollToTop()}  >Carrito</Link></p>
        </div>
    );
};

export default Cart;

