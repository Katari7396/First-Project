import React, { useEffect, useState } from 'react'

function UseClick() {
    const[click,setClick] = useState(0)

    useEffect(()=>
    console.log(`You Clicked ${click} Times`),[click])

    const resetClick = () => {
        setClick(0)
    }

  return (
    <div>
        <h4>You Clicked {click} ⏲ Times </h4>
        <button onClick={()=>setClick(click+1)}>Click Increase</button><br />
        <br />
        <button onClick={()=>setClick(click-1)}>Click Decrease</button><br />
        <br />
        <button onClick={resetClick}>Click Reset</button>

    </div>
  )
}

export default UseClick;
