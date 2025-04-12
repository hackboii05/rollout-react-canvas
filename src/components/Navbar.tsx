
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-brand-purple">Toolify</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/jobs" className="text-gray-700 hover:text-brand-purple transition-colors">Find Jobs</Link>
            <Link to="/companies" className="text-gray-700 hover:text-brand-purple transition-colors">Companies</Link>
            <Link to="/resources" className="text-gray-700 hover:text-brand-purple transition-colors">Resources</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-purple transition-colors">About</Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link to="/register">
              <Button>Sign up</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/jobs" onClick={toggleMenu} className="text-gray-700 hover:text-brand-purple transition-colors">Find Jobs</Link>
              <Link to="/companies" onClick={toggleMenu} className="text-gray-700 hover:text-brand-purple transition-colors">Companies</Link>
              <Link to="/resources" onClick={toggleMenu} className="text-gray-700 hover:text-brand-purple transition-colors">Resources</Link>
              <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-brand-purple transition-colors">About</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full">Log in</Button>
                </Link>
                <Link to="/register" onClick={toggleMenu}>
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
