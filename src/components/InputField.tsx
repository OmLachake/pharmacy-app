'use client'

import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

interface IInputField{
    name:string,
    value:string,
    type:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error:boolean,
    errorMessage:string
    required:boolean,
}

function InputField({ name, value, type, onChange, error, errorMessage ,required }: IInputField) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    
    const togglePassword = () => setIsPasswordVisible((prevState)=>(!prevState))
    return (
      <div className='input-field'>
        <label htmlFor={name}>{name + `${required? '*' :""}` }</label>
        <div>   

        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type!='password' ? type : isPasswordVisible ? 'text' : 'password'} 
        />
        {
            type=='password' ? 
            <span onClick={togglePassword}> 
              {isPasswordVisible ? <FaEyeSlash size={20} color='gray'/> : <FaEye  color='gray' size={20} />}
            </span> :<></>
        }
        
        </div>
        <div className='input-error'>
            {error?errorMessage:""}
        </div>
      </div>
    );
  }
  
  export default InputField;