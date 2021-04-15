import React from 'react';
import { useForm } from 'react-hook-form';

const ReviewForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='n'>
      <div className="row">
        <div className="col-md-8">
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />
            
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;