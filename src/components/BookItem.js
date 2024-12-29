import React, {useContext} from 'react';
import '../styles/BookItem.css';
import {useNavigate} from 'react-router-dom';
import {CartContext} from "../context/CartContext";
import {handleAddToCart, handleClick} from '../utils/utils';


const BookItem = ({book}) => {

    const {addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
            <div className="col mb-3">
                <div className="card h-100">
                    <div role="button" tabIndex={0} className="boton-imagen" onClick={() => handleClick(navigate, book.id)}>
                        <img src={`img/${book.imagen}`} className="card-img-top" alt={book.title}/>
                    </div>
                    <div className="card-body ">
                        <small className="text-muted">{book.author}</small>
                        <h2 className="card-text">${book.price}</h2>
                    </div>
                        <div className="card-footer text-center bg-white border-0">
                        <button className="btn btn-custom w-100" onClick={() => handleAddToCart(addToCart, book)}>
                                Agregar al Carrito <i className="bi bi-cart"></i>
                            </button>
                        </div>
                </div>
            </div>
    );
};

export default BookItem;

