import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#8B5E3C] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">EmpowerHer</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold">
          <li><a href="#" className="hover:text-yellow-400">Traditional Clothes</a></li>
          <li><a href="#" className="hover:text-yellow-400">Handmade Accessories</a></li>
          <li><a href="#" className="hover:text-yellow-400">Home Decor</a></li>
          <li><a href="#" className="hover:text-yellow-400">Skincare Products</a></li>
        </ul>

        {/* Search & Account */}
        <div className="hidden md:flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search..." 
            className="px-3 py-1 rounded-md text-black focus:outline-none"
          />
          <button className="bg-yellow-400 px-3 py-1 rounded-md hover:bg-yellow-500">Search</button>
          <a href="#" className="font-semibold hover:text-yellow-400">Account</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#8B5E3C] text-lg font-semibold py-4 space-y-4">
          <li><a href="#" className="hover:text-yellow-400">Traditional Clothes</a></li>
          <li><a href="#" className="hover:text-yellow-400">Handmade Accessories</a></li>
          <li><a href="#" className="hover:text-yellow-400">Home Decor</a></li>
          <li><a href="#" className="hover:text-yellow-400">Skincare Products</a></li>
          <li>
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-3 py-1 rounded-md text-black focus:outline-none"
            />
          </li>
          <li><a href="#" className="hover:text-yellow-400">Account</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;