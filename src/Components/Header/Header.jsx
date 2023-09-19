import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-yellow-300 p-5 items-center">
      <h2 className="text-xl font-bold">MrColonThree's Restaurant</h2>

      <div className="flex justify-between gap-7 text-lg font-semibold items-center">
        <NavLink className="hover:text-rose-500 py-2 px-3 hover:bg-white rounded-lg" to="/">Home</NavLink>
        <NavLink className="hover:text-rose-500 p-2 hover:bg-white rounded-lg" to="/categories">Categories</NavLink>
        <NavLink className="hover:text-rose-500 p-2 hover:bg-white rounded-lg" to="/about">About Us</NavLink>
        <NavLink className="hover:text-rose-500 p-2 hover:bg-white rounded-lg" to="/contact">Contact Us</NavLink>
      </div>
    </div>
  );
};

export default Header;
