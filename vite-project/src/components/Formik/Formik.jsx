import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Formik = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2, "Must have at least 2 characters!").required('Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(6, "Must have at least 6 characters!").required('Password is required')
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm(); // to clear the form after submission
        }
    });

    // handling error messages. (these will show when the user submits the form without filling the required fields)
    const nameError = formik.touched.name && formik.errors.name && (<span style={{color: 'red'}}>{formik.errors.name}</span>);
    const emailError = formik.touched.email && formik.errors.email && (<span style={{color: 'red'}}>{formik.errors.email}</span>);
    const passwordError = formik.touched.password && formik.errors.password && (<span style={{color: 'red'}}>{formik.errors.password}</span>);

  return (
    <div>
        <h2>User Signup</h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
            <br />
            {nameError} {/* displaying error message */}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
            <br />
            {emailError} {/* displaying error message */}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
            <br />
            {passwordError} {/* displaying error message */}
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Formik
