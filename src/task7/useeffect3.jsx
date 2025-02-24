import React, { useState, useEffect } from "react";
 
function Data() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
 
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
        try {
          const response = await fetch('https://dummyjson.com/products');
          if (!response.ok) {
            throw new Error('Unable To Connect');
          }
          const data = await response.json();
          setProducts(data.products);
          setLoading(false)

        } catch (error) {
          setError(error.message);
          setLoading(false)

        } finally {
            setLoading(false)
        }
      };

      fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

     if (error) {
         return <div>Error: {error}</div>;
     }
     return (
       <div>
      <h1>Fetched Data</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}, {product.description}, ${product.price} , {product.brand} </li>
        ))}
      </ul>
    </div>
  );
}

export default Data;