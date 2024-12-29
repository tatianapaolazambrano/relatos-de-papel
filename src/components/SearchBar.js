import React from "react";
import '../styles/SearchBar.css';
const SearchBar = ({ busqueda, setBusqueda }) => {
    return (
        <div className="search-bar">
               <input
                id="busqueda"
                type="text"
                placeholder="Buscar por título del libro"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="form-control"
                />
        </div>
    );
};

export default SearchBar;
