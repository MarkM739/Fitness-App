import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = () => {


  return (

  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">BODi</a>
    </div>
    <nav className="">
    <ul className="flex justify-center">
      <li className="mx-2"><Link to="/">Home</Link></li>
      <li className="mx-2"><Link to="/workouts">Workouts</Link></li>
      <li className="mx-2"><Link to="/profile">Profile</Link></li>
      <li className="mx-2"><Link to="/measurements">Measurements</Link></li>
    </ul>
  </nav>
  </div>
);
};
export default Navbar;





