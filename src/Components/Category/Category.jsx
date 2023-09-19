import { useState } from "react";
import { NavLink } from "react-router-dom";
const Category = ({ category }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxLength = 100;
  const modifiedDescription =
    strCategoryDescription.length > maxLength
      ? strCategoryDescription.slice(0, maxLength) + " "
      : strCategoryDescription;

  const showSeeMore = strCategoryDescription.length > maxLength;
  const handleSeeMoreClick = () => {
    setShowFullDescription(true);
  };

  return (
    <div className="p-5 rounded-lg bg-yellow-400 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-center">{strCategory}</h2>
      <img className="my-5" src={strCategoryThumb} alt="" />
      <p className="text-gray-700 text-sm flex-grow">
        {" "}
        {showFullDescription ? strCategoryDescription : modifiedDescription}
        {showSeeMore && !showFullDescription && (
          <button
            className="text-blue-600 font-semibold"
            onClick={handleSeeMoreClick}
          >
            See More...
          </button>
        )}
      </p>
      <NavLink to={`/category/${strCategory}`}>
        <button className="text-lg font-semibold px-3 py-2 mt-5 bg-white rounded-lg">
          Show All Items
        </button>
      </NavLink>
    </div>
  );
};

export default Category;
