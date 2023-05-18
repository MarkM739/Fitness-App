import React from 'react';

interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-gray-800 py-4">
    <ul className="flex justify-center">
      <li className="mx-2"><a className="text-white hover:text-gray-300" href="/">Home</a></li>
      <li className="mx-2"><a className="text-white hover:text-gray-300" href="/about">Workout</a></li>
      <li className="mx-2"><a className="text-white hover:text-gray-300" href="/contact">Profile</a></li>
      <li className="mx-2"><a className="text-white hover:text-gray-300" href="/contact">Measurements</a></li>
    </ul>
  </nav>
);
};

export default Navbar;

