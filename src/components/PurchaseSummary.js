import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext } from "../context/CartContext";
import {mainPage,handleCheckout,calcularTotal} from '../utils/utils';

const PurchaseSummary = () => {

    const navigate = useNavigate();
    const {emptyCart,cartItems } = useContext(CartContext);

    return (
            <div className="card">
                <div className="card-body">
                     <div className="d-flex">
                        <input
                            id="cupon"
                            type="text"
                            placeholder="Sólo cupones de descuento"
                            className="form-control"
                        />
                        <button type="button" className="btn btn-outline-dark ms-2">Añadir</button>
                    </div>

                        <h1>Total: $ {calcularTotal(cartItems)}</h1>

                        <button onClick={() => mainPage(navigate)} className="btn btn-custom w-100 mt-2">
                            Agregar más libros <i className="bi bi-cart"></i>
                        </button>
                        <button onClick={() => handleCheckout(cartItems, emptyCart, navigate)} className="btn btn-warning w-100 mt-2">
                            <i className="bi bi-wallet"></i> Proceder al Pago
                        </button>

                    </div>
                </div>
                );
                };

export default PurchaseSummary;