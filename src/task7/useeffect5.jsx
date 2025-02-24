import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/50")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed To Load Data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>LOADING....</p>;
  }

  if (error) {
    return <p>ERROR: {error}</p>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <p>Brand: {data.brand}</p>
    </div>
  );
}

export default FetchData;
