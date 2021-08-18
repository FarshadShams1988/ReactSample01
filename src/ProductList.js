import React from 'react'
import Book from './Book';
import { ProductInfo } from './ProductInfo';

export const ProductList = () => {
    const initBook = [{ id: 100, title: "HaryPotter01" },
    { id: 101, title: "HaryPotter02" },
    { id: 102, title: "HaryPotter03" }]
    const [books, setBooks] = React.useState([...initBook]);

    const removeBook = (id) =>{
        const temp = books.filter(q => q.id != id)
        console.log(temp)
        setBooks([...temp])
    }
    return (
        <>
            <div className='container'>
                <div className="row">
                    <h1>Table view</h1>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th style={{textAlign:"center"}}>#</th>
                                <th style={{textAlign:"center"}}>id</th>
                                <th style={{textAlign:"center"}}>title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book,i) =>
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-danger" onClick={() => removeBook(book.id)}>
                                            Remove</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <h1>List view</h1>
                    <div >
                        <div className="row">
                            {books.map(book =>
                                <ProductInfo item={book} remove={removeBook}/>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
