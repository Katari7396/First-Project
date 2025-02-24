// import { useState } from "react";

import { useState } from "react";
import './use5.css';

// const Text = () => {

//     const [isVisible, setVisible] = useState(' ')

//     return(
//         <div>
//             <button onClick={()=>setVisible (!isVisible)}>Toggle Text</button>

//             {isVisible && <p>Toggleable Text</p>}

//         </div>
//     )
// }
// export default Text;


const Theme = () => {

    const [theme, setTheme] = useState('true');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    };
    return(
        <div className={theme} id="container">

            <h1>THEME TOGGLE</h1>

            <button onClick={toggleTheme}>Toggle Theme</button>

        </div>
    )
}
export default Theme;