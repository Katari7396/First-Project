import React, { useState } from 'react'

function Products() {
    const [products,setProducts] = useState([
        // 'product1',
        // 'product2',
        // 'product3'
    ]);

    const handleAddProduct = () => {
        setProducts([...products, 'New Product'])
    }

  return (
    <div>
      <h3>This is my product :  </h3>
      <ul style={{listStyle:'none'}}>
        {products.map((product,index)=>(
            <li key={index}>{product}</li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>ADD PRODUCT</button>
    </div>
  )
}

export default Products
