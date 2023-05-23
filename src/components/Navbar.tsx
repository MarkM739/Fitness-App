import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = () => {
  // return (
  //   <nav className="bg-gray-800 py-4">
  //   <ul className="flex justify-center">
  //     <li className="mx-2"><a className="text-white hover:text-gray-300" href="">Home</a></li>
  //     <li className="mx-2"><a className="text-white hover:text-gray-300" href="">Workout</a></li>
  //     <li className="mx-2"><a className="text-white hover:text-gray-300" >Profile</a></li>
  //     <li className="mx-2"><a className="text-white hover:text-gray-300" href="/contact">Measurements</a></li>
  //   </ul>
  // </nav>

  return (
    <nav className="bg-gray-800 py-4">
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



