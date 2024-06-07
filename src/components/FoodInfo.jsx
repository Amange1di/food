import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const FoodInfo = () => {
  const { foodId } = useParams();
  const [meals, setMeals] = useState([]);
  const [ings, setIngs] = useState([]);
  const [mera, setMera] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const getFoodById = async () => {
    const arr1 = [];
    const arr2 = [];
    const response = await axios.get(url + foodId.split("-")[0]);
    console.log(response.data.meals);
    for (let i = 0; i < 21; i++) {
      if (response.data.meals[0]["strIngredient" + i]) {
        arr1.push(response.data.meals[0]["strIngredient" + i]);
        arr2.push(response.data.meals[0]["strMeasure" + i]);
      }
    }
    console.log(arr1);
    setIngs([...arr1]);
    setMera([...arr2]);
    setMeals(response.data.meals);

    setFoodName(response.data.meals[0].strMeal);
    
    // Разделяем инструкции на отдельные шаги
    const steps = response.data.meals[0].strInstructions.split("\n");
    // Собираем каждый шаг инструкции в новый абзац
    const formattedInstructions = steps.map((step, index) => <p key={index}>{step}</p>);
    setInstructions(formattedInstructions);
   
    // Получаем айдишник видео
    const youtubeId = response.data.meals[0].strYoutube.split("v=")[1];
    // Формируем ссылку на видео
    const videoUrl = `https://www.youtube.com/embed/${youtubeId}`;
    setYoutubeLink(videoUrl);
  };

  useEffect(() => {
    console.log(foodId, "-----foodId-----");
    getFoodById();
  }, [foodId]);

  if (meals.length === 0) {
    return <h1>Loading....</h1>;
  }

  const imgUrl = "https://www.themealdb.com/images/ingredients/";

  return (
    <div>
      <div className="container">
        <h4 style={{
          fontSize: "40px",
          fontWeight: 700,
          color: "#2C2F24",
          marginBottom: "15px",
          textAlign:"center"
          
        }}><b>{foodName}</b></h4>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"center", margin:"30px auto"
          
        }}>
          {meals.map((meal) => (
            <img src={meal.strMealThumb} alt="ImgTamak" key={meal.idMeal}  width={850}/>
          ))}
        </div>
        <h2 className="h2-title" style={{
          textAlign:"center",
          fontSize:"35px"
        }}>Ingredients</h2>
        <div className='flex j-between wrap' style={{ gap: "114px", marginTop: "72px" }}>
          {ings.map((name, index) => (
            <div className="" style={{
              marginTop:"-60px"
            }}>
              <img width={180} src={imgUrl + name + ".png"} alt="" />
              <h4  style={{
                textAlign:"center",
                color:"#AD343E",
                fontSize:"18px",
                fontWeight:"700"
              }}>
                {mera[index]} {name}
              </h4>
            </div>
          ))}
        </div>
        <div className="instructions">
          <h2 style={{margin:"50px auto",
            textAlign:"center"
          }}>Instructions</h2>
         
          {instructions}
        </div>
        {youtubeLink && (
          <div className="youtube-video">
          <h2 style={{margin:"50px auto" ,
            textAlign:"center"
          }}>Video Recipe</h2>
            <iframe
              width="560"
              height="315"
              src={youtubeLink} // Используем youtubeLink в src атрибуте
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodInfo;


