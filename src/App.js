import React, { useState } from 'react'
import Swal from "sweetalert2"
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [confirmValue, setConfirmValue] = useState("")
  const [mobileValue, setMobileValue] = useState("")
  const [errorEmail,setErrorEmail]=useState("")
  const [errorpassword,setErrorpassword]=useState("")
  const [errorConfirm,setErrorconfirm]=useState("")
  const [errormob,setErrormob]=useState("")
  const [submitForm,setSubmitForm]=useState("")

  const nameRegex = /^[a-zA-Z]$/
  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/
  const mobRegex = /^[0-9]{10}$/
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/

  function handleinput(e){
    setInputValue(e.target.value)
    console.log(e.target.value)
  }
  function handleEmail(e){
    setEmailValue(e.target.value)
   
  }
  function handlePassword(e){
    setPasswordValue(e.target.value)
    console.log(e.target.value)
    
  }
  function handleConfirmPassword(e){
    setConfirmValue(e.target.value)
    console.log(e.target.value)
  }
 
  function handleMobile(e){
    setMobileValue(e.target.value)
    console.log(e.target.value)
  }


  function handleSubmit(e){
    e.preventDefault()
    
    if(emailValue.match(emailRegex)){
      setErrorEmail("")
      if(passwordValue.match(passwordRegex)){
        setErrorpassword("")
        if(passwordValue === confirmValue){
          setErrorconfirm("")
          if(mobileValue.match(mobRegex)){
            setSubmitForm(`Hello ${inputValue} Your form is submited`)
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: `${inputValue } is your form is submited`,
              showConfirmButton: false,
              timer: 1500
            })
          }
          else{
            setErrormob("Enter your correct Mobile Number")
          }
        }
        else{
          setErrorconfirm("give a correct password")
        }
      }
      else{
        setErrorpassword("give a Strong password")
      }
    }else{
      setErrorEmail("Correct this email id ")
    }
  }





  // function handleSubmit(e){
  //   e.preventDefault()
  //   if(emailValue.match(emailRegex)){
  //     setErrorEmail("")
  //     console.log('====>>')
      
  //   }else{
  //     setErrorEmail("Correct this email id ")
  //   }


  //   if(passwordValue.match(passwordRegex)){
  //     setErrorpassword("")
      
  //   }
  //   else{
  //     setErrorpassword("give a Strong password")
  //   }


  //   if(passwordValue === confirmValue){
  //     setErrorconfirm("")
     
  //   }
  //   else{
  //     setErrorconfirm("give a correct password")
  //   }

  //   if(mobileValue.match(mobRegex)){
  //     setErrormob("")
  //   }
  //   else{
  //     setErrormob("Enter your correct Mobile Number")
  //   }
  // }
  






  // function handleSubmit(e) {
  //   e.preventDefault();
  
  //   let errors = {
  //     email: "",
  //     password: "",
  //     confirm: "",
  //     mobile: "",
  //   };
  
  //   // Check email
  //   if (!emailValue.match(emailRegex)) {
  //     errors.email = "Correct this email id";
  //   }
  
  //   // Check password
  //   if (!passwordValue.match(passwordRegex)) {
  //     errors.password = "Give a strong password";
  //   }
  
  //   // Check confirm password
  //   if (passwordValue !== confirmValue) {
  //     errors.confirm = "Passwords do not match";
  //   }
  
  //   // Check mobile number
  //   if (!mobileValue.match(mobRegex)) {
  //     errors.mobile = "Enter your correct Mobile Number";
  //   }
  
  //   // Update state with errors
  //   setErrorEmail(errors.email);
  //   setErrorpassword(errors.password);
  //   setErrorconfirm(errors.confirm);
  //   setErrormob(errors.mobile);
  
  //   // If there are no errors, the form can be submitted
  //   if (
  //     !errors.email &&
  //     !errors.password &&
  //     !errors.confirm &&
  //     !errors.mobile
  //   ) {
  //     // Do something, e.g., submit the form or handle the successful case
  //     alert("give a corect detail")
  //   }
  // }
  

 

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>


        <input type='text'
          placeholder='Enter your Name'
          onChange={handleinput}
          value={inputValue} /><br />

        <input type='email'
          placeholder='Email'
          onChange={handleEmail}
          value={emailValue} /><br />
      
        {<p style={{ color: 'red' }}>{errorEmail}</p>}
             
        <input type='password'
          placeholder='Password'
          onChange={handlePassword}
          value={passwordValue} /><br />
            {errorpassword && <p style={{ color: 'red' }}>{errorpassword}</p>}

        <input type='password'
          placeholder='Confirm Password'
          onChange={handleConfirmPassword}
          value={confirmValue} /><br />
            { <p style={{ color: 'red' }}>{errorConfirm}</p>}

        <input type='number'
          placeholder='Mob No'
          onChange={handleMobile}
          value={mobileValue} /><br />
            { <p style={{ color: 'red' }}>{errormob}</p>}

        <button type='submit'>Submit</button>
        { <h2 style={{ color: 'Green' }}>{submitForm}</h2>}
      </form>

      
    </div>

  )
}

export default App