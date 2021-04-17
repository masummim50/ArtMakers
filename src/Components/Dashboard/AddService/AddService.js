import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';

const AddService = () => {
  const [success, setSuccess] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [imageLink, setImageLink]= useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const clearform = ()=> {
    document.getElementById('name').value = '';
    document.getElementById('description').value='';
    document.getElementById('price').value ='';
    document.getElementById('file').value= '';
  };
  const showSuccess = ()=>{
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false)
    }, 2000);
  }
  const onSubmit = data => {
    data.image = imageLink;
    console.log(data)
    fetch('https://frozen-dawn-42451.herokuapp.com/addservice',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    })
    clearform()
    showSuccess()
  };
  const handleImageUpload = e=> {
    setSpinner(true);
    console.log(e.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'e714769a5c6946f2db13d49ca7ee48b3');
    imageData.append('image', e.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imageData).then(res => {
      setImageLink(res.data.data.display_url);
      setSpinner(false);
    })
    
  }
  return (
    <div>
      <div className="row">
        <h2 className="text-center">Add a new service</h2>
        {success && <h3 className="text-success text-center">Service Added Successfully</h3> }
        <div className="col-md-6 offset-md-3">
            <form className="p-1 mx-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Service Name" id="name" className='form-control mt-4' {...register("serviceTitle",{required:true})} />
              {errors.serviceTitle && <span className="text-danger">This field is required</span>}
              <input placeholder="Service Description" id="description" className='form-control mt-4' {...register("serviceDescription", { required: true })} />
              {errors.serviceDescription && <span className="text-danger">This field is required</span>}
              <input placeholder="Price" id="price" type='number' className='form-control mt-4' {...register("price", { required: true })} />
              {errors.price && <span className="text-danger">This field is required</span>}
              <input onChange={handleImageUpload} className='form-control mt-4' type='file' id="file" name='file' />
              {errors.exampleRequired && <span className="text-danger">This field is required</span>}

              {
                spinner ? <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Uploading image...
              </button>: <input className="btn btn-success" type="submit" />
              }
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;