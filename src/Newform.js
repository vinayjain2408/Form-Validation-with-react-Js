import React, { useState } from 'react'
import "./App.css"
function Newform() {
    // const [inputValue, setInputValue] = useState("")
    const [number, setNumber] = useState("")
    // const nameRegex = /^[a-zA-Z]{5,20}$/


    const handleNumber = (e) => {
        let input = e.target.value.replace(/[^0-9]/g, "")
        setNumber(input);
    };

    const handleKeyDown = (e) => {
        if (number.length>=10) {
          e.preventDefault();
        }
      };

  return (
    <div>
        <form>
        {/* <input type='text'
          placeholder='Enter your Name'
          onChange={handleinput}
          value={inputValue} 
        //   onKeyDown={handleKeyDown}
          /><br /> */}

        <input type='email'
          placeholder='Enter email'
          onChange={handleEmail}
          value={number} 
          onKeyDown={handleKeyDown}
          /><br />

        <input type='number'
          placeholder='mobile no'
          onChange={handleNumber}
          value={number} 
          onKeyDown={handleKeyDown}
          /><br />
       </form>
    </div>
  )
}

export default Newform