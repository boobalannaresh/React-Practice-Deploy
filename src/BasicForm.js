import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";


const formValidationSchema = yup.object({
    email: yup
      .string()
      .min(8, "Need a bigger Email")
      .required("A cool Email is in need")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
    password: yup
      .string()
      .min(4, "Need a bigger Password")
      .required("A cool Password is in need"),
  });
  
  export function BasicForm() {
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
  
      validationSchema: formValidationSchema,
  
      onSubmit: (values) => {
        console.log("Form Values:", values);
      },
    });
    return (
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <input
          value={values.email}
          type="email"
          placeholder="Enter your Email Id"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email ? errors.email : null}
  
        <input
          value={values.password}
          type="text"
          placeholder="Enter your Password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password
          ? errors.password
          : null}
  
        <h2>Errors</h2>
        <pre>{JSON.stringify(errors)}</pre>
  
        <h2>Touched</h2>
        <pre>{JSON.stringify(touched)}</pre>
  
        <button type="submit">Submit</button>
      </form>
    );
  }
