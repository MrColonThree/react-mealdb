const Meal = ({ meal }) => {
  const { strMeal, strMealThumb } = meal;
  return (
    <div className="bg-yellow-300 p-5 rounded-lg">
      <img src={strMealThumb} alt="images.alt" />
      <h2 className="text-2xl text-center mt-5">{strMeal}</h2>
    </div>
  );
};

export default Meal;
