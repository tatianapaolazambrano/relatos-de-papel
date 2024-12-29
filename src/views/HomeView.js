import React from 'react';
import useBookFilter from '../hooks/useBookFilter';
import SearchBar from "../components/SearchBar";
import TileListProduct from "../components/TitleListProduct"; // Importa el custom hook
import BookList from "../components/BookList";
import Cart from "../components/Cart";

const HomeView = () => {
    const { busqueda, setBusqueda, librosFiltrados } = useBookFilter();

    return (
        <>
            <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}/>
            <TileListProduct/>
            <BookList libros={librosFiltrados}/>
            <Cart/>
        </>
    );
};

export default HomeView;
