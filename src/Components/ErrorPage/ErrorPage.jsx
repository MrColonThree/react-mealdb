import { NavLink, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="text-center my-10">
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h2>Oops!!!</h2>
          <h3>Page not found</h3>
          <p className="my-5">Go back where you from</p>
          <NavLink to="/">
            <button className="bg-yellow-300 text-red-500 px-3 py-1 font font-semibold rounded-lg">
              Home
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
