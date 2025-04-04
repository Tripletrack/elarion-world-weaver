
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { MapPin, Info, Compass } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  type: 'city' | 'landmark' | 'region';
  region: string;
  coordinates: { x: number; y: number };
  description: string;
}

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  
  const locations: Location[] = [
    {
      id: "velastra",
      name: "Vel'Astra",
      type: "city",
      region: "Velharian Empire",
      coordinates: { x: 55, y: 40 },
      description: "The imperial capital, home to the Golden Throne and the Imperial Arcane Academy. Its white spires and golden domes can be seen from miles away."
    },
    {
      id: "portlumina",
      name: "Port Lumina",
      type: "city",
      region: "Velharian Empire",
      coordinates: { x: 32, y: 52 },
      description: "Major trading port with the largest spellglass market in Elarion. Ships from across the Sapphire Seas dock at its enchanted harbors."
    },
    {
      id: "thornhollow",
      name: "Thornhollow",
      type: "city",
      region: "Ziona Marches",
      coordinates: { x: 70, y: 58 },
      description: "Border town between the Empire and the deep forest. Known for its unique architecture that incorporates living trees."
    },
    {
      id: "embercrag",
      name: "Embercrag",
      type: "city",
      region: "Ashen Reach",
      coordinates: { x: 80, y: 30 },
      description: "Main settlement of the Ashen Reach, built into the side of a dormant volcano. Famous for its fire-forged weaponry."
    },
    {
      id: "blasted",
      name: "Blasted Expanse",
      type: "region",
      region: "Forbidden Zone",
      coordinates: { x: 60, y: 20 },
      description: "A vast area of corrupted magic created during the Mage Wars. Reality itself is unstable here, and strange creatures roam the twisted landscape."
    },
    {
      id: "mistwatch",
      name: "Mistwatch",
      type: "landmark",
      region: "Ziona Marches",
      coordinates: { x: 75, y: 70 },
      description: "Outpost at the edge of the Shifting Mists, a zone of unpredictable wild magic. Serves as a warning post for travelers."
    },
    {
      id: "sapphire",
      name: "Sapphire Seas",
      type: "region",
      region: "Oceanic Territory",
      coordinates: { x: 20, y: 70 },
      description: "Vast waters known for their unusual blue hue, caused by trace amounts of dissolved spellglass. Home to the Crimson Sails pirate fleet."
    },
    {
      id: "crystalholm",
      name: "Crystalholm",
      type: "city",
      region: "Velharian Empire",
      coordinates: { x: 40, y: 30 },
      description: "Mining city known for rare magical crystals and ores. The entire settlement glows with an ethereal light at night."
    }
  ];
  
  const getPinColor = (type: string) => {
    switch(type) {
      case 'city': return 'text-elarion-gold';
      case 'landmark': return 'text-elarion-royal-purple';
      case 'region': return 'text-elarion-forest-green';
      default: return 'text-primary';
    }
  };
  
  const getPinSize = (type: string) => {
    switch(type) {
      case 'city': return 'h-6 w-6';
      case 'landmark': return 'h-5 w-5';
      case 'region': return 'h-7 w-7';
      default: return 'h-5 w-5';
    }
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-cinzel mb-4">Map of Elarion</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the various regions, cities, and landmarks of the realm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="fantasy-card p-4 h-[600px] relative">
              <div className="absolute inset-0 bg-[url('/elarion-map.jpg')] bg-cover bg-center rounded-md"></div>
              
              {/* Map Locations */}
              {locations.map((location) => (
                <button
                  key={location.id}
                  className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group hover:z-10`}
                  style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
                  onClick={() => setSelectedLocation(location)}
                >
                  <div className={`${getPinColor(location.type)} ${getPinSize(location.type)} animate-pulse`}>
                    {location.type === 'city' ? (
                      <MapPin className="w-full h-full" />
                    ) : location.type === 'landmark' ? (
                      <Compass className="w-full h-full" />
                    ) : (
                      <Info className="w-full h-full" />
                    )}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/70 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {location.name}
                  </div>
                </button>
              ))}
              
              {/* Map Legend */}
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-md border border-border">
                <h3 className="text-sm font-medium mb-2">Map Legend</h3>
                <div className="flex flex-col gap-2 text-xs">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-elarion-gold mr-2" />
                    <span>Cities</span>
                  </div>
                  <div className="flex items-center">
                    <Compass className="h-4 w-4 text-elarion-royal-purple mr-2" />
                    <span>Landmarks</span>
                  </div>
                  <div className="flex items-center">
                    <Info className="h-4 w-4 text-elarion-forest-green mr-2" />
                    <span>Regions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="fantasy-card p-4 h-[600px] overflow-y-auto fantasy-scrollbar">
              <h2 className="text-xl font-cinzel font-bold mb-3 text-center">Location Details</h2>
              
              {selectedLocation ? (
                <div>
                  <h3 className="text-lg font-cinzel font-semibold">{selectedLocation.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span className={`${getPinColor(selectedLocation.type)} mr-1`}>
                      {selectedLocation.type === 'city' ? (
                        <MapPin className="h-4 w-4" />
                      ) : selectedLocation.type === 'landmark' ? (
                        <Compass className="h-4 w-4" />
                      ) : (
                        <Info className="h-4 w-4" />
                      )}
                    </span>
                    <span className="capitalize mr-1">{selectedLocation.type}</span> • 
                    <span className="ml-1">{selectedLocation.region}</span>
                  </div>
                  
                  <p className="text-sm mb-4">{selectedLocation.description}</p>
                  
                  <div className="mt-6 p-3 bg-secondary/40 rounded-md">
                    <h4 className="text-sm font-medium mb-1">Notable Features</h4>
                    <ul className="text-xs text-muted-foreground space-y-1 list-disc pl-4">
                      {selectedLocation.type === 'city' && (
                        <>
                          <li>Local government maintains order</li>
                          <li>Trading posts and marketplaces</li>
                          <li>Various factions maintain presence</li>
                        </>
                      )}
                      {selectedLocation.type === 'landmark' && (
                        <>
                          <li>Unique magical properties</li>
                          <li>Historically significant location</li>
                          <li>Often guarded or protected</li>
                        </>
                      )}
                      {selectedLocation.type === 'region' && (
                        <>
                          <li>Expansive area with varied terrain</li>
                          <li>Contains multiple settlements</li>
                          <li>Unique climatic conditions</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground mt-8">
                  <MapPin className="h-10 w-10 mx-auto mb-3 opacity-40" />
                  <p>Select a location on the map to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;
