import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" p-5 rounded-full shadow-md bg-orange-400">
            <nav className="flex justify-between">
              <div className="">
                <h1 className="text-5xl font-semibold">Phone Shop</h1>
              </div>
                <ul className="text-xl font-semibold">
                    <li className="flex gap-5">
                        <NavLink
                          to="/"
                          className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-indigo-600 rounded" : ""
                          }
                        >
                          Home

                        </NavLink>
                        <NavLink
                          to="/favorite"
                          className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-indigo-600 rounded" : ""
                          }
                        >
                          Favorites

                        </NavLink>
                        <NavLink
                          to="/login"
                          className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-indigo-600  rounded" : ""
                          }
                        >
                          Log In

                        </NavLink>
                        
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;