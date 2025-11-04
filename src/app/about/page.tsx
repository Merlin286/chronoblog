
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { ArrowRight, Telescope, BrainCircuit, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import placeholderImages from '../../lib/placeholder-images.json';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline">
          About ChronoBlog
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We are a collective of curious minds dedicated to exploring the fascinating intersections of time, technology, and the timeless tales they inspire.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src={placeholderImages.about.src}
            alt="Telescope pointed at a starry sky"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint={placeholderImages.about.hint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight font-headline">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to unravel the threads of innovation, from the ancient art of celestial navigation to the quantum leaps of modern computing. We believe that technology is not just about circuits and code; it's a deeply human story of curiosity, ambition, and the relentless pursuit of what's next.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            ChronoBlog is your digital destination for these explorations. We delve into the silent language of ancient forests, ponder the mysteries of dark matter, and trace humanity's quest to measure time itself.
          </p>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold tracking-tight font-headline text-center mb-12">What We Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card className="group bg-muted/50 border-none shadow-inner p-2 hover:shadow-xl hover:bg-muted transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                  <Telescope className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline">Timeless Histories</h3>
              <p className="text-muted-foreground">From ancient clocks to celestial navigation, we uncover the stories of how humanity has perceived and measured time throughout history.</p>
            </CardContent>
          </Card>
          <Card className="group bg-muted/50 border-none shadow-inner p-2 hover:shadow-xl hover:bg-muted transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                  <BrainCircuit className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline">Future Technologies</h3>
              <p className="text-muted-foreground">We dive into the cutting-edge, exploring AI, quantum computing, and the fusion of biology and technology that will shape our future.</p>
            </CardContent>
          </Card>
           <Card className="group bg-muted/50 border-none shadow-inner p-2 hover:shadow-xl hover:bg-muted transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                <BookOpen className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline">Greatest Mysteries</h3>
              <p className="text-muted-foreground">Join us as we ponder the biggest questions, from the nature of reality and the simulation hypothesis to the search for dark matter.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="text-center bg-muted rounded-2xl p-12">
        <h2 className="text-3xl font-bold tracking-tight font-headline mb-4">Join Our Journey</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Whether you're a tech enthusiast, a history buff, or simply a curious mind, we invite you to join us on this journey through time. Explore our stories and become part of our community.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            Explore Blog Posts <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>

    </div>
  );
}
