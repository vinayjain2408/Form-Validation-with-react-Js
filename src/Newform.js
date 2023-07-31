import React, { useState } from 'react'
import "./App.css"
function Newform() {
    const [inputValue, setInputValue] = useState("")
    const [inputerror, setInputError] = useState("")
    // const [number, setNumber] = useState("")
    const nameRegex = /[a-zA-Z]{3,20}/

    const handleKeyDown = e => {
      if (e.key === " ") {
        e.preventDefault();
      }
    };

    const handleinput = (e)=>{
      setInputValue(e.target.value)
      if(inputValue.match(nameRegex)){
        setInputError("")
      }else{
        setInputError("Enter your correct Name")
      }
    }

    const handlesubmit = (e)=>{
      e.preventDefault()
      console.log("vinay jain")
      if(inputValue.match(nameRegex)){
        setInputError("")
      }
      else{
        setInputError("Enter your correct Name")
      }

      if(inputerror === ""){
        setInputValue("")
      }
    }

    // const handleNumber = (e) => {
    //     let input = e.target.value.replace(/[^0-9]/g, "")
    //     setNumber(input);
    // };



    // const handleNumber = event => {
    //   const limit = 10;
  
    //   // 👇️ only take first N characters
    //   setNumber(event.target.value.slice(0, limit));
    // };


  return (
    <div>
        <form onSubmit={handlesubmit}>
      
        <input type='text'
          placeholder='Enter name'
          onChange={handleinput}
          value={inputValue} 
          onKeyDown={handleKeyDown}
          /><br />
          <p>{inputerror}</p>
          <button type='submit'>Submit</button>

        {/* <input type='number'
          placeholder='mobile no'
          onChange={handleNumber}
          value={number} 
          // onKeyDown={handleKeyDown}
          maxLength={10}
          /><br /> */}
       </form>
    </div>
  )
}

export default Newform