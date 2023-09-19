// import { useNavigate, useParams } from "react-router-dom";

// const Meals = () => {
//   const { strCategory } = useParams();
//   const navigate = useNavigate();
//   const handleBackButton = () => {
//     navigate(-1);
//   };
//   return (
//     <div className="text-center space-y-3 my-5">
//       <h2> Category: {strCategory.length}</h2>
//       <h2>type: {strCategory}</h2>
//       <div className="text-center">
//       <button className="bg-yellow-400 px-3 py-1 font font-semibold rounded-lg" onClick={handleBackButton}>Back</button>
//       </div>
//     </div>
//   );
// };

// export default Meals;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Meal from "../Meal/Meal";

function Meals() {
  const { strCategory } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data.meals);
        console.log(data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [strCategory]);

  if (!data) {
    return (
      <div className="text-center my-10">
        <h3>Page not found</h3>
        <p className="my-5">Go back where you from</p>
        <NavLink to="/">
          <button className="bg-yellow-300 text-red-500 px-3 py-1 font font-semibold rounded-lg">Home</button>
        </NavLink>
      </div>
    );
  }

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex justify-between items-center my-5 text-2xl">
        <h1>Total Meals: {data.length}</h1>
        <h2 className="text-3xl font-extrabold">{strCategory}</h2>
        <button
          className="bg-yellow-400 px-3 py-1 font font-semibold rounded-lg"
          onClick={handleBackButton}
        >
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
}

export default Meals;
