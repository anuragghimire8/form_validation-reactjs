import React from 'react'
import { useState } from 'react'
import Input from './form-fields/Input';


const App = () => {
  
  const [values,setValues]=useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
   

  });


   const formFields=[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"username",
      label:"username",
      required:true,
      pattern:"^[A-Za-z0-9]{3,16}$",
      errorMessage:"Username must include atlease 3-16 characters and shouldnt contain any special characters !",
      autocomplete:"off",

    },
      {
        id:2,
        name:"email",
        type:"email",
        placeholder:"email",
        label:"email",
        required:true,
        autocomplete:"off",
        pattern: "^[^\d][\w.-]*\d[\w.-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        errorMessage:"Valid email address"
     
      },
      {
        id:3,
        name:"password",
        type:"password",
        placeholder:"password",
        label:"password",
        required:true,
        autocomplete:"off",
        errorMessage:"password should be 8-10 characters",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      },
      {
        id:3,
        name:"confirmpassword",
        type:"password",
        placeholder:"confirmpassword",
        label:"confirmpassword",
        required:true,
        autocomplete:"off",
        errorMessage:"Password not matched",
        pattern:values.password
      },


   ];
   const onChange=(e)=>{
 
    console.log(e.target.value)
    setValues({...values,[e.target.name]:e.target.value})

   }
   const handleSubmit=(e)=>{
    e.preventDefault();
   }

  return (
    <div>
       <form onSubmit={handleSubmit}>
      {
        formFields.map((field) => (
          <Input    key={field.id} {...field}  onChange={onChange} value={values[field.name]}></Input>
                    
        ))
      }
       <button  className='button'>Submit Here</button>
       </form>   
    </div>
  )
}

export default App
