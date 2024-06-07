import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';

const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Side';

const Pages = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get(url);
        setFoods(data.meals);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div style={{ background: '#f9f9f7' }}>
      <div className="container">
        <div className="flex j-between wrap" style={{ gap: '24px' }}>
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            foods.map((el) => (
              <BlogCard
                key={el.idMeal}
                foodId={el.idMeal}
                foodName={el.strMeal}
                bgImg={el.strMealThumb}
                price={el.idMeal}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Pages;

