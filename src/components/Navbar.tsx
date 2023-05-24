import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = () => {


  return (
    <nav className="">
    <ul className="flex justify-center">
      <li className="mx-2"><Link to="/">Home</Link></li>
      <li className="mx-2"><Link to="/workouts">Workouts</Link></li>
      <li className="mx-2"><Link to="/profile">Profile</Link></li>
      <li className="mx-2"><Link to="/measurements">Measurements</Link></li>
    </ul>
  </nav>
);
};

export default Navbar;





