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
  const [errorName,setErrorName]=useState("")
  const [errorpassword,setErrorpassword]=useState("")
  const [errorConfirm,setErrorconfirm]=useState("")
  const [errormob,setErrormob]=useState("")
  const [submitForm,setSubmitForm]=useState("")
  const [errorMessage, setErrorMessage] = useState("");

  const nameRegex = /^[a-zA-Z]{5,20}$/
  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/
  const mobRegex = /^[0-9]{10}$/
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/

  const handleKeyDown = e => {
        if (e.key === " ") {
          e.preventDefault();
        }
     
      };


  function handleMobile(e){
    const limit = 10;
    setMobileValue(e.target.value.slice(0, limit))
    // console.log(e.target.value)
  }
    

  function handleinput(e){
    let input = e.target.value.replace(/[^a-zA-Z]/, "");
    setInputValue(input)
    // setInputValue(e.target.value)
    // console.log(e.target.value)
  }
  function handleEmail(e){
    // let input = e.target.value.replace(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/, "");
    // setEmailValue(input);   
    setEmailValue(e.target.value);   

  }

  // function handlePassword(e){
  //   const strongPassword = (e.target.value)
  //   setPasswordValue(strongPassword)
  //   console.log(e.target.value)
    
  //   if(!strongPassword.match(lowercase)){
  //     setErrorMessage("Password should contains lowercase letters!")
  //   }
  //   else if(!strongPassword.match(highercase)){
  //     setErrorMessage("Password should contains highercase letters!")
  //   }
  //   else if(!strongPassword.match(numbercase)){
  //     setErrorMessage("Password should contains Number!")
  //   }
  //   else if(!strongPassword.match(lettercase)){
  //     setErrorMessage("Password should contains special letters!")
  //   }
  //   else{
  //     setErrorMessage("")
  //    }

  // }


  function handlePassword(e) {
    const pass = ((e.target.value) )
    setPasswordValue(pass);
    console.log(passwordValue);
    
    const lowercase = /[a-z]/;
    const uppercase = /[A-Z]/;
    const numbercase = /[0-9]/;
    const specialcase = /[!@#$%^&*]/; 
    const minLength = 8;
    const maxLength = 16;
  
  
    if (!lowercase.test(passwordValue)) {
      setErrorMessage("Password should contain lowercase letters!");
    } else if (!uppercase.test(passwordValue)) {
      setErrorMessage("Password should contain uppercase letters!");
    } else if (!numbercase.test(passwordValue)) {
      setErrorMessage("Password should contain at least one number!");
    } else if (!specialcase.test(passwordValue)) {
      setErrorMessage("Password should contain at least one special character!");
    } else if (passwordValue.length < minLength) {
      setErrorMessage(`Password should be at least ${minLength} characters long!`);
    } else if (passwordValue.length > maxLength) {
      setErrorMessage(`Password should be no more than ${maxLength} characters long!`);
    }else {
      setErrorMessage("");
    }
  }

  function handleConfirmPassword(e){
    setConfirmValue(e.target.value)
    console.log(e.target.value)
  }
 


  function handleSubmit(e){
    e.preventDefault()
    
    if(inputValue.match(nameRegex)){
      setErrorName("")
    }
    else{
      setErrorName("Enter your Name")
    }


    if(emailValue.match(emailRegex)){
      setErrorEmail("")
    }
    else{
      setErrorEmail("Correct this email id ")
    }
    



    if(passwordValue !== ""){
        setErrorpassword("")
    }
    else{
      setErrorpassword("give a Strong password")
    }



    if((passwordValue === confirmValue ) && (passwordValue !== "") ){
      setErrorconfirm("")
    }
    else{
      setErrorconfirm("give a correct password")
    }




    if(mobileValue.match(mobRegex)){
      setErrormob("")
     
    }
    else{
      setErrormob("Enter your correct Mobile Number")
    }



  //   setSubmitForm(`Hello ${inputValue} Your form is submited`)
  //   Swal.fire({
  //     position: 'top-center',
  //     icon: 'success',
  //     title: `${inputValue } is your form is submited`,
  //     showConfirmButton: false,
  //     timer: 2500
  //   })
  //   setInputValue("")
  //   setEmailValue("")
  //   setPasswordValue("")
  //   setConfirmValue("")
  //   setMobileValue("")


   }

  return (
    <div className='form'>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>


        <input type='text'
          placeholder='Enter your Name'
          onChange={handleinput}
          value={inputValue} 
          // style={{
          //   border: completed ? '2px solid red' : '2px solid black'
          // }}

          className={errorName ? "red-border" : ""}
          /><br />
        <p style={{ color: 'red' }}>{errorName}</p>

        <input type='email'
          placeholder='Email'
          onChange={handleEmail}
          onKeyDown={handleKeyDown}
          value={emailValue} 
          className={errorEmail ? "red-border" : ""}/><br />
      
        {<p style={{ color: 'red' }}>{errorEmail}</p>}
             
        <input type='password'
          placeholder='Password'
          onKeyDown={handleKeyDown}
          onChange={handlePassword}
          value={passwordValue} 
          className={errorpassword ? "red-border" : ""}/><br />
           <p style={{ color: 'red' }}>{errorMessage}</p>
           <p style={{ color: 'red' }}>{errorpassword}</p>
          
        <input type='password'
          placeholder='Confirm Password'
          onKeyDown={handleKeyDown}
          onChange={handleConfirmPassword}
          value={confirmValue}
          className={errorConfirm ? "red-border" : ""} /><br />
            { <p style={{ color: 'red' }}>{errorConfirm}</p>}

        <input type='number'
          placeholder='Mob No'
          onKeyDown={handleKeyDown}
          onChange={handleMobile}
          value={mobileValue}
          className={errormob ? "red-border" : ""} /><br />
            { <p style={{ color: 'red' }}>{errormob}</p>}

        <button type='submit'>Submit</button>
        { <h2 style={{ color: 'Green' }}>{submitForm}</h2>}
      </form>

      
    </div>

  )
}

export default App