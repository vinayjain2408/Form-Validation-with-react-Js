// import React, { useState } from 'react'
// import './App.css'

// function Form() {
//   const [inputValue, setInputValue] = useState("")
//   const [emailValue, setEmailValue] = useState("")
//   const [passwordValue, setPasswordValue] = useState("")
//   const [confirmValue, setConfirmValue] = useState("")
//   const [mobileValue, setMobileValue] = useState("")
//   const [error,setError]=useState("")

//  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/
//  const mobRegex = /^[0-9]{10} $/
//  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,16} $/

//   function handleinput(e){
//     setInputValue(e.target.value)
//     console.log(e.target.value)
//   }
//   function handleEmail(e){
//     setEmailValue(e.target.value)
   
//   }
//   function handlePassword(e){
//     setPasswordValue(e.target.value)
//     console.log(e.target.value)
//   }
//   function handleConfirmPassword(e){
//     setConfirmValue(e.target.value)
//     console.log(e.target.value)
//   }
 
//   function handleMobile(e){
//     setMobileValue(e.target.value)
//     console.log(e.target.value)
//   }
//   function handleSubmit(e){
//     e.preventDefault()
//     if(emailValue.match(emailRegex)){
//       setError("")
//     }else{
//       setError("Correct this email id ")
//     }
//   }
  
 

//   return (
//     <div className='form'>
//       <form onSubmit={handleSubmit}>


//         <input type='text'
//           placeholder='Enter your Name'
//           onChange={handleinput}
//           value={inputValue} /><br />

//         <input type='email'
//           placeholder='Email'
//           onChange={handleEmail}
//           value={emailValue} /><br />
//         {/* {
//           error ? <span>Enter valid email</span> :""
//         } */}
//   {error && <p style={{ color: 'red' }}>{error}</p>}
//         {/* <span>{error}</span> */}
        
//         <input type='password'
//           placeholder='Password'
//           onChange={handlePassword}
//           value={passwordValue} /><br />

//         <input type='password'
//           placeholder='Confirm Password'
//           onChange={handleConfirmPassword}
//           value={confirmValue} /><br />

//         <input type='number'
//           placeholder='Mob No'
//           onChange={handleMobile}
//           value={mobileValue} /><br />

//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Form










import React, { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [confirmValue, setConfirmValue] = useState("")
  const [mobileValue, setMobileValue] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorpassword, setErrorpassword] = useState("")
  const [errorConfirm, setErrorConfirm] = useState("")
  const [errormob, setErrormob] = useState("")

  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/
  const mobRegex = /^[0-9]{10}$/
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/

  function handleEmail(e) {
    setEmailValue(e.target.value)
    setErrorEmail("")
  }

  function handlePassword(e) {
    setPasswordValue(e.target.value)
    setErrorpassword("")
  }

  function handleConfirmPassword(e) {
    setConfirmValue(e.target.value)
    setErrorConfirm("")
  }

  function handleMobile(e) {
    setMobileValue(e.target.value)
    setErrormob("")
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!emailValue.match(emailRegex)) {
      setErrorEmail("Correct this email id ")
      return; // Stop further validation if email is invalid
    }

    if (!passwordValue.match(passwordRegex)) {
      setErrorpassword("Give a strong password")
      return; // Stop further validation if password is invalid
    }

    if (passwordValue !== confirmValue) {
      setErrorConfirm("Passwords do not match")
      return; // Stop further validation if confirm password is invalid
    }

    if (!mobileValue.match(mobRegex)) {
      setErrormob("Enter your correct Mobile Number")
      return; // Stop further validation if mobile number is invalid
    }

    // If all validations pass, you can submit the form or perform any other action here
    console.log("Form submitted successfully!");
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter your Name'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        /><br />

        <input
          type='email'
          placeholder='Email'
          onChange={handleEmail}
          value={emailValue}
        /><br />
        {errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}

        <input
          type='password'
          placeholder='Password'
          onChange={handlePassword}
          value={passwordValue}
        /><br />
        {errorpassword && <p style={{ color: 'red' }}>{errorpassword}</p>}

        <input
          type='password'
          placeholder='Confirm Password'
          onChange={handleConfirmPassword}
          value={confirmValue}
        /><br />
        {errorConfirm && <p style={{ color: 'red' }}>{errorConfirm}</p>}

        <input
          type='number'
          placeholder='Mob No'
          onChange={handleMobile}
          value={mobileValue}
        /><br />
        {errormob && <p style={{ color: 'red' }}>{errormob}</p>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;
