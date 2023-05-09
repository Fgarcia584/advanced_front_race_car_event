import { useContext } from 'react';
import { UserContext }  from '../contexts/userContext';
import { Link } from 'react-router-dom';

  
const Navbar = () => {
    const user = useContext(UserContext);
    const isLogged = user.user.username !== "";
    if (isLogged) {
        return (
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/login" className="btn btn-ghost normal-case text-xl">Race Event</Link>
                </div>
                <div className="flex-none">
                
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://picsum.photos/seed/picsum/200" />
                        </div>
                    </label>
                    
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Bonjour {user.user.username}
                        </a>
                        </li>
                        <li><a>Profile</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    
                    </div>
                </div>
            </div>
        );
    } 

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Race Event</Link>
            </div>
            <div className="flex-none">
                <Link to="/login" className="btn btn-ghost">Login</Link>
                <Link to="/register" className="btn btn-primary">Sign up</Link>
            </div>
        </div>
    )
    
};
  
export default Navbar;
  