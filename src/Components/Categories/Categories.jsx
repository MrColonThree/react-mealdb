import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
const Categories = () => {
  const categories = useLoaderData().categories;
  return (
    <div className="my-10">
      <h2 className="text-center text-3xl font-semibold">
        Categories: {categories.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {categories.map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
