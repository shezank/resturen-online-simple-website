import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import './Navbar.css';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const navlinks = <>
        <NavLink to='/'><li><button>Home</button></li></NavLink>
        <NavLink to='/food'><li><button>Food</button></li></NavLink>
        <NavLink to='/blog'><li><button>Blog</button></li></NavLink>
    </>
    return (
        <div className="navbar bg-transparent  relative z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <img className='w-16' src={logo} alt="" />
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu text-white font-extrabold text-xl menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL? user?.photoURL : ""} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <Link to='/addfood'><li><button>Add Food Items</button></li></Link>
                            <li><button onClick={logout}>Logout</button></li>
                        </ul>
                    </div> :
                    <Link to='/login'><button className='btn'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;