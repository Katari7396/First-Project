import React, { useState } from 'react'

function User() {
    const [user, setUser]= useState({
        name:'BUNNY',
        age:24
    });

    const updateName = () => {
        setUser((prevUser)=>({...prevUser, name:'KATARI'}))
    };
    const updateAge = () => {
        setUser((prevUser)=>({...prevUser, age: 25}))
    };

  return (
    <div>
        <h3>MY INFORMATION 🙋‍♂️ </h3>
        <p>NAME : {user.name}</p>
        <p>AGE : {user.age} </p>
        <button onClick={updateName}>Change Name</button><br />
        <br />
        <button onClick={updateAge}>Change Age</button>
    </div>
  )
}

export default User
