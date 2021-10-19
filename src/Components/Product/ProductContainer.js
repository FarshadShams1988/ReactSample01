import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
  
import {categories, products} from "../../GlobalData/InitialData";
import react from "react";

export const ProductContainer = ({ item }) => {
    const [books, setBooks] = React.useState([...products]);

    const removeItem = (id) => {
        const temp = books.filter(q => q.id !== id)
        setBooks([...temp])
    }

    const editItem = (id, mode=true) => {
        books.map(book => {book.editMode = false})
        const temp = books.findIndex(book => book.id === id)
        books[temp].editMode = mode
        setBooks([...books])
    }

    const saveItem = (id, title) => {
        console.log(id, title)
        let index = books.findIndex(book => book.id == id)
        if (index > 0) {
            books[index].title = title
            books[index].editMode = false
        }
        else {
            books.push({ id: id, categoryID: 0, title: title, price: 0, editMode: false });
        }
        setBooks([...books])
    }
    return(
        <>
            <div className="card bg-light mt-3 mb-5">
                <h2>مدیریت محصولات</h2>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <ProductList books={books} removeBook={removeItem} editBook={editItem} saveBook={saveItem}/>
                </div>
                <div className="col-md-5">
                    <ProductForm item={books[books.findIndex(book => book.editMode === true)]} save={saveItem}/>
                </div>
            </div>
        </>
    )
}
