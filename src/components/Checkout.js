import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import {useNavigate} from "react-router-dom";
import {mainPage} from '../utils/utils';

const Checkout = () => {
    const { cartItems, deleteFromCart} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <>
            {cartItems.length === 0 ? (
                <div className="card mb-5">
                    <div className="card-body">
                        <h1>Su carrito está vacio</h1>
                        <button  onClick={() => mainPage(navigate)} className="btn btn-custom  mt-2">
                            Agregar libros  <i className="bi bi-cart"></i>
                        </button>
                    </div>
                </div>
            ) : (
                cartItems.map((item, index) => (
                    <div className="card mb-2" key={index}>
                    <div className="row">
                            <div className="col-sm-4 text-center">
                                <img src={`img/${item.imagen}`} alt={item.title} className="img-fluid"/>
                            </div>
                            <div className="col-sm-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <h6 className="text-muted">{item.author}</h6>
                                    <h1 className="card-text">${item.price}</h1>
                                    <p className="card-text">{item.description}</p>
                                    <button onClick={() => deleteFromCart(item.id)}
                                            className="btn btn-danger"><i className="bi bi-trash3"></i> Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                    )}
                </>
            );
            };

 export default Checkout;
