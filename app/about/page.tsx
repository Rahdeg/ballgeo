import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Heart, Users, Leaf } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us - Bella Geo Café & Lounge",
    description: "Learn about our story, our passion for exceptional coffee, and our commitment to creating a warm, welcoming community space.",
};

const values = [
    {
        icon: Coffee,
        title: "Quality First",
        description: "Every cup is crafted with precision using ethically sourced, premium beans roasted to perfection."
    },
    {
        icon: Heart,
        title: "Community Focus",
        description: "We believe in fostering connections and creating a space where everyone feels welcome and valued."
    },
    {
        icon: Users,
        title: "Local Partnership",
        description: "Supporting local suppliers, artists, and musicians to strengthen our community bonds."
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "Committed to environmentally responsible practices from sourcing to serving."
    }
];

const team = [
    {
        name: "Maria Rodriguez",
        role: "Owner & Head Barista",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
        bio: "With over 15 years in the coffee industry, Maria brings her passion for exceptional coffee and warm hospitality to every cup."
    },
    {
        name: "James Chen",
        role: "Head Chef",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        bio: "James creates our delicious pastries and brunch menu, combining classic techniques with modern flavors."
    },
    {
        name: "Sofia Thompson",
        role: "Community Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
        bio: "Sofia coordinates our events, workshops, and community partnerships, ensuring Bella Geo remains a vibrant gathering place."
    }
];

export default function About() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&h=800&fit=crop&crop=center"
                        alt="Cozy café interior with books and warm lighting"
                        width={1920}
                        height={800}
                        className="object-cover w-full h-full"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                        Our Story
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed">
                        A journey of passion, community, and exceptional coffee
                    </p>
                </div>
            </section>

            {/* Main Story Section */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                                The Beginning
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Bella Geo was born from a simple dream: to create a space where exceptional coffee meets genuine community.
                                Founded in 2019 by Maria Rodriguez, our café started as a vision to bring people together over the perfect cup of coffee.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                After traveling the world and experiencing coffee cultures from Ethiopia to Colombia, Maria wanted to create
                                something special in her hometown—a place that honors the craft of coffee while fostering meaningful connections.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Today, Bella Geo stands as more than just a café. We are a community hub where students study, friends catch up,
                                artists create, and neighbors become family. Every cup we serve carries our commitment to quality, sustainability, and connection.
                            </p>
                        </div>
                        <div className="relative h-[600px] rounded-lg overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1559116315-702b0b4774ce?w=600&h=600&fit=crop&crop=center"
                                alt="Coffee beans and brewing equipment"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                            Our Values
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do, from sourcing beans to serving our community.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader>
                                        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                                            <IconComponent className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl font-serif">{value.title}</CardTitle>
                                        <CardDescription className="text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The passionate people behind every exceptional experience at Bella Geo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={320}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl font-serif">{member.name}</CardTitle>
                                    <Badge variant="secondary" className="mx-auto w-fit">
                                        {member.role}
                                    </Badge>
                                    <CardDescription className="text-muted-foreground leading-relaxed mt-4">
                                        {member.bio}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location & Atmosphere */}
            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] rounded-lg overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1501339847302-ac426a4a24a5?w=600&h=500&fit=crop&crop=center"
                                alt="Interior of Bella Geo café showing cozy seating and warm lighting"
                                width={600}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                                Our Space
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Step inside Bella Geo and feel instantly at home. Our thoughtfully designed space combines rustic charm
                                with modern comfort, featuring exposed brick walls, vintage furniture, and plenty of natural light.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Whether you prefer the energetic buzz of our main dining area, the quiet focus of our study nooks,
                                or the intimate conversation spaces in our lounge, we have the perfect spot for every mood and occasion.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Free Wi-Fi, abundant power outlets, and a carefully curated playlist create the ideal environment
                                for work, study, or simply enjoying life&apos;s simple pleasures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}