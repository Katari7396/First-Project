import React, { useState } from 'react'

function Menu() {
    const [menu] = useState([
        {id:1, name: 'Soup', price: 100},
        {id:2, name: 'Biryani', price: 250},
        {id:3, name:'Pizza', price: 300},
        {id:4, name: 'Ice Cream', price:200}
    ]);

  return (
    <div>
      <h3>RESTAURANT MENU 🧾</h3>
      <ul style={{listStyle:'none'}}>
        {menu.map((item)=>(
            <li key={item.id}>
                {item.id} . {item.name} $ {item.price}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu