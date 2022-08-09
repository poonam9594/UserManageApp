import React from 'react';

import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
  const formik = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      img:'',
    },
    onSubmit : values=>{
      console.log("form data",values)
      axios.post('https://reqres.in/api/users?page=1',{
        firstName:values.firstName,
        lastName:values.lastName,
        email:values.email,
        img:values.img
      })
      .then((result)=>{
        console.log(result.data); 
        toast.success('Submitted Successfully',{
          position:"top-center"
        });
    }).catch(error=>{
      console.log(error)
    })



    },
 

    validate:values=>{
      //values.firstName values.lastName values.email
      //errors.firstName errors.lastName errors.email
      let errors={};

      if(!values.firstName){
        errors.firstName='Required'
      }
      if(!values.lastName){
        errors.lastName='Required'
      }
      if(!values.firstName){
        errors.email='Required'
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors
    }

  })
  // console.log("value",formik.values)
  
  return (
    
    <div style={{marginLeft:"500px", marginTop:"100px"}}>
    <h1>Contact Form</h1><br/>
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
      <label htmlFor="firstName" id="fName"> First Name</label>
      <input type="text" id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName}/>
      {formik.errors.firstName?<div className="error">{formik.errors.firstName}</div>:null}
      </div>
      <div className="form-control">
      <label htmlFor="lastName" id="lName"> Last Name</label>
      <input type="text" id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName}/>
      {formik.errors.lastName?<div className="error">{formik.errors.lastName}</div>:null}
      </div>
      <div className="form-control">
      <label htmlFor="lastName"> Email</label>
      <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
      {formik.errors.email?<div className="error">{formik.errors.email}</div>:null}
      </div>
      <label htmlFor="img">Upload Photo</label>
      <input type="file" id="img" name="img" onChange={formik.handleChange} value={formik.values.img}/>
      <button type="submit">Submit</button>
    </form>
    <ToastContainer />
  </div>
    
  );
};

export default ContactForm;
