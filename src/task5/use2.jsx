import React, { useState } from 'react'
import './user1.css'

function Info() {

    const[name, setName] = useState('');
    const[age, setAge] = useState('');

  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='NAME' /><br />
        <br />
        <input type="text" value={age} onChange={(e) => setAge (e.target.value)} placeholder='AGE'/>

        <p>NAME : {name} </p>
        <p>AGE : {age}</p>
      
    </div>
  )
}

export default Info;
