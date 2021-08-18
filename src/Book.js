import React from 'react'
import './Book.css'
import BookList from './BookList'

const Book = () => {
    return (
        <div>
            <h1 className="brand">Books List</h1>
            <BookList />
        </div>
    )
}

export default Book