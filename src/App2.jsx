import React, {useState} from 'react';
import "./App.css"

function App() {
  const [firstName, setFirstName ] = useState("");
  const [lastName, setLastName ] = useState("");
  const [emailInput, setEmailInput ] = useState("");
  const [phoneInput, setPhoneInput ] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value)
  }
  function handleLastName(e) {
    setLastName(e.target.value)
  }
  function handleEmailInput(e) {
    setEmailInput(e.target.value)
  }
  function handlePhoneInput(e) {
    setPhoneInput(e.target.value)
  }

  
  return (
    <div className="App">
      <h1>Event Listeners</h1>
      <div className='my-form'>
        <label>
          firstName: <input onChange={handleFirstName} type='text' value={firstName}/>
        </label>
        <label>
          lastName: <input onChange={handleLastName} type='text'value={lastName}/>
        </label>
        <label>
          email: <input onChange={handleEmailInput} type='text'value={emailInput}/>
        </label>
        <label>
          phone: <input onChange={handlePhoneInput} type='text'value={phoneInput}/>
        </label>
        <h2>{`My Name is ${firstName} ${lastName} and you can shoot me an email on ${emailInput} or call me on ${phoneInput}`}</h2>

      </div>
    </div>
  );
}

export default App;
