import React, { useState } from 'react';
import GlobalRouter from './routes/GlobalRouter';
import { CartContext } from './context/CartContext';

const App = () => {

    // Manejo del carrito
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const deleteFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart, emptyCart}}>
            <GlobalRouter />
        </CartContext.Provider>
    );
};

export default App;
