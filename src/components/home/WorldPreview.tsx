
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Map as MapIcon, Compass, Crown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WorldPreview = () => {
  const regions = [
    {
      name: "Velharian Empire",
      description: "The dominant imperial force, ruled by the Golden Throne and home to the prestigious Arcane Academy.",
      icon: <Crown className="text-elarion-gold h-8 w-8" />,
      color: "border-elarion-gold"
    },
    {
      name: "Ziona Marches",
      description: "Untamed wilds home to the druidic circles and mysterious forest sentinels.",
      icon: <Compass className="text-elarion-forest-green h-8 w-8" />,
      color: "border-elarion-forest-green"
    },
    {
      name: "Ashen Reach",
      description: "Volcanic badlands inhabited by fire elementalists and obsidian miners.",
      icon: <MapIcon className="text-elarion-deep-red h-8 w-8" />,
      color: "border-elarion-deep-red"
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-cinzel mb-4">Discover Elarion</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A world of ancient magic, warring kingdoms, and untold adventures waiting to be explored.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {regions.map((region) => (
          <div 
            key={region.name} 
            className={`fantasy-card p-6 flex flex-col items-center text-center ${region.color}`}
          >
            <div className="mb-4">{region.icon}</div>
            <h3 className="text-xl font-cinzel font-bold mb-2">{region.name}</h3>
            <p className="text-muted-foreground mb-4">{region.description}</p>
            <Button asChild variant="link" className="mt-auto">
              <Link to="/world" className="text-primary">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
      
      <div className="relative rounded-lg overflow-hidden bg-elarion-royal-purple mb-12">
        <div className="absolute inset-0 bg-[url('/fantasy-map.jpg')] bg-cover bg-center opacity-25"></div>
        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-cinzel font-bold text-white mb-2">Explore the Map</h3>
            <p className="text-white/80 max-w-lg">
              Navigate through the realms of Elarion, discover hidden locations, and learn about the cultures that shape this magical world.
            </p>
          </div>
          <Button asChild className="bg-elarion-gold hover:bg-elarion-gold/80 text-elarion-dark-purple">
            <Link to="/map">
              View the Map <MapIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="fantasy-card p-6">
          <h3 className="text-xl font-cinzel font-bold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5 text-primary" />
            Notable Characters
          </h3>
          <p className="text-muted-foreground mb-4">
            From legendary heroes to notorious villains, meet the individuals shaping the destiny of Elarion.
          </p>
          <Button asChild variant="outline" className="mt-2">
            <Link to="/characters">
              Meet the Characters
            </Link>
          </Button>
        </div>
        
        <div className="fantasy-card p-6">
          <h3 className="text-xl font-cinzel font-bold mb-4 flex items-center">
            <Compass className="mr-2 h-5 w-5 text-primary" />
            Magic System
          </h3>
          <p className="text-muted-foreground mb-4">
            Discover the Vein, spellglass artifacts, and the various magic disciplines practiced throughout the realm.
          </p>
          <Button asChild variant="outline" className="mt-2">
            <Link to="/world">
              Understand Magic
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorldPreview;
