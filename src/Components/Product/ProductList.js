import React from 'react'
import {ProductInfo} from './ProductInfo';
import {ProductEdit} from './ProductEdit';
import PropTypes from 'prop-types';

export const ProductList = ({showTableView, books, removeBook, editBook, saveBook}) => {

    return (
        <>
            <div className='container'>
                <div className="row">
                    {showTableView ?
                        <ListView books={books} removeBook={removeBook} editBook={editBook} saveBook={saveBook}/>:
                        <TableView books={books} removeBook={removeBook} editBook={editBook} saveBook={saveBook}/>
                    }
                </div>
            </div>
        </>
    )
}

ProductList.propTypes = {
  books: PropTypes.object
};

export const TableView = ({ books, removeBook, editBook }) => {
    return (
        <>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th style={{ textAlign: "center" }}>#</th>
                    <th style={{ textAlign: "center" }}>id</th>
                    <th style={{ textAlign: "center" }}>title</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, i) =>
                    <tr className={book.editMode? 'selected-row': ''}>
                        <td>{i + 1}</td>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => removeBook(book.id)}>
                                Remove</button>
                        <button type="button" className="btn btn-sm btn-warning mr-2" onClick={() => editBook(book.id)}>
                        Edit</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}

export const ListView = ({ books, removeBook, editBook, saveBook }) => {
    return (
        <>
            <h1>List view</h1>
            <br/>
            <div>
                <div className="row">
                    {
                        books.map(book =>
                            book.editMode ?
                                <ProductEdit key={book.id} item={book} remove={removeBook} cancel={editBook} save={saveBook} /> :
                                <ProductInfo key={book.id} item={book} remove={removeBook} edit={editBook} />
                        )}
                </div>
            </div>
        </>
    )
}

export default ProductList;