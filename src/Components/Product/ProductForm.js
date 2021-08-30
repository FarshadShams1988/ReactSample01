import {useForm} from "react-hook-form";
import React, {useEffect} from "react";

const ProductForm = ({item, save}) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({defaultValue: {...item}});

    useEffect(() => {
        reset({...item})
    }, [item]);

    function submit(data) {
         save(data.id, data.title)
    };

    return (
            <form onSubmit={handleSubmit(submit)}>
            <div className = "form-group">
                <h4>شناسه</h4>
                <input {...register("id", {required: 'true', minLength: 3})}/>
                {errors?.id?.type === 'required' && <small className='text-danger form-text'>کد اجباری است</small>}
                {errors?.id?.type === 'minLength' && <small className='text-danger form-text'>کد کمتر از 5 کاراکتر است</small>}
           </div>
            <div className = "form-group">
                <h4>عنوان</h4>
                <input {...register("title")}/>
            </div>
            <button type="submit" className="btn btn-success btn-sm mt-3">ذخیره</button>
        </form>

    )
}
export default ProductForm;