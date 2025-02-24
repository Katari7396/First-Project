import { useState } from "react";
import './render1.css';

const Me = () => {

    const[isSubmitted, setIsSubmitted] = useState(true);
    const[name, setName]= useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    }

    return(
        <div>
            {isSubmitted ? (
                <h1>Thank You For Login, {name} 😊 </h1>
            ):(
                <form onSubmit= {handleSubmit}>
                    <label>NAME : </label>
                    <input type="text" value={name} onChange={(event)=> setName(event.target.value)}>
                    </input><br />
                    <br />

                    <label>E-MAIL : </label>
                    <input type="text" value={email} onChange={(event)=> setEmail(event.target.value)}>
                    </input><br />
                    <br />

                    <label>PASSWORD : </label>
                    <input type="text" value={password} onChange={(event)=> setPassword(event.target.value)}>
                    </input><br />
                    <br />
                    <button type="submit">LOGIN</button>
                </form>      
            )
            }
        </div>
    )
}
export default Me;