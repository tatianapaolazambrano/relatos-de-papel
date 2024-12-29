import { useState, useEffect } from 'react';
import booksData from '../data/booksData';

const useBookFilter = (initialSearch = "") => {
    const [busqueda, setBusqueda] = useState(initialSearch);
    const [librosFiltrados, setLibrosFiltrados] = useState(booksData);

    // Función para filtrar libros según la búsqueda
    useEffect(() => {
        const filteredBooks = booksData.filter((libro) =>
            libro.title.toLowerCase().includes(busqueda.toLowerCase())
        );
        setLibrosFiltrados(filteredBooks);
    }, [busqueda]);

    return { busqueda, setBusqueda, librosFiltrados };
};

export default useBookFilter;
