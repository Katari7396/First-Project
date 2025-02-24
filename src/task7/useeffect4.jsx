import React, { useState, useEffect } from 'react';

const FetchDataComponent = () => {
  // State to store fetched data
  const [data, setData] = useState(null);
  // State to store loading state
  const [loading, setLoading] = useState(true);
  // State to store any errors
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data); // Set data to state
      } catch (error) {
        setError(error.message); // Set error to state
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  // Display loading, error, or the fetched data
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
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;
