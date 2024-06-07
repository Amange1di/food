
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const buttons = [
  {
    name: "All"
  },
  {
    name: "Breakfast"
  },
  {
    name: "Chicken"
  },
  {
    name: "Pasta"
  },
  {
    name: "Dessert"
  },
];

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const Menu = () => {
  const [name, setName] = useState("All");
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFoods = async (category) => {
    setLoading(true);
    setError(null);

    try {
      let data;
      if (category === "All") {
        const categories = ["Breakfast", "Chicken", "Pasta", "Dessert"];
        const requests = categories.map(category => axios.get(url + category));
        const responses = await Promise.all(requests);
        data = { meals: responses.flatMap(response => response.data.meals) };
      } else {
        const response = await axios.get(url + category);
        data = response.data;
      }

      setFoods(data.meals || []);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleOnclick = (evt) => {
    const btnName = evt.target.innerText;
    setName(btnName);
    fetchFoods(btnName);
  };

  useEffect(() => {
    fetchFoods("All");
  }, []);

  return (
    <div className='menu-page'>
      <div className='container'>
        <h1 className='title'>Our Menu</h1>
        <h2 className='h2-title'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</h2>
        <div className='flex j-center' style={{ gap: "15px", marginBottom: "88px" }}>
          {buttons.map((el) => (
            <button
              onClick={handleOnclick}
              style={{
                minWidth: 120,
                background: el.name === name ? "#AD343E" : "",
                color: el.name === name ? "#fff" : "",
                borderColor: el.name === name ? "#AD343E" : ""
              }}
              className='btn' 
              key={el.name}
            >
              {el.name}
            </button>
          ))}
        </div>

        <div className='flex j-between wrap' style={{ gap: "24px" }}>
          {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : foods.map((el) => (
            <Card key={el.idMeal} foodName={el.strMeal} bgImg={el.strMealThumb} price={el.idMeal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;




