import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {CartContext} from "../context/CartContext";
import {handleAddToCart, handleClick} from '../utils/utils';

const BookItem = ({book}) => {

    const {addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
            <div className="col mb-3">
                <div className="card h-100">
                    <img src={`img/${book.imagen}`} className="card-img-top" alt={book.title}/>
                    <div className="card-body">
                        <small  className="text-muted">{book.author}</small >
                        <h2 className="card-text">${book.price}</h2>
                        <button className="btn btn-primary me-2" onClick={() => handleClick(navigate, book.id)}>
                            <i className="bi bi-eye"></i> Ver detalle
                        </button>
                        <button className="btn btn-custom" onClick={() => handleAddToCart(addToCart, book)}>
                            Agregar <i className="bi bi-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
            );
 };

export default BookItem;

