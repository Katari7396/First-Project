import React, { useEffect, useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);

    useEffect(()=> console.log(count))

  return (
    <div>
      <p>YOU CLICKED {count} TIMES</p>
      <button onClick={() => setCount(count + 1)}>
        CLICK ME
      </button>
    </div>
  )
}

export default Count;
