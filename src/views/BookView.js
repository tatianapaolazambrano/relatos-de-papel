import React from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import Cart from "../components/Cart";
import booksData from "../data/booksData";
import {NotFound} from "../components/NotFound";

const BookView = () => {

    const { id } = useParams();
    const book = booksData.find(book => book.id === id);

    if (!book) {
        return (
            <>
                <NotFound />
                <Cart />
            </>
        );

    }

    return (
        <div>
            <BookDetail book={book} />
            <Cart />
        </div>
    );
};

export default BookView;