
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface JournalEntry {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  location: string;
  content: string[];
  type: 'journal' | 'legend' | 'letter';
  tags: string[];
}

const Stories = () => {
  const journals: JournalEntry[] = [
    {
      id: "thornhollow-battle",
      title: "The Battle at Thornhollow",
      author: {
        name: "Kaelan the Wayfinder",
        avatar: "/kaelan.jpg"
      },
      date: "Autumn, 982",
      location: "Thornhollow",
      content: [
        "The mist hung low over Thornhollow as we approached. What was once a thriving village at the edge of the Ziona Marches now stood silent, shrouded in an unnatural fog that seemed to devour sound itself.",
        ""Something's wrong," Lirien whispered, her elven eyes narrowing. The Vein—that current of magic that flowed through all things—felt twisted here, corrupted.",
        "I felt for the familiar weight of my spellglass dagger. The enchanted crystal hummed against my palm, resonating with whatever malevolent force awaited us in the village square.",
        "We moved through empty streets, past abandoned market stalls and homes with doors left ajar. No birds sang. No children laughed. Only the occasional creak of a swinging sign broke the eerie silence.",
        ""The people," Rakash growled, his voice unusually soft for an Ashen warrior, "where are they all?"",
        "The answer came as we reached the square. Dozens of villagers stood motionless, their eyes vacant, arranged in concentric circles around a hooded figure. Before them lay a strange apparatus—a spellglass orb mounted on a tripod of blackened metal.",
        ""At last," the figure said without turning, "the Wayfinder arrives with his companions." The voice was familiar, cultured, with the clipped accent of Vel'Astra's upper circles.",
        ""Magistrate Thorne," I replied, gripping my dagger tighter. "Release these people. Your quarrel is with me."",
        "He turned then, revealing a face half-hidden behind an ornate mask of silver and spellglass. "My quarrel extends to all who would resist the Empire's rightful control of magic. These simple folk will serve as an excellent demonstration of the consequences of defiance."",
        "The orb began to pulse with sickly green light. I could feel the Vein being pulled, twisted toward the device. The villagers' vacant expressions contorted in silent pain.",
        "What happened next occurred in heartbeats. Lirien summoned roots from beneath the cobblestones to grasp at Thorne's legs. Rakash hurled a ball of concentrated flame at the orb. And I charged forward, spellglass dagger raised.",
        "The battle for Thornhollow had begun, and with it, perhaps, the first skirmish in a larger war for the future of magic in Elarion."
      ],
      type: 'journal',
      tags: ['Battle', 'Magic', 'Magistrate Thorne']
    },
    {
      id: "velharian-ceremony",
      title: "The Spellbinding Ceremony",
      author: {
        name: "Lirien Amberleaf",
        avatar: "/lirien.jpg"
      },
      date: "Summer, 982",
      location: "Vel'Astra",
      content: [
        "We entered the Imperial City at dawn, when the golden domes caught the first light and transformed Vel'Astra into a vision from a dream. I had never seen such a place—so different from my forest home that it might as well have been another world entirely.",
        "Kaelan led us through winding streets bustling with merchants, nobles, and academy students in their distinctive blue robes. 'Keep your connection to the Vein muted,' he warned. 'Imperial Inquisitors can sense wild magic use.'",
        "Rakash chuckled, the sound like stones grinding together. 'These city folk think their magic so refined, yet they bend it to such trivial purposes.' He nodded toward a street performer using minor cantrips to entertain children.",
        "I found myself surprisingly defensive of the display. 'Joy is never trivial, Rakash.'",
        "Our purpose in this den of imperial power was both dangerous and necessary: to observe the annual Spellbinding Ceremony, where the Academy's new graduates pledge their magical talents to the service of the Empress.",
        "We found places among the crowd in the Grand Plaza, cloaked and anonymous. Hundreds had gathered to witness the spectacle. The Arcane Academy's full faculty was present, resplendent in ceremonial robes adorned with spellglass embroidery that caught the light in hypnotic patterns.",
        "A hush fell as Empress Isolde herself appeared on the balcony above, her spellglass crown radiating power visible even to untrained eyes. Fifty young mages knelt before her, each bearing a staff of polished wood topped with a small shard of spellglass.",
        "'Today,' the Empress proclaimed, her voice magically amplified to reach every corner of the plaza, 'these chosen few join the ranks of those who preserve our way of life. Their magic shall be bound to our laws, their power checked by wisdom.'",
        "What followed was both beautiful and terrifying. As each graduate's name was called, they approached a great crystal basin filled with luminescent liquid. They dipped their staffs into this substance—pure distilled Vein essence, Kaelan whispered—and recited the oath of binding.",
        "With each oath, I felt a shudder in the Vein itself, as though something natural was being constrained, collared, domesticated.",
        "'This is why the Circle opposes the Empire,' I murmured. 'Not because they use magic, but because they believe it can be owned.'",
        "Kaelan nodded grimly. 'And why Magistrate Thorne hunts those of us who carry unbound spellglass. Freedom frightens those who rule through control.'",
        "We left before the ceremony concluded, our presence already a risk. But I carry the memory of those young mages, their faces radiant with pride as they surrendered something precious without fully understanding the cost."
      ],
      type: 'journal',
      tags: ['Ceremony', 'Imperial Magic', 'Vel\'Astra']
    },
    {
      id: "ancient-legend",
      title: "The Legend of the First Spellglass",
      author: {
        name: "Elder Whisperwind",
        avatar: "/elder.jpg"
      },
      date: "Unknown",
      location: "Ancient Grove",
      content: [
        "Before the Velharian Empire, before the great cities, when humans and elves and the other races lived in scattered tribes across Elarion, magic existed only in its wild form—untamed, unpredictable, a force of nature like wind or rain.",
        "In those days, those who could touch the Vein were called Speakers, for they spoke with the voice of the world itself. They did not control magic so much as request its aid, forming a partnership with the natural forces around them.",
        "It is said that in the Time of Long Shadows, a great disturbance rippled through the Vein. The stars aligned in a pattern not seen for millennia, and the barriers between realms thinned. On that night, in a remote mountain valley, a shard of crystalline material fell from the sky—a fragment of another world, perhaps, or a gift from entities beyond our understanding.",
        "This first spellglass, no larger than a child's fist, was discovered by a human Speaker named Velhar (yes, the same name later adopted by the imperial line, though the connection is tenuous at best). When he touched the crystal, it resonated with the Vein in a way nothing in our world ever had before.",
        "Velhar discovered that the crystal could store magical energy, focus it, direct it with precision that Speakers had never before achieved. With this newfound power, he protected his tribe from threats, healed the sick, and brought prosperity to his people.",
        "Word spread of the miraculous stone and the wonders its bearer could perform. Other tribes sent emissaries bearing gifts, seeking alliance or protection. Velhar's influence grew, and with it, the first seeds of what would one day become an empire.",
        "But the legend takes a darker turn. As Velhar aged, the spellglass began to change him. His connection to the wild Vein diminished as he relied more and more on the focused power of the crystal. He became possessive, suspicious, convinced that others sought to steal his treasure.",
        "In his paranoia, he ordered his followers to search for more of the material. They tore open the earth, diverted rivers, cut down ancient forests—all in pursuit of more spellglass. And they found it, veins of the crystal running deep beneath the mountains like the roots of some cosmic tree.",
        "The druids and elven Speakers warned of consequences, of the damage being done to the natural flow of the Vein. But their voices were silenced or ignored. Progress, power, control—these became the new values of Velhar's growing realm.",
        "It is said that on his deathbed, Velhar finally recognized what he had begun. With his last breath, he tried to shatter the original spellglass, to end the cycle he had started. But his closest advisors stayed his hand, for they had already tasted the power the crystal offered and could not imagine returning to a world without it.",
        "And so the first spellglass was set into the crown of Velhar's successor, becoming the symbol of authority that endures to this day in the regalia of the Velharian Empress.",
        "Whether this tale is history or metaphor, I cannot say with certainty. But I tell it to remind us that every power has its price, and that what we gain in control, we often lose in connection."
      ],
      type: 'legend',
      tags: ['Origin Story', 'Spellglass', 'Ancient History']
    },
    {
      id: "imperial-dispatch",
      title: "Imperial Dispatch: Concerning Rogue Elements",
      author: {
        name: "Magistrate Thorne",
        avatar: "/magistrate.jpg"
      },
      date: "Spring, 982",
      location: "Imperial Academy",
      content: [
        "To Her Imperial Majesty Isolde Velhar IV, Light of the Golden Throne, Keeper of the Sacred Vein, Empress of Elarion:",
        "I write to report on the matter of unauthorized spellglass possession and unregulated magical activity along the border regions. The situation has grown more concerning since my last dispatch.",
        "The individual known as Kaelan the Wayfinder continues to evade imperial justice. Intelligence suggests he has acquired a spellglass artifact of considerable power—possibly of pre-imperial origin. The potential threat cannot be overstated. Should such an artifact be used to destabilize the established magical order, the consequences could extend beyond mere political upheaval to fundamental disruption of the Vein itself.",
        "More troubling still is his growing network of accomplices. He now travels with an elven wild mage from the Ziona Marches and a fire elementalist from the Ashen Reach. This coalition of representatives from regions historically resistant to imperial authority cannot be coincidental.",
        "I have dispatched agents to key locations where this group has been sighted. Their instructions are to apprehend, not eliminate—I understand the value of interrogating such individuals to uncover broader conspiracies. However, the recovery of the spellglass artifact remains the primary objective.",
        "On the matter of resources, I must again request additional allocation of spellglass crystals for my Inquisitors. The tracing and nullification of wild magic requires tools of appropriate potency, and my current supply is inadequate for operations across multiple border regions.",
        "I have also taken the liberty of suspending the standard registration process for three graduating classes of Academy mages, directly conscripting the most promising into Inquisitorial service. While I recognize this circumvents traditional protocols, the current threat level justifies exceptional measures.",
        "Should these rogue elements succeed in demonstrating that magic can exist unregulated outside imperial control, we risk unraveling centuries of carefully maintained order. The common people must continue to believe that magic without Academy oversight is dangerous and unpredictable—a belief that becomes harder to maintain when individuals like the Wayfinder publicly defy our laws without facing consequences.",
        "I remain your loyal servant in this and all matters.",
        "By my hand and seal,",
        "Magistrate Thorne, Imperial Inquisitor First Class, Keeper of Arcane Law"
      ],
      type: 'letter',
      tags: ['Imperial Business', 'Magistrate Thorne', 'Kaelan']
    }
  ];
  
  const [currentJournal, setCurrentJournal] = useState<JournalEntry>(journals[0]);
  
  const getNextJournal = () => {
    const currentIndex = journals.findIndex(journal => journal.id === currentJournal.id);
    const nextIndex = (currentIndex + 1) % journals.length;
    setCurrentJournal(journals[nextIndex]);
  };
  
  const getPrevJournal = () => {
    const currentIndex = journals.findIndex(journal => journal.id === currentJournal.id);
    const prevIndex = (currentIndex - 1 + journals.length) % journals.length;
    setCurrentJournal(journals[prevIndex]);
  };
  
  const getIconForJournalType = (type: string) => {
    switch(type) {
      case 'journal': 
        return <BookOpen className="h-4 w-4 mr-1" />;
      case 'legend': 
        return <Calendar className="h-4 w-4 mr-1" />;
      case 'letter': 
        return <MapPin className="h-4 w-4 mr-1" />;
      default: 
        return null;
    }
  };
  
  return (
    <Layout>
      <div className="relative bg-elarion-dark-purple text-white overflow-hidden py-16">
        <div className="absolute inset-0 bg-[url('/stories-banner.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-cinzel text-white mb-4">
            Tales of <span className="text-elarion-gold">Elarion</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">
            Journal entries, legends, and correspondence from across the realm.
          </p>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="read" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="read" className="font-cinzel">
              <BookOpen className="mr-2 h-4 w-4" /> Read Stories
            </TabsTrigger>
            <TabsTrigger value="browse" className="font-cinzel">
              <Calendar className="mr-2 h-4 w-4" /> Browse Collection
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="read" className="mt-6">
            <div className="fantasy-card p-6 md:p-8 relative">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl md:text-3xl font-cinzel font-bold">{currentJournal.title}</h2>
                  <Badge variant="outline" className="flex items-center capitalize">
                    {getIconForJournalType(currentJournal.type)}
                    {currentJournal.type}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={currentJournal.author.avatar} alt={currentJournal.author.name} />
                      <AvatarFallback>{currentJournal.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{currentJournal.author.name}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-2">{currentJournal.date}</span>
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{currentJournal.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none font-lora">
                  {currentJournal.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {currentJournal.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between mt-6 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" onClick={getPrevJournal}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button variant="outline" size="sm" onClick={getNextJournal}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="browse" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {journals.map((journal) => (
                <div 
                  key={journal.id} 
                  className={`fantasy-card p-4 cursor-pointer hover:border-primary transition-colors ${
                    journal.id === currentJournal.id ? 'ring-1 ring-primary' : ''
                  }`}
                  onClick={() => setCurrentJournal(journal)}
                >
                  <div className="flex gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={journal.author.avatar} alt={journal.author.name} />
                      <AvatarFallback>{journal.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-cinzel font-semibold line-clamp-1">{journal.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{journal.author.name}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-2">{journal.date}</span>
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{journal.location}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="h-fit flex items-center capitalize text-xs">
                      {getIconForJournalType(journal.type)}
                      <span className="hidden sm:inline">{journal.type}</span>
                    </Badge>
                  </div>
                  <p className="text-sm line-clamp-2 mt-3">{journal.content[0]}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Stories;
