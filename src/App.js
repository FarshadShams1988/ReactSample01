import React, {useState} from 'react'
import './App.css'
import {ProductList} from './ProductList'

export const App = () => {
  const [showBtn, setShowBtn] = useState(true);
  const ShowBtnClick = () => {
    setShowBtn(!showBtn)
  }
  return (
    <>
      <div>
        <h1 className="brand" style={{ backgroundColor: "#67b367", textAlign: "center" }}>Session01 react</h1>
      </div>
      <hr />
      <div>
        <button className="btn btn-secondary ml-5" onClick={() => ShowBtnClick()}>{showBtn? "List View":"Table View"}</button>
      </div>
      <hr />
      <div>
        <ProductList showTableView={showBtn} />
      </div>
    </>
  )
}

export default App