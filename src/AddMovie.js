import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";

export function AddMovie() {

  const movieValidationSchema = yup.object({
   name:yup.string().required(),
   poster:yup.string().required().min(4),
   trailer:yup.string().required().min(4).url(),
   rating:yup.number().required().min(0).max(10),
   summary:yup.string().required().min(20),
  })

 const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
   initialValues: {
     name: "",
     poster: "",
     trailer:"",
     rating:"",
     summary:"",
   },
   
   validationSchema : movieValidationSchema,

   onSubmit:(newMovie)=>{
     console.log("Form Values:", newMovie)
     addMovie(newMovie)
   },

 })

 const navigate = useNavigate();

 const addMovie = (newMovie) => {

  ////-----> Follow 3 step's <-----////

  //// Step's
  //// 1. Method => POST
  //// 2. body => data & JSON(string)
  //// 3. header => JSON 

  fetch(`${API}/movies`,{
   method: "POST",
   body: JSON.stringify(newMovie),
   headers: { "Content-type" : "application/json" },
  }).then (()=> navigate("/movies"));

 };

 return (
   <form onSubmit={handleSubmit} className="add-movie-form"  >
     <TextField
       id="outlined-basic"
       label="Name"
       variant="outlined"
       placeholder="Enter a Name"
       value={values.name}
       onChange={handleChange}
       name="name"
       onBlur={handleBlur}
       error={touched.name && errors.name}
       helperText={touched.name && errors.name ? errors.name : null}
       color="success"

     />
     

     <TextField
       id="outlined-basic"
       label="Poster"
       variant="outlined"
       placeholder="Enter a Poster"
       value={values.poster}
       onChange={handleChange}
       name="poster"
       onBlur={handleBlur}
       error={touched.poster && errors.poster}
       helperText={touched.poster && errors.poster ? errors.poster : null}
     />
     

     <TextField
       id="outlined-basic"
       label="Trailer"
       variant="outlined"
       placeholder="Enter a Trailer"
       value={values.trailer}
       onChange={handleChange}
       name="trailer"
       onBlur={handleBlur}
       error={touched.trailer && errors.trailer}
       helperText= {touched.trailer && errors.trailer ? errors.trailer : null}
     />
    

     <TextField
       id="outlined-basic"
       label="Rating"
       variant="outlined"
       placeholder="Enter a Rating"
       value={values.rating}
       onChange={handleChange}
       name="rating"
       onBlur={handleBlur}
       error={touched.rating && errors.rating}
       helperText={touched.rating && errors.rating ? errors.rating : null}
     />
     

     <TextField
       id="outlined-basic"
       label="Summary"
       variant="outlined"
       placeholder="Enter a Summary"
       value={values.summary}
       onChange={handleChange}
       name="summary"
       onBlur={handleBlur}
       error={touched.summary && errors.summary }
       helperText={touched.summary && errors.summary ? errors.summary : null}
     />
     

     <Button variant="contained" type="submit">
       Add-Movie
     </Button>
   </form>
 );
}
