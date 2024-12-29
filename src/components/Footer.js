import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-my mt-auto py-3 text-white">
            <div className="container text-center">
                <h5><i className="bi bi-book"></i> Librería Relatos de Papel</h5>
                <p className="mb-2">Todos los derechos reservados</p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-white">
                        <i className="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="#" className="text-white">
                        <i className="bi bi-twitter fs-4"></i>
                    </a>
                    <a href="#" className="text-white">
                        <i className="bi bi-instagram fs-4"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;