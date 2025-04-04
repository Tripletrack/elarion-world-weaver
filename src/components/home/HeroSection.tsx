
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-elarion-dark-purple text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/fantasy-landscape.jpg')] bg-cover bg-center opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cinzel text-white mb-6 leading-tight">
              Welcome to <span className="text-elarion-gold animate-glow">Elarion</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/80 italic font-lora">
              "In Elarion, magic flows like breath, empires rise like dawn,
              and heroes emerge from the shadows of legends."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-elarion-gold hover:bg-elarion-gold/80 text-elarion-dark-purple font-medium font-raleway">
                <Link to="/world">
                  Explore the World
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-elarion-gold text-elarion-gold hover:bg-elarion-gold/10 font-raleway">
                <Link to="/characters">
                  Meet the Characters
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
