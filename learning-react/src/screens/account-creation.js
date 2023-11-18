import React, {useState} from "react";

const AccountCreationPage = () => {

  const [accountForm, updateAccountForm] = useState({
    nameField : "",
    emailField : "",
    passwordField : "",
    DOBField : "",
    genderField : "",
    hobbiesField : "",
    educationField : "",
    addressField : ""
  });

  const getInputValue = (event) => {
    //console.log(event.target.value);
    //dynamicfunctionName({...dynamicVariableName, [event.target.id] : event.target.value })

    updateAccountForm({...accountForm,  [event.target.id] : event.target.value})
  }

  const submitAccountForm = () => {
    console.log(accountForm);
  }

  return(
    <div>
      <h2>Create a New Account</h2>
      <div>
        <label>Enter your Name :</label>
        <input id="nameField" type="text" placeholder="Enter your name" onChange={getInputValue} />
      </div>
      <div>
        <label>Enter your Email Id :</label>
        <input id="emailField" type="text" placeholder="Enter your email" onChange={getInputValue}/>
      </div>
      <div>
        <label>Enter your Password :</label>
        <input id="passwordField" type="password" placeholder="Enter your password" onChange={getInputValue}/>
      </div>
      <div>
        <label>Select your DOB :</label>
        <input id="DOBField" type="date" onChange={getInputValue}/>
      </div>
      <div>
        <label>Select your Gender :</label>
        <input id="genderField" type="radio" name="gender" onChange={getInputValue}/>Male
        <input id="genderField" type="radio" name="gender" onChange={getInputValue}/>Female
        <input id="genderField" type="radio" name="gender" onChange={getInputValue}/>Others
      </div>
      <div>
        <label>Select your Hobbies :</label>
        <input id="hobbiesField" type="checkbox" onChange={getInputValue}/>Cricket
        <input id="hobbiesField" type="checkbox" onChange={getInputValue}/>Football
        <input id="hobbiesField" type="checkbox" onChange={getInputValue}/>Hockey
        <input id="hobbiesField" type="checkbox" onChange={getInputValue}/>Baseball
        <input id="hobbiesField" type="checkbox" onChange={getInputValue}/>Chess
        <input id="hobbiesField" type="checkbox" onChange={getInputValue}/>Cycling
        <input id="hobbiesField" type="checkbox" onChange={getInputValue}/>Trecking
      </div>
      <div>
        <label>Select your Qualifiation :</label>
        <select id="educationField" onChange={getInputValue}>
          <option>Please choose any one</option>
          <option>Higher Secondary</option>
          <option>Bachelor of Engineering</option>
          <option>Bachelor of Accounts</option>
          <option>Bachelor of Literature</option>
          <option>Bachelor of Commerce</option>
          <option>Master in Accoutns</option>
          <option>Master in Electrical</option>
        </select>
      </div>
      <div>
        <label>Enter your Address :</label>
        <textarea id="addressField" placeholder="Enter your Address" onChange={getInputValue}></textarea>
      </div>
      <div>
        <button onClick={() => submitAccountForm()}>Submit</button>
      </div>
    </div>
  )
}

export default AccountCreationPage;