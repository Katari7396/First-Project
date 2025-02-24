import React, { useState } from 'react';
import './user1.css';

function Form() {
    const[name, setName] = useState('');
    
    const handleChange = (e) => {
        setName(e.target.value);
    };

  return (
    <div>
        <input type="text" value={name} onChange={handleChange} placeholder='Enter u r name' /><br />

        <p>MY NAME : {name}</p>
      
    </div>
  )
}

export default Form;
