
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-elarion-dark-purple text-white border-t border-elarion-gold/30">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-elarion-gold font-cinzel text-lg mb-4">Elarion</h3>
            <p className="text-white/70 text-sm">
              A world where magic flows like breath, kingdoms rise and fall, 
              and adventure awaits around every corner.
            </p>
          </div>
          
          <div>
            <h3 className="text-elarion-gold font-cinzel text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/world" className="text-white/70 hover:text-elarion-gold text-sm transition-colors">
                  World &amp; Lore
                </Link>
              </li>
              <li>
                <Link to="/characters" className="text-white/70 hover:text-elarion-gold text-sm transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-white/70 hover:text-elarion-gold text-sm transition-colors">
                  Map
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-white/70 hover:text-elarion-gold text-sm transition-colors">
                  Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-elarion-gold font-cinzel text-lg mb-4">About</h3>
            <p className="text-white/70 text-sm">
              Elarion is a fantasy world created for adventurers, storytellers, and dreamers.
              Dive into its rich history and discover its many secrets.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-elarion-gold/20 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Elarion World Weaver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
