'use client'
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import logo from '../../logo.png'
import { AuthSignIn, isEmail, LoadAuthFromLocalStorage } from '@/utils';
import { IsLoggedIn, userSelector } from '@/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';


interface IFormField{
    label:string | "",
    value:string | "",
    error:boolean | false,
    errorMessage:string | "",
}


function SignIn() {
  
  const setUser = useSetRecoilState(userSelector)
  const isLoggedIn = useRecoilValue(IsLoggedIn)
  const router = useRouter()
  
  useEffect(() => {
    if(window){
        const user = LoadAuthFromLocalStorage();
        if(user!==null){
            setUser(user);
        }
    }
  }, [])

  useEffect(() => {
    if(isLoggedIn){
        router.push('/')
    }
  }, [isLoggedIn])


  const [email, setEmail] = useState<IFormField>({
    label:"Email",
    value:"",
    error:false,
    errorMessage:"",
  })
  const [password, setPassword] = useState<IFormField>({
    label:"Password",
    value:"",
    error:false,
    errorMessage:"",
  })

  const ValidatePassword = (value:string) =>{
    let passwordError = false;
    let passwordErrorMessage="";
    
    if(value.length < 8) {
        passwordError = true;
        passwordErrorMessage = "Password must be at least 8 characters long."
    };

    return {
        passwordError,passwordErrorMessage
    }
  }

  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword((prevState)=>({
        ...prevState,
        value:value
    }))

  };

  const ValidateEmail = (value:string)=>{
    let error = false;
    let errorMessage="";
    
    if(value.length == 0 || !isEmail(value)) {
        error = true;
        errorMessage = "Please enter a valid password"
    };

    return {
        error,errorMessage
    }
  }
  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail((prevState)=>({
        ...prevState,
        value:value,
    }));
  };

  const submitForm = () =>{
    const {passwordError,passwordErrorMessage} = ValidatePassword(password.value)
    setPassword((prevState)=>({...prevState,passwordError,passwordErrorMessage}))

    const {error,errorMessage} = ValidateEmail(email.value)
    setPassword((prevState)=>({...prevState,error,errorMessage}))

    if(!error && !passwordError){
        const newUser = AuthSignIn(email.value,password.value)
        console.log('NewUser - ',newUser)
        if(newUser!=null){
            setUser(newUser)
            router.push('/')          
        }
        else{
            alert('Invalid credentials.')
        }
    }else{
        alert(
            'Please Enter Correct details.'
        )
    }
  }

  return (
    <div className='
        pt-5 px-10
        h-full 
        flex flex-col container justify-start items-center space-y-5  
        md:shadow-[0_5px_50px_-5px_rgba(0,0,0,0.3)] 
        rounded-md
        md:h-[80%] md:w-[60vw] 
        xl:w-[30vw]
        landscape:h-auto
        landscape:py-20
        landscape:my-10
    '>  
        <Image 
            src={logo} 
            alt='McLernons Logo'
            width={200} 
            height={200}
            quality={100}
        />

        <h1 className='title text-left'>
            Sign In
        </h1>
        
        <h4 className='sub-title text-left'>
            Hi there! Nice to see you again.
        </h4>
        
        <div className='login-form'>
            <InputField
                name={email.label} 
                type='email' 
                onChange={handleEmailChange} 
                value={email.value}
                error = {email.error}
                required = {true}
                errorMessage={email.errorMessage}
            />

            <InputField 
                name={password.label} 
                type='password' 
                onChange={handlePasswordChange} 
                value={password.value}
                error = {password.error}
                required = {true}
                errorMessage={email.errorMessage}
            />

            <Button label='Sign In' onClick={submitForm} size='long'/>
        </div>
    </div>
  )
}

export default SignIn