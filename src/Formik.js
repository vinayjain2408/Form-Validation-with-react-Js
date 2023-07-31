import React from 'react'
import "./Formik.css"
import { useFormik } from 'formik'
import { signUpSchema } from './schemas/Regex'


const initialValues ={
    name : "",
    email: "",
    password : "",
    confirm_password :"",
}
function Formik() {
    const {values , errors,touched,handleBlur,handleChange,handleSubmit}  = useFormik({
        initialValues : initialValues,
        validationSchema:signUpSchema,
        onSubmit : (values , action)=>{
            console.log(values)
            action.resetForm()
        }
    })
    // console.log(Formik)
    // console.log(errors)
  return (
    <div className='form-validation'>
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit}>
            <input type='text'
            placeholder='Enter Name'
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            ></input><br />
            {errors.name && touched.name ?<p>{errors.name}</p>: null}

            <input type='email'
            placeholder='Enter Email'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            ></input><br />
            {/* <p>{errors.email}</p> */}
            {errors.email && touched.email ?<p>{errors.email}</p>: null}

            <input type='password'
            placeholder='Enter password'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            ></input><br />
            {/* <p>{errors.password}</p> */}
            {errors.password && touched.password ?<p>{errors.password}</p>: null}


            <input type='password'
            placeholder='Enter Confirm password'
            name='confirm_password'
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            ></input><br />
            {/* <p>{errors.confirm_password}</p> */}
            {errors.confirm_password && touched.confirm_password ?<p>{errors.confirm_password}</p>: null}

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Formik