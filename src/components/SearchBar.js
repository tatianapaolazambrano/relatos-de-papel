import React from "react";
import '../styles/SearchBar.css';

const SearchBar = ({ busqueda, setBusqueda }) => {
    return (
        <div className="search-bar bg-purple fixed-top mt-5 py-2">
            <div className="container">
                <input
                    id="busqueda"
                    type="text"
                    placeholder="Buscar por título del libro"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="form-control"
                />
            </div>
        </div>
    );
};

export default SearchBar;