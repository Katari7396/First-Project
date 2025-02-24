import React, { useState } from 'react'

const Count = () => {
 
    const [count, setCount] = useState(0)

    return (
    <div style={{backgroundColor:"red", padding: "15px",marginTop:"10vh"}}>

        <h2>YOU CLICKED {count} TIMES</h2>

        <button onClick={()=>{setCount(count+1)}}>Click Me</button>

    </div>
  )
}
 
export default Count;