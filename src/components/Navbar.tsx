import React from 'react';
import { Link } from 'react-router-dom';
import Swap from '../components/Swap'

interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = () => {
  function toggleDarkMode() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === "light") {
      document.documentElement.setAttribute('data-theme', 'coffee');
      localStorage.theme = "dark";
    } else {
      document.documentElement.setAttribute('data-theme', 'retro');
      localStorage.theme = 'light'
    }
  }

  return (

  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-5xl">BODi</a>
    </div>
    <nav className="">
    <ul className="flex justify-center menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      <Swap toggleDarkMode={toggleDarkMode}/>
      <li className="mx-2"><Link to="/">Home</Link></li>
      <li className="mx-2"><Link to="/workouts">Workouts</Link></li>
      <li className="mx-2"><Link to="/measurements">Measurements</Link></li>
      <li className="mx-2"><Link to="/profile">Profile</Link></li>
      <li className='mx-2'><Link to ="/login">Login</Link></li>
    </ul>
  </nav>
  </div>
);
};
export default Navbar;





