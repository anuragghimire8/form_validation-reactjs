import React, { useState } from 'react'
import "./style.css"

const Input = ({label,onChange,errorMessage,...othersProps}) => {
    const [focused,setFocused]=useState(false)
    const onBlur=()=>{
      setFocused(true)
    }
  return (

    <div className='inputField'>
    <label>{label}</label>
    <input  {...othersProps} onChange={onChange} onBlur={onBlur} onFocus={()=> othersProps.name==="confirmpassowrd" && setFocused(true)} focused={focused.toString()}></input>
    <span>{errorMessage}</span>
         
    </div>
  )
}

export default Input
   