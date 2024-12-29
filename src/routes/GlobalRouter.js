import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingView from '../views/LandingView';
import HomeView from '../views/HomeView';
import BookView from '../views/BookView';
import CheckoutView from '../views/CheckoutView';
import {NotFound} from '../components/NotFound';
import Cart from "../components/Cart";

const GlobalRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingView/>}/>
                <Route caseSensitive path="/home" element={<Layout><HomeView/></Layout>}/>
                <Route caseSensitive path="/book/:id" element={<Layout><BookView/></Layout>}/>
                <Route caseSensitive path="/checkout" element={<Layout><CheckoutView/></Layout>}/>
                <Route path="*" element={<Layout><NotFound/> <Cart/> </Layout>}/>
            </Routes>
        </BrowserRouter>
    );
};

const Layout = ({children}) => (
    <div className="d-flex flex-column min-vh-100" >
        <Header/>
        <main className="mt-5 pt-5">
            <div className="container"> {children}</div>
        </main>
        <Footer/>
    </div>
);

export default GlobalRouter;

