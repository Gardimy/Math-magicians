import { useState, useEffect } from 'react';
import '../styles/Quote.css';

function Quotecomponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const category = 'happiness';
    const apiKey = '3apcodfSda7ISeDOks5vwg==ws9GGvL3Ki7UXpQY';
    const url = `https://api.api-ninjas.com/v1/quotes?/category=${category}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error loading quote...');
      }

      const jsonData = await response.json();
      setData(jsonData[0]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="Quote">
        <p className="quote">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="Quote">
        <p className="quote">Error loading quote...</p>
      </div>
    );
  }

  return (
    <div className="Quote">
      <h1 className="Description">Quote</h1>
      <p className="quote">{data.quote}</p>
      <p className="author">{data.author}</p>
      <p className="category">{data.category}</p>
    </div>
  );
}

export default Quotecomponent;
