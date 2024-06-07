import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios';
import Big from './../assets/HomeSevenBig.png';

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side";

const Articles = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(url);
        setMeals(data.meals);
        console.log(data);
      } catch (error) {
        console.error("Ошибка при получении данных", error);
      }
    };
    
    fetchBlog();
  }, []);

  // биринчи  4  блюданы чыкырат
  const firstFourMeals = meals.slice(3, 7);

  return (
    <div>
      <div className="HomeSeven">
        <div className="container">
          <div className="general">
            <h1>Our Blog & Articles</h1>
            <button className="btn">Read All Articles</button>
          </div>
          <div className="group">
            <div className="big">
              <img src={Big} alt="" />
              <h5>3 января 2023</h5>
              <h2>Секретные советы и хитрости для приготовления идеальной бургерной и пиццы для наших клиентов</h2>
              <p>Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
            </div>
            <div className="min">
              <div className='flex j-between wrap  seven' style={{ gap: "24px", marginTop: "72px" }}>
                {firstFourMeals.map((meal) => (
                  <BlogCard key={meal.idMeal} title={meal.strMeal} bgImg={meal.strMealThumb} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;

