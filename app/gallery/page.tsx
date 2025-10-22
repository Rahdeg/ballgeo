"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const galleryImages = [
    {
        src: "/gone.jpeg",
        alt: "Cozy interior with comfortable seating and warm lighting",
        category: "Interior"
    },
    {
        src: "/gtwo.jpeg",
        alt: "Barista crafting the perfect latte art",
        category: "Coffee"
    },
    {
        src: "/gthree.jpeg",
        alt: "Fresh pastries and coffee beans display",
        category: "Food"
    },
    {
        src: "/gfour.jpeg",
        alt: "Reading nook with books and soft lighting",
        category: "Interior"
    },
    {
        src: "/gfive.jpeg",
        alt: "Coffee roasting equipment and beans",
        category: "Coffee"
    },

];

const categories = ["All", "Interior", "Coffee", "Food"];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = selectedCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.png"
                        alt="Bellagio Café interior gallery preview"
                        width={1920}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                        Gallery
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed">
                        A visual journey through our café experience
                    </p>
                </div>
            </section>

            {/* Gallery Content */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                className={`cursor-pointer px-4 py-2 text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                    : "hover:bg-muted"
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </Badge>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredImages.map((image, index) => (
                            <Dialog key={index}>
                                <DialogTrigger asChild>
                                    <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={400}
                                            height={400}
                                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Badge variant="secondary" className="bg-white/90 text-foreground">
                                                {image.category}
                                            </Badge>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                                    <div className="relative">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={1200}
                                            height={800}
                                            className="object-contain w-full h-full max-h-[80vh] rounded-lg"
                                            onClick={() => setSelectedImage(null)}
                                        />
                                        <div className="absolute bottom-4 left-4">
                                            <Badge className="bg-primary text-primary-foreground">
                                                {image.category}
                                            </Badge>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16 p-8 bg-muted/30 rounded-lg">
                        <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                            Experience It Yourself
                        </h3>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                            These photos capture just a glimpse of the Bella Geo experience.
                            Come visit us to fully immerse yourself in our warm, welcoming atmosphere.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}