import React from 'react'

const BookList = () => {
    const [Books, setBook] = React.useState([{ id: 1, code: '001', bName: "HaryPotter01" },
    { id: 2, code: '002', bName: "HaryPotter02" },
    { id: 3, code: '003', bName: "HaryPotter03" }]);

    const Add = () => {
        setBook([...Books, { id: 4, code: '004', bName: 'HaryPotter04' }]);
    }    
    return (
        <div>
            <button onClick={Add}>Add New Book</button>
           {Books.map(book => 
               <div>
                   <h2>Book Name: {book.bName}</h2>
                   <h3>Book Code: {book.code}</h3>
               </div>
           )} 
        </div>
    )
}

export default BookList