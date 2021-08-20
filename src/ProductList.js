import React from 'react'
import {ProductInfo} from './ProductInfo';
import {ProductEdit} from './ProductEdit';

const initBook = [
    { id: 100, title: "HarryPotter01", editMode: false },
    { id: 101, title: "HarryPotter02", editMode: false },
    { id: 102, title: "HarryPotter03", editMode: false }]

export const ProductList = ({ showTableView }) => {
    const [books, setBooks] = React.useState([...initBook]);

    const removeBook = (id) => {
        const temp = books.filter(q => q.id !== id)
        setBooks([...temp])
    }

    const editBook = (id, mode=true) => {
        books.map(book => {book.editMode = false})
        const temp = books.findIndex(book => book.id === id)
        books[temp].editMode = mode
        setBooks([...books])
    }

    const saveBook = (id, title) => {
        console.log(id, title)
        const index = books.findIndex(book => book.id === id)
        books[index].title = title
        books[index].editMode = false
        setBooks([...books])
    }


    return (
        <>
            <div className='container'>
                <div className="row">
                    {showTableView ?
                        <TableView books={books} removeBook={removeBook} editBook={editBook} saveBook={saveBook}/> :
                        <ListView books={books} removeBook={removeBook} editBook={editBook} saveBook={saveBook}/>
                    }
                </div>
            </div>
        </>
    )
}

export const TableView = ({ books, removeBook, editBook }) => {
    return (
        <>
            <h1>Table view</h1>
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
                    <tr>
                        <td>{i + 1}</td>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>
                            <button type="button" className="btn btn-sm btn-danger" onClick={() => removeBook(book.id)}>
                                Remove</button>
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
            <div >
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