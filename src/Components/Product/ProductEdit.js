import React from 'react'
import { useForm } from "react-hook-form";

export const ProductEdit = ({ item, cancel, save }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    function submit(data) {
        save(item.id, data.title)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="col-md-4">
                <div className="card bg-primary text-white">
                    <div className="card-body">
                        <div>
                            <h4>Title</h4>
                        </div>
                        <input defaultValue={item.id} {...register("id")}/>
                        <input defaultValue={item.title} {...register("title", { required: true })}/>
                        {errors.title && <span>This field is required</span>}

                        <button type="submit" className="btn btn-success btn-sm">Save</button>
                        <button className="btn btn-secondary btn-sm" onClick={() => cancel(item.id, false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </form>
    )
}