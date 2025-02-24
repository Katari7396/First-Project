import { useState } from "react";
import './ccount.css'

const Ccount = ({startValue}) => {

    const [count, setCount]= useState(startValue);

    return(
        <div>
            <p>Current Count : {count}</p>

            <button onClick={()=> setCount(count + 1)}>INCREMENT</button>

            <button onClick={()=> setCount(count - 1)}>DECREMENT</button>

        </div>
    )
}

export default Ccount;