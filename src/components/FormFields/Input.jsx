import React, { useState } from 'react';
import './style.css'
const Input = ({label,handleChange,errorMessage, ...otherProps}) => {

  const [focused, setFocused] = useState(false)
  
  return (
    <div className='inputfield'>
      <label htmlFor="">{label}</label>
      <input 
      onChange={handleChange}
       {...otherProps}  
       onBlur={()=>setFocused(true)}
       focused = {focused.toString()}
       />
      <span>{errorMessage} </span>
    </div>
  );
};

export default Input;