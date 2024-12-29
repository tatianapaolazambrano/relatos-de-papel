import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {CartContext} from "../context/CartContext";
import {handleAddToCart, mainPage} from '../utils/utils';

const BookDetail = ({ book }) => {

    const { addToCart} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className="card mt-5 mb-5">
            <div className="row">
                <div className="col-sm-3 text-center">
                    <img src={`../img/${book.imagen}`} alt={book.title} className="img-fluid"/>
                </div>
                <div className="col-sm-9">
                    <div className="card-body">
                        <h1 className="card-title">{book.title}</h1>
                        <h5 className="text-muted"> {book.author}</h5>
                        <h2 className="card-title"> ${book.price}</h2>
                        <p className="card-text"> {book.description}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-primary me-2" onClick={() => mainPage(navigate)}>
                    <i className="bi bi-arrow-return-left"></i> Volver
                </button>
                <button className="btn btn-custom"  onClick={() => handleAddToCart(addToCart, book)}>
                    Agregar al Carrito <i className="bi bi-cart"></i>
                </button>
            </div>
        </div>
    );
};

export default BookDetail;
