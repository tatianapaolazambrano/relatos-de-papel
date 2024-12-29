import React from 'react';
import BookItem from '../components/BookItem';

const BookList = ({ libros }) => {
    return (
        <div className='row row-cols-1 row-cols-md-4'>
            {libros.length === 0 ? (
                <h4>No se encontraron libros</h4>
            ) : (
                libros.map((book) => (
                    <BookItem key={book.id} book={book} />
                ))
            )}
        </div>
    );
};

export default BookList;