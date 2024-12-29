import React from 'react';
import Checkout from '../components/Checkout';
import PurchaseSummary from "../components/PurchaseSummary";

const CheckoutView = () => {
    return (

        <div className="mt-3 mb-3">
            <h2 className="text-center mb-4">Resumen de Compra</h2>
            <div className="row">
                <div className="col-sm-8">
                    <Checkout/>
                </div>
                <div className="col-sm-4">
                    <PurchaseSummary/>
                </div>
            </div>
        </div>
);
};

export default CheckoutView;