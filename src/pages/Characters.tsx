import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Users, Skull, User2, Upload, Plus } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

type CharacterCategory = 'all' | 'heroes' | 'villains' | 'npcs';

interface Character {
  id: string;
  name: string;
  race: string;
  class: string;
  faction: string;
  category: 'heroes' | 'villains' | 'npcs';
  portrait: string;
  backstory: string;
  locations: string[];
}

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CharacterCategory>('all');
  const [characters, setCharacters] = useState<Character[]>([
    {
      id: "kaelan",
      name: "Kaelan the Wayfinder",
      race: "Human",
      class: "Spellblade",
      faction: "Independent",
      category: "heroes",
      portrait: "/kaelan.jpg",
      backstory: "Once an imperial scout, Kaelan discovered a rare spellglass artifact during an expedition to the Blasted Expanse. The exposure to wild magic granted him unique abilities but made him a target for the Imperial Arcane Academy. Now he travels Elarion, using his talents to help those in need while staying one step ahead of imperial agents.",
      locations: ["Thornhollow", "Vel'Astra", "Blasted Expanse"]
    },
    {
      id: "lirien",
      name: "Lirien Amberleaf",
      race: "Elf",
      class: "Wild Mage",
      faction: "Circle of the Ancient Bloom",
      category: "heroes",
      portrait: "/lirien.jpg",
      backstory: "Born in the heart of the Ziona Marches, Lirien was trained from childhood in the druidic arts. Her exceptional connection to the Vein has made her one of the youngest masters in the Circle of the Ancient Bloom. She joined Kaelan's travels after he helped defend her forest home from imperial expansionists.",
      locations: ["Ziona Marches", "Greenvale", "Mistwatch"]
    },
    {
      id: "magistrate",
      name: "Magistrate Thorne",
      race: "Human",
      class: "Arcane Inquisitor",
      faction: "Imperial Arcane Academy",
      category: "villains",
      portrait: "/magistrate.jpg",
      backstory: "A ruthless enforcer of imperial magic law, Magistrate Thorne has built his reputation on capturing rogue spellcasters. His obsession with finding Kaelan stems from a personal vendetta—the spellglass artifact Kaelan possesses was once meant for Thorne's collection. He commands a small but elite force of magic-nullifying agents.",
      locations: ["Vel'Astra", "Port Lumina", "Imperial Academy"]
    },
    {
      id: "rakash",
      name: "Rakash Cinderfist",
      race: "Half-Orc",
      class: "Fire Elementalist",
      faction: "Ashen Tribes",
      category: "heroes",
      portrait: "/rakash.jpg",
      backstory: "Forged in the harsh environment of the Ashen Reach, Rakash left his tribal home to prove that fire magic could be used for creation as much as destruction. His journey brought him into conflict with imperial forces attempting to claim volcano-forged spellglass, where he crossed paths with Kaelan and Lirien.",
      locations: ["Ashen Reach", "Embercrag", "Cinderhaven"]
    },
    {
      id: "mistress",
      name: "Mistress Midnight",
      race: "Unknown",
      class: "Blood Mage",
      faction: "Veiled Hand",
      category: "villains",
      portrait: "/mistress.jpg",
      backstory: "Little is known about the mysterious figure who leads the Veiled Hand's spellglass smuggling operations. Rumors claim she practices the forbidden art of blood magic and seeks ancient artifacts for an unknown purpose. Her network of spies extends throughout the empire and beyond.",
      locations: ["Unknown", "Shadowed Quarters", "Smuggler's Cove"]
    },
    {
      id: "captain",
      name: "Captain Marlowe",
      race: "Human",
      class: "Navigator",
      faction: "Crimson Sails",
      category: "npcs",
      portrait: "/captain.jpg",
      backstory: "A weathered sailor with an uncanny sense for naval navigation, Captain Marlowe commands The Tempest's Wing in Admiral Blacktide's fleet. While not magical himself, his ship is rumored to be enchanted with weather-controlling spellglass. He maintains a neutral stance in most conflicts, prioritizing profit above politics.",
      locations: ["Sapphire Seas", "Port Lumina", "Pirate Haven"]
    },
    {
      id: "elder",
      name: "Elder Whisperwind",
      race: "Elf",
      class: "Archdruid",
      faction: "Circle of the Ancient Bloom",
      category: "npcs",
      portrait: "/elder.jpg",
      backstory: "The ancient leader of the Circle of the Ancient Bloom, Whisperwind is one of the oldest living beings in Elarion. Her wisdom guides the druids of the Ziona Marches, and her voice carries weight in matters concerning the natural balance. She has taken a particular interest in Lirien's development and the artifacts Kaelan has discovered.",
      locations: ["Greenvale", "Ancient Grove", "Ziona Marches"]
    }
  ]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const characterFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    race: z.string().min(1, { message: "Race is required" }),
    class: z.string().min(1, { message: "Class is required" }),
    faction: z.string().min(1, { message: "Faction is required" }),
    category: z.enum(["heroes", "villains", "npcs"], { 
      message: "Please select a valid category" 
    }),
    backstory: z.string().min(20, { 
      message: "Backstory should be at least 20 characters" 
    }),
    locations: z.string().min(1, { 
      message: "Please provide at least one location" 
    }),
  });

  type CharacterFormValues = z.infer<typeof characterFormSchema>;

  const form = useForm<CharacterFormValues>({
    resolver: zodResolver(characterFormSchema),
    defaultValues: {
      name: "",
      race: "",
      class: "",
      faction: "",
      category: "heroes",
      backstory: "",
      locations: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: CharacterFormValues) => {
    if (!imagePreview) {
      toast({
        variant: "destructive",
        title: "Character image required",
        description: "Please upload an image for your character",
      });
      return;
    }

    // Create a new character
    const newCharacter: Character = {
      id: Date.now().toString(),
      name: data.name,
      race: data.race,
      class: data.class,
      faction: data.faction,
      category: data.category,
      portrait: imagePreview,
      backstory: data.backstory,
      locations: data.locations.split(',').map(loc => loc.trim()),
    };

    // Add the new character to the state
    setCharacters(prevCharacters => [...prevCharacters, newCharacter]);
    
    // Close dialog and reset form
    setDialogOpen(false);
    setImagePreview(null);
    form.reset();

    toast({
      title: "Character created",
      description: `${data.name} has been added to your characters`,
    });
  };
  
  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          character.race.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          character.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          character.faction.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || character.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  const getCategoryIcon = (category: CharacterCategory) => {
    switch (category) {
      case 'heroes':
        return <Users className="h-5 w-5" />;
      case 'villains':
        return <Skull className="h-5 w-5" />;
      case 'npcs':
        return <User2 className="h-5 w-5" />;
      default:
        return null;
    }
  };
  
  return (
    <Layout>
      <div className="relative bg-elarion-dark-purple text-white overflow-hidden py-16">
        <div className="absolute inset-0 bg-[url('/characters-banner.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-cinzel text-white mb-4">
            Characters of <span className="text-elarion-gold">Elarion</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">
            Heroes and villains whose actions shape the destiny of the realm.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 fantasy-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="col-span-1 md:col-span-2">
              <Label htmlFor="search" className="mb-2 block">Search Characters</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, race, class..."
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <Label className="mb-2 block">Filter by Category</Label>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={categoryFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategoryFilter('all')}
                >
                  All Characters
                </Button>
                <Button
                  variant={categoryFilter === 'heroes' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategoryFilter('heroes')}
                  className={categoryFilter === 'heroes' ? 'bg-elarion-royal-purple' : ''}
                >
                  <Users className="mr-1 h-4 w-4" /> Heroes
                </Button>
                <Button
                  variant={categoryFilter === 'villains' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategoryFilter('villains')}
                  className={categoryFilter === 'villains' ? 'bg-elarion-deep-red' : ''}
                >
                  <Skull className="mr-1 h-4 w-4" /> Villains
                </Button>
                <Button
                  variant={categoryFilter === 'npcs' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategoryFilter('npcs')}
                  className={categoryFilter === 'npcs' ? 'bg-elarion-forest-green' : ''}
                >
                  <User2 className="mr-1 h-4 w-4" /> NPCs
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-cinzel font-bold">
            {filteredCharacters.length} {categoryFilter !== 'all' ? categoryFilter : ''} 
            {filteredCharacters.length === 1 ? ' character' : ' characters'} found
          </h2>
          
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-elarion-royal-purple hover:bg-elarion-royal-purple/90">
                <Plus className="mr-2 h-4 w-4" /> Add Character
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-cinzel text-xl">Add New Character</DialogTitle>
                <DialogDescription>
                  Create a new character for your Elarion campaign.
                </DialogDescription>
              </DialogHeader>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Character Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Kaelan the Wayfinder" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="race"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Race</FormLabel>
                          <FormControl>
                            <Input placeholder="Human, Elf, Half-Orc..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="class"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Class</FormLabel>
                          <FormControl>
                            <Input placeholder="Spellblade, Wild Mage..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="faction"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Faction</FormLabel>
                          <FormControl>
                            <Input placeholder="Independent, Circle of the Ancient Bloom..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <div className="flex flex-wrap gap-2">
                          {(['heroes', 'villains', 'npcs'] as const).map((category) => (
                            <Button
                              key={category}
                              type="button"
                              variant={field.value === category ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => form.setValue('category', category)}
                              className={field.value === category ? 
                                `bg-elarion-${category === 'heroes' ? 'royal-purple' : 
                                              category === 'villains' ? 'deep-red' : 
                                              'forest-green'}` : ''}
                            >
                              {getCategoryIcon(category as CharacterCategory)} {category}
                            </Button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <Label htmlFor="portrait" className="block mb-2">Character Portrait</Label>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="border-2 border-dashed border-border rounded-md p-4 text-center hover:bg-accent/50 cursor-pointer transition-colors">
                          <Input 
                            id="portrait" 
                            type="file" 
                            accept="image/*" 
                            className="hidden"
                            onChange={handleImageChange}
                          />
                          <Label htmlFor="portrait" className="cursor-pointer flex flex-col items-center">
                            <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                            <span className="text-sm font-medium">
                              {imagePreview ? 'Change image' : 'Upload image'}
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">
                              JPG, PNG or GIF
                            </span>
                          </Label>
                        </div>
                      </div>
                      
                      {imagePreview && (
                        <div className="w-24 h-24 overflow-hidden rounded-md border border-border">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="backstory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Backstory</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell the character's story..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="locations"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Key Locations</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Thornhollow, Vel'Astra, Blasted Expanse..." 
                            {...field} 
                          />
                        </FormControl>
                        <p className="text-xs text-muted-foreground mt-1">
                          Separate locations with commas
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <DialogFooter>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Create Character</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.map((character) => (
            <div key={character.id} className="fantasy-card overflow-hidden group">
              <div className="relative h-64">
                <img 
                  src={character.portrait} 
                  alt={character.name} 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <Badge className={`
                    ${character.category === 'heroes' ? 'bg-elarion-royal-purple' : 
                      character.category === 'villains' ? 'bg-elarion-deep-red' : 
                      'bg-elarion-forest-green'}
                  `}>
                    {getCategoryIcon(character.category as CharacterCategory)}
                    <span className="ml-1 capitalize">{character.category}</span>
                  </Badge>
                  <h3 className="text-xl font-cinzel font-bold text-white mt-1">{character.name}</h3>
                  <p className="text-white/80 text-sm">{character.race} • {character.class}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Faction:</span> {character.faction}
                  </p>
                </div>
                
                <p className="text-sm mb-4 line-clamp-3">{character.backstory}</p>
                
                <div>
                  <p className="text-sm font-medium mb-1">Key Locations:</p>
                  <div className="flex flex-wrap gap-1">
                    {character.locations.map((location, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {location}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCharacters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No characters match your search criteria.</p>
            <Button variant="outline" onClick={() => {setSearchTerm(''); setCategoryFilter('all');}} className="mt-4">
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Characters;
