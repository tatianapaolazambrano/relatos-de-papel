import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header bg-purple fixed-top">
            <div className="container d-flex justify-content-between align-items-center py-4">
                <h5 className="mb-0 text-white" ><i className="bi bi-book"></i> Librería Relatos de Papel</h5>
            </div>
        </header>
    );
};

export default Header;