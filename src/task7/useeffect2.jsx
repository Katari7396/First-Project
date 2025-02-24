import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 2000);
  });

  return(
    <h3>
        I HAVE COUNTED {count} TIMES
    </h3>
  )
}
export default Timer;