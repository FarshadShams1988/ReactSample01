import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import React from "react";
  
import {categories, products} from "../../GlobalData/InitialData";

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
        const index = books.findIndex(book => book.id === id)
        books[index].title = title
        books[index].editMode = false
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
                    {/* { console.log(books.find(q => q.editMode == true))} */}
                    <ProductForm item={books[books.findIndex(book => book.editMode === true)]}/>
                    {/*<ProductForm item={books[1]}/>*/}
                </div>
            </div>
        </>
    )
}
