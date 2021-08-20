import React from 'react'

export const ProductInfo = ({ item, remove, edit }) => {

    return (
        <div className="col-md-4">
            <div className="card bg-info text-white">
                <div className="card-body">
                    <h4>{item.id}</h4>
                    <h3>{item.title}</h3>
                    <button className="btn btn-danger" onClick={() => remove(item.id)}>Remove</button>
                    <button className="btn btn-warning ml-2" onClick={() => edit(item.id)}>Edit</button>
                </div>
            </div>
        </div>
    )
}
