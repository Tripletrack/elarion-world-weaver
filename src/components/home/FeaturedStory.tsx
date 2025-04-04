
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedStory = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-cinzel mb-4">Featured Story</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the tales of adventure and intrigue from the journals of Elarion's heroes.
          </p>
        </div>
        
        <div className="fantasy-card p-8 md:p-10 border-accent/50">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-cinzel font-bold mb-3">The Battle at Thornhollow</h3>
              <p className="italic text-muted-foreground mb-4">From the journal of Kaelan the Wayfinder</p>
              
              <div className="prose prose-sm dark:prose-invert mb-4">
                <p className="mb-4">
                  The mist hung low over Thornhollow as we approached. What was once a thriving
                  village at the edge of the Ziona Marches now stood silent, shrouded in an unnatural fog
                  that seemed to devour sound itself.
                </p>
                <p className="mb-4">
                  "Something's wrong," Lirien whispered, her elven eyes narrowing. The Vein—that current
                  of magic that flowed through all things—felt twisted here, corrupted.
                </p>
                <p>
                  I felt for the familiar weight of my spellglass dagger. The enchanted crystal hummed against
                  my palm, resonating with whatever malevolent force awaited us in the village square...
                </p>
              </div>
              
              <Button asChild className="mt-2">
                <Link to="/stories">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Full Story
                </Link>
              </Button>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-full h-60 md:h-auto rounded-md overflow-hidden">
                <img 
                  src="/thornhollow.jpg" 
                  alt="Misty village of Thornhollow" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
