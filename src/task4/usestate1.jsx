import React, { useState } from 'react'

function Order() {

  const [number] = useState("1");
  // const [orderid, setOrderid] = useState('#2377');
  const [order] = useState("BIRYANI");
  const [from] = useState("ASHOKA INN");

  return (
    <div style={{backgroundColor:"orange", padding:'10px', marginTop:'10vh'}}>
      <h1> ORDER {number}</h1>
      <p>
        <b>I ORDERED {order} 😋 FROM {from}</b>
      </p>
    </div>
  )
}

export default Order;

