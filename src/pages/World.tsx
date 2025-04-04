
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layout/Layout';
import { MapPin, Wand2, Shield, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const World = () => {
  const regions = [
    {
      id: "velharian-empire",
      name: "Velharian Empire",
      description: "The crown jewel of civilization in Elarion, the Velharian Empire spans the central continent with its gleaming cities and strict magical hierarchy.",
      longDescription: "Founded over a thousand years ago by Emperor Velhar the Magnificent, the Empire stretches from the Sapphire Seas to the Mountains of Dawn. Its cities are marvels of magical architecture, with spires that seem to defy gravity and streets lit by eternal flame lanterns. The Empire strictly regulates magic use through the Imperial Arcane Academy, with unauthorized spellcasting punishable by imprisonment.",
      cities: [
        { name: "Vel'Astra", description: "The imperial capital, home to the Golden Throne and the Imperial Arcane Academy." },
        { name: "Port Lumina", description: "Major trading port with the largest spellglass market in Elarion." },
        { name: "Crystalholm", description: "Mining city known for rare magical crystals and ores." }
      ],
      imageUrl: "/velharian-empire.jpg"
    },
    {
      id: "ziona-marches",
      name: "Ziona Marches",
      description: "Vast untamed wilderness where ancient forests conceal druidic circles and creatures of legend.",
      longDescription: "The Ziona Marches remain one of the few regions where wild magic flows uninhibited by imperial regulation. Dense forests cover most of the territory, with trees that have stood since the Dawn Age. The druids who call this place home protect the delicate balance of nature and guard ancient groves where the Vein runs close to the surface. While villages exist along the edges of the forest, few outsiders venture deep into the wilds.",
      cities: [
        { name: "Thornhollow", description: "Border town between the Empire and the deep forest." },
        { name: "Greenvale", description: "Hidden druidic settlement built within and around massive trees." },
        { name: "Mistwatch", description: "Outpost at the edge of the Shifting Mists, a zone of unpredictable wild magic." }
      ],
      imageUrl: "/ziona-marches.jpg"
    },
    {
      id: "ashen-reach",
      name: "Ashen Reach",
      description: "Volcanic badlands inhabited by fire elementalists and obsidian miners, resistant to imperial control.",
      longDescription: "Born from the cataclysmic eruption of Mount Cinderspire centuries ago, the Ashen Reach is a harsh land of blackened earth, lava flows, and ash storms. Despite its inhospitable nature, its people have thrived by developing a unique form of fire magic that allows them to manipulate the volcanic energies. The Empire has made several attempts to bring the region under its control, but the fierce independence of the Ashen tribes and the dangerous terrain have kept them largely autonomous.",
      cities: [
        { name: "Embercrag", description: "Main settlement built into the side of a dormant volcano." },
        { name: "Sootfall", description: "Mining community where rare fire-resistant materials are harvested." },
        { name: "Cinderhaven", description: "Fortified outpost where fire mages train and study." }
      ],
      imageUrl: "/ashen-reach.jpg"
    }
  ];

  const magicSystem = {
    title: "The Magic of Elarion",
    description: "Magic in Elarion flows through the Vein, an invisible current of arcane energy that permeates the world.",
    elements: [
      {
        title: "The Vein",
        description: "The fundamental source of all magic in Elarion, the Vein is an invisible network of arcane energy that flows throughout the world. Skilled magic users can tap into the Vein to cast spells, though doing so requires training and natural aptitude. In some regions, the Vein runs closer to the surface, creating zones of intense magical activity."
      },
      {
        title: "Spellglass",
        description: "A crystalline material that can store and focus magical energy. Spellglass artifacts are highly valued and come in various forms: wands, amulets, orbs, and even weapons. The Imperial Arcane Academy controls most of the known spellglass mines, making it a valuable resource and political tool."
      },
      {
        title: "Magic Classes",
        description: "Magic users in Elarion fall into several traditions: Academic Mages (trained in the Imperial Arcane Academy), Wild Mages (self-taught or mentored outside the Empire), Elementalists (specialized in controlling one element), Druids (nature-focused casters), and rare Blood Mages (forbidden practice of magic through life essence)."
      },
      {
        title: "Forbidden Zones",
        description: "Areas where the Vein has been damaged or corrupted, causing unpredictable and dangerous magical effects. The largest is the Blasted Expanse, created during the Mage Wars three centuries ago. These zones are quarantined by imperial decree, though treasure hunters and researchers sometimes venture in despite the risks."
      }
    ]
  };

  const factions = [
    {
      name: "The Golden Throne",
      description: "The ruling body of the Velharian Empire, led by Empress Isolde Velhar IV and her council of noble houses."
    },
    {
      name: "Imperial Arcane Academy",
      description: "The official institution for magical education and research, which also regulates magic use throughout the Empire."
    },
    {
      name: "Circle of the Ancient Bloom",
      description: "The primary druidic order in the Ziona Marches, protecting the balance of nature and opposing imperial expansion."
    },
    {
      name: "Ashen Tribes Confederation",
      description: "Loose alliance of the fire elementalist clans from the Ashen Reach, unified only when facing external threats."
    },
    {
      name: "The Crimson Sails",
      description: "Notorious pirate fleet led by Admiral Blacktide, controlling trade routes along the Sapphire Seas."
    },
    {
      name: "Veiled Hand",
      description: "Secret society of spellglass smugglers and unauthorized magic users operating in the shadows of imperial rule."
    }
  ];

  return (
    <Layout>
      <div className="relative bg-elarion-dark-purple text-white overflow-hidden py-16">
        <div className="absolute inset-0 bg-[url('/world-lore-banner.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-cinzel text-white mb-4">
            World of <span className="text-elarion-gold">Elarion</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">
            Discover the lands, magic, and history that shape this realm of wonder and danger.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="regions" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="regions" className="font-cinzel">
              <MapPin className="mr-2 h-4 w-4" /> Regions
            </TabsTrigger>
            <TabsTrigger value="magic" className="font-cinzel">
              <Wand2 className="mr-2 h-4 w-4" /> Magic System
            </TabsTrigger>
            <TabsTrigger value="factions" className="font-cinzel">
              <Shield className="mr-2 h-4 w-4" /> Factions & History
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="regions" className="mt-6">
            {regions.map((region) => (
              <div key={region.id} className="mb-10 fantasy-card p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3">
                    <div className="relative rounded-md overflow-hidden h-60 lg:h-full">
                      <img 
                        src={region.imageUrl} 
                        alt={region.name} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <h2 className="text-2xl font-cinzel font-bold mb-2">{region.name}</h2>
                    <p className="text-muted-foreground mb-4">{region.description}</p>
                    <p className="mb-4">{region.longDescription}</p>
                    
                    <h3 className="text-lg font-cinzel font-semibold mb-2">Key Locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      {region.cities.map((city) => (
                        <div key={city.name} className="bg-secondary/40 p-3 rounded-md">
                          <h4 className="font-cinzel font-medium">{city.name}</h4>
                          <p className="text-sm text-muted-foreground">{city.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild variant="outline" size="sm" className="mt-2">
                      <Link to={`/map?region=${region.id}`}>
                        View on Map <MapPin className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="magic" className="mt-6">
            <div className="fantasy-card p-6 mb-6">
              <h2 className="text-2xl font-cinzel font-bold mb-4">{magicSystem.title}</h2>
              <p className="text-lg mb-6">{magicSystem.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {magicSystem.elements.map((element, index) => (
                  <div key={index} className="bg-secondary/40 p-5 rounded-md">
                    <h3 className="text-xl font-cinzel font-semibold mb-2">{element.title}</h3>
                    <p className="text-muted-foreground">{element.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden bg-elarion-mystic-blue">
              <div className="absolute inset-0 bg-[url('/magic-texture.jpg')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10 p-6 md:p-8">
                <h3 className="text-xl font-cinzel font-bold text-white mb-3">The Great Mage Wars</h3>
                <p className="text-white/80 mb-4">
                  Three centuries ago, a catastrophic conflict between rival arcane factions resulted in the creation 
                  of the Blasted Expanse, a vast forbidden zone where magic behaves erratically and dangerously. 
                  The aftermath led to the establishment of the Imperial Arcane Academy and strict regulation of 
                  spellcasting throughout the Empire.
                </p>
                <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <Link to="/stories">
                    Read Historical Accounts <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="factions" className="mt-6">
            <div className="mb-8">
              <h2 className="text-2xl font-cinzel font-bold mb-4">Major Factions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {factions.map((faction, index) => (
                  <div key={index} className="fantasy-card p-5">
                    <h3 className="text-xl font-cinzel font-semibold mb-2">{faction.name}</h3>
                    <p className="text-muted-foreground">{faction.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="fantasy-card p-6">
              <h2 className="text-2xl font-cinzel font-bold mb-4">Timeline of Elarion</h2>
              <div className="relative border-l-2 border-elarion-gold/50 pl-6 space-y-6">
                {[
                  {
                    year: "Year 0",
                    title: "The Founding",
                    description: "The discovery of the first spellglass deposit and the establishment of Vel'Astra."
                  },
                  {
                    year: "Year 245",
                    title: "Rise of the Velharian Empire",
                    description: "Emperor Velhar the Magnificent unites the scattered kingdoms under one banner."
                  },
                  {
                    year: "Year 467",
                    title: "The Wild Magic Revolt",
                    description: "Druids and wild mages rebel against imperial restrictions on spellcasting."
                  },
                  {
                    year: "Year 703",
                    title: "The Great Mage Wars",
                    description: "Arcane conflict creates the Blasted Expanse and leads to magic regulation."
                  },
                  {
                    year: "Year 982",
                    title: "Present Day",
                    description: "Empress Isolde Velhar IV rules the empire during a time of increasing tensions."
                  }
                ].map((event, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-9 mt-1.5 h-4 w-4 rounded-full bg-elarion-gold"></div>
                    <h3 className="text-lg font-cinzel font-semibold">{event.year}: {event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default World;
