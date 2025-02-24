// import React, { useState } from 'react'

// function Storage() {
//     const [email,setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('')

//     const handlesubmit = (e) => {
//         e.preventdefault()
//         if (!email.includes('@')){
//             setError('Enter a Valid Email Id')
//         }else if (password.length<6) {
//             setError('Password must have 6 Characters')
//         }else {
//             setError('');
//             setEmail('');
//             setPassword('')
//         }
//     }

//   return (
//     <div>
//         <form onSubmit={handlesubmit}>
//             <h3>SIGN UP FORM 📰 </h3>
//             <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
//             <input type="text" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
//             <p>{error}</p>
//             <button type='submit'>SUBMIT</button>

//         </form>
        
//     </div>
//   )
// }

// export default Storage


import React, { useState, useEffect } from 'react';

function Storage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [storedEmail, setStoredEmail] = useState('');
    const [storedPassword, setStoredPassword] = useState('');

    useEffect(() => {
        const emailFromStorage = localStorage.getItem('email');
        const passwordFromStorage = localStorage.getItem('password');
        
        if (emailFromStorage && passwordFromStorage) {
            setStoredEmail(emailFromStorage);
            setStoredPassword(passwordFromStorage);
        }
    }, []);

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setError('Enter a Valid Email Id');
        } else if (password.length < 6) {
            setError('Password must have 6 Characters');
        } else {
            setError('');
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            setEmail('');
            setPassword('');
            setStoredEmail(email);
            setStoredPassword(password);
        }
    };

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <h3>USER INFORMATION 🙋‍♂️</h3>
                <input
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p>{error}</p>
                <button type="submit">SUBMIT</button>
            </form>
            <div>
                {storedEmail && storedPassword && (
                    <div>
                        <h4>Stored Information:</h4>
                        <p>Email: {storedEmail}</p>
                        <p>Password: {storedPassword}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Storage;


