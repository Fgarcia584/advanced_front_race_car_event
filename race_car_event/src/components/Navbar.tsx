import { useContext } from "react";
import { UserContext, defaultUserContext } from "../contexts/auth/authContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {user, setUser }= useContext(UserContext);
  const isLogged = user.username !== "";


  const Logout = () => {
    setUser(defaultUserContext.user)
  }
      

  if (isLogged) {
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Race Event
          </Link>
        </div>
        <div className="flex-none">
          <Link to="/races/create" className="btn btn-ghost btn-circle text-3xl text-bold"> + </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://picsum.photos/seed/picsum/200" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Bonjour {user.username}</a>
              </li>
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a onClick={Logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/races/create" className="btn btn-ghost normal-case text-xl">
          Race Event
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/login" className="btn btn-ghost">
          Login
        </Link>
        <Link to="/register" className="btn btn-primary">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
