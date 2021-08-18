import React from 'react'
import { BoxList } from './BoxList'
import './App.css'
import { ProductList } from './ProductList'

export const App = () => {
  return (
    <>
      <div>
        <h1 className="brand" style={{ backgroundColor: "red", textAlign: "center" }}>Session01 react</h1>
      </div>
      <div>
        <h2 className="brand">Farshad</h2>
      </div>
      <div>
        <ProductList />
      </div>
    </>
  )
}

export default App