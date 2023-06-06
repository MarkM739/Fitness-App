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
<div class="bg-gray-200 p-8">
  <h1 class="text-3xl font-bold mb-4">Welcome to My Homepage</h1>
  <p class="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

  <div class="flex justify-center">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Get Started
    </button>
  </div>
</div>
export default Navbar;





