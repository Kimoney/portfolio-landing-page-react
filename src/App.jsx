import React, { useState } from 'react'

function SubmitForm() {
  const [survery, setSurvey] = useState({
    firstName: "",
    lastName: "",
    single: "",
    food: "",
    voted: "",
  });

  function handleSubmit(e) {
    e.preventDefault()
    console.log(survery)  
  }

  return (
    <div>
        <h1>Survery Form</h1>
        <form onSubmit={handleSubmit}>
            <lable>
                <input
                required="required"
                type='text'
                placeholder='Enter First Name'
                value={survery.firstName}
                onChange={(e) =>
                setSurvey({
                  ...survery,
                  firstName: e.target.value
                })
                }
                />
            </lable>
            <lable>
                <input
                required="required"
                type='text'
                placeholder='Enter Last Name'
                value={survery.lastName}
                onChange={
                  (e) =>
                setSurvey({
                  ...survery,
                  lastName: e.target.value
                })
                }
                />
            </lable>
            <lable>
                <input
                required="required"
                type='text'
                placeholder='Single'
                value={survery.single}
                onChange={
                  (e) =>
                setSurvey({
                  ...survery,
                  single: e.target.value
                })
                }
                />
            </lable>
            <lable>
                <input
                required="required"
                type='text'
                placeholder='Fav Food'
                value={survery.food}
                onChange={
                  (e) =>
                setSurvey({
                  ...survery,
                  food: e.target.value
                })
                }
                />
            </lable>
            <lable>
                <input
                required="required"
                type='text'
                placeholder='Have You Voted Before'
                value={survery.voted}
                onChange={
                  (e) =>
                setSurvey({
                  ...survery,
                  voted: e.target.value
                })
                }
                />
            </lable>
            <button>Submit</button>
            <button type='reset'>Reset</button>
        </form>
    </div>
  )
}

export default SubmitForm