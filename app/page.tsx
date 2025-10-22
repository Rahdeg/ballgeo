import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const featuredItems = [
  {
    id: 1,
    name: "Signature Espresso Blend",
    description: "Our house blend featuring notes of chocolate and caramel, crafted from premium Ethiopian and Colombian beans.",
    price: "₦2,500",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop&crop=center",
    badge: "Popular"
  },
  {
    id: 2,
    name: "Artisan Croissant",
    description: "Buttery, flaky pastry made fresh daily with French butter and organic flour.",
    price: "₦2,000",
    image: "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=400&h=400&fit=crop&crop=center",
    badge: "Fresh Daily"
  },
  {
    id: 3,
    name: "Lavender Honey Latte",
    description: "A soothing blend of espresso, steamed milk, and locally sourced lavender honey.",
    price: "₦3,000",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop&crop=center",
    badge: "Seasonal"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Adunni Oladele",
    text: "The perfect spot for my morning coffee and remote work. The atmosphere is incredibly welcoming and the coffee is exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Olumide Adebayo",
    text: "Bellagio Café has become our go-to date night spot. The evening ambiance with soft lighting and jazz music is simply perfect.",
    rating: 5
  },
  {
    id: 3,
    name: "Funmilayo Akinwale",
    text: "Amazing pastries and the friendliest staff in town. This place feels like a warm hug every time I visit.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Bellagio Café interior with warm lighting"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Welcome to <span className="text-accent">Bellagio Café</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Where exceptional coffee meets warm community. Experience artisan craftsmanship in every cup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-white hover:bg-white text-primary">
              <Link href="/contact">Book a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Born from a passion for exceptional coffee and genuine community, Bellagio Café opened its doors in 2019.
                We believe that great coffee is more than just a beverage—it&apos;s a catalyst for connection, conversation, and creativity in the heart of Abeokuta.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every morning, we carefully craft each cup using ethically sourced beans from Nigerian farms and sustainable farms across Africa.
                Our cozy lounge space provides the perfect backdrop for business meetings, study sessions, or simply enjoying life&apos;s simple pleasures with friends and family.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/lounge.jpg"
                  alt="Barista carefully preparing coffee"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Featured Favorites
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most beloved creations, crafted with passion and served with pride.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <StaggerItem key={item.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {item.badge}
                    </Badge>
                  </div>
                  <CardHeader className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-serif">{item.name}</CardTitle>
                      <span className="text-lg font-semibold text-primary">{item.price}</span>
                    </div>
                    <CardDescription className="text-muted-foreground flex-1">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/menu">Explore Full Menu</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The warmth of our community shines through in every review.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <Card className="text-center h-full flex flex-col">
                  <CardHeader className="flex-1 flex flex-col">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <CardDescription className="text-lg italic leading-relaxed flex-1">
                      &ldquo;{testimonial.text}&rdquo;
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Experience Bellagio Café?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us for exceptional coffee, delicious food, and warm hospitality. We can&apos;t wait to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">Visit Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground  hover:bg-primary-foreground text-primary">
              <Link href="/gallery">See Our Space</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
