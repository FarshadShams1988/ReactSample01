import {useForm} from "react-hook-form";
import React from "react";

const ProductForm = ({item}) => {
console.log(item);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({defaultValue: {...item}});

    function submit(data) {
console.log('hi '+data);
    }

    return (

            <form onSubmit={handleSubmit(submit)}>
                {console.log(item)}
            <div>
                <h4>شناسه</h4>
                {/*<input value={item.id} {...register("id")}/>*/}
            </div>
            <div>
                <h4>عنوان</h4>
                {/*<input value={item.title} {...register("title")}/>*/}
            </div>
            <button type="submit" className="btn btn-success btn-sm mt-3">ذخیره</button>
        </form>

    )
}
export default ProductForm;