import React from 'react'

export const ProductInfo = ({ item, remove }) => {

    return (
        <div className="col-md-4">
            <div className="card bg-info text-white">
                <div className="card-body">
                    <h4>{item.id}</h4>
                    <h3>{item.title}</h3>
                    <button className="btn btn-danger" onClick={() => remove(item.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}
