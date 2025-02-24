import React, { useState } from 'react';

function Product() {
  const [products, setProducts] = useState(['Product 1', 'Product 2']);
  const [newProduct, setNewProduct] = useState('');

  const handleAddProduct = () => {
    if (newProduct) {
      setProducts([...products, newProduct]);
      setNewProduct('');
    }
  };

  return (
    <div>
      <h3>These are my products:</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Enter new product"
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default Product;
