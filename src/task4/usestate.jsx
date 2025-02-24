import React, { useState } from 'react'

function Color() {
    const [color, setColor] = useState('');

    const updateColor = () => {

        setColor('GREEN');
        
    }

  return (
    <div>
      <h1><b>MY FAV COLOR IS </b> {color} 🟢 ! </h1>
      <button onClick={updateColor}>SET COLOR</button>
    </div>
  )
}

export default Color;