import React, { useState } from 'react'

function Click() {
    const [click, setClick] = useState(0)

  return (
    <div>
      <h3>YOU CLICKED {click} TIMES</h3>
      <button onClick={()=>{setClick(click+1)}}>INCREASE</button><br />
      <br />
      <button onClick={()=>{setClick(click-1)}}>DECREASE</button>
    </div>
  )
}

export default Click;
