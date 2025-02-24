import React, { useState } from 'react'
import './form.css'

function Form() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [employeeId, setEmployeeId] = useState('')
    const [error, setError] = useState('')

    const handlesubmit=(e)=>{
        e.preventDefault();
        if (!email.includes('@')) {
            setError('Enter a Valid Email id')
        } else if (password.length < 6) {
            setError('Password must be 6 characters long');
        } else if (password !== confirmPassword) {
            setError('Password not matched');
        } else if (!name){
            setError('Required Name');
        } else if (!employeeId){
            setError('Required Employee ID');
        } else {
            setError('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setName('');
            setEmployeeId('')
        }
        const userData = { name, email, password};
        localStorage.setItem("user", JSON.stringify(userData));

        alert("Form submitted successfully")
    }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <h3>USER INFORMATION 🙋‍♂️ </h3>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
            <input type=" password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
            <input type="confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password' />
            <input type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
            <input type="employeeId" value={employeeId} onChange={(e)=>setEmployeeId(e.target.value)} placeholder='Enter Employee Id' />
            <p>{error}</p>
            <button type='submit'>submit</button>
      </form>
    </div>
  )}

export default Form;
