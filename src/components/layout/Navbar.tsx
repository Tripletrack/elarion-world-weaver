
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Scroll, Users, Map, BookOpen, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'Home', icon: <Home size={18} />, path: '/' },
  { name: 'World', icon: <Scroll size={18} />, path: '/world' },
  { name: 'Characters', icon: <Users size={18} />, path: '/characters' },
  { name: 'Map', icon: <Map size={18} />, path: '/map' },
  { name: 'Stories', icon: <BookOpen size={18} />, path: '/stories' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-elarion-dark-purple text-white sticky top-0 z-50 shadow-md border-b border-elarion-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-elarion-gold font-cinzel text-xl font-bold animate-glow">
                Elarion
              </Link>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-raleway text-white/90 hover:text-elarion-gold flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-elarion-gold"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden transition-all duration-300 ease-in-out overflow-hidden", 
        isOpen ? "max-h-60" : "max-h-0")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-elarion-mystic-blue/95 backdrop-blur-sm">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-elarion-gold hover:bg-elarion-mystic-blue/50 block px-3 py-2 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
