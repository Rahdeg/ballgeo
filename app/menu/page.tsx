import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Menu - Bella Geo Café & Lounge",
    description: "Explore our carefully crafted menu featuring artisan coffee, fresh pastries, hearty brunch options, and signature cocktails.",
};

const menuSections = [
    {
        title: "Coffee & Espresso",
        items: [
            {
                name: "Signature Espresso Blend",
                description: "Our house blend with notes of chocolate and caramel",
                price: "$4.50",
                badges: ["Popular"]
            },
            {
                name: "Single Origin Ethiopian",
                description: "Bright, floral notes with hints of berry",
                price: "$5.00",
                badges: ["Limited"]
            },
            {
                name: "Classic Americano",
                description: "Rich espresso with hot water",
                price: "$3.75"
            },
            {
                name: "Cappuccino",
                description: "Equal parts espresso, steamed milk, and foam",
                price: "$4.25"
            },
            {
                name: "Caramel Macchiato",
                description: "Vanilla syrup, steamed milk, espresso, and caramel drizzle",
                price: "$5.50"
            },
            {
                name: "Mocha",
                description: "Espresso, chocolate, steamed milk, whipped cream",
                price: "$5.25"
            }
        ]
    },
    {
        title: "Specialty Drinks",
        items: [
            {
                name: "Lavender Honey Latte",
                description: "Espresso, steamed milk, lavender honey, dried lavender",
                price: "$5.75",
                badges: ["Seasonal"]
            },
            {
                name: "Golden Turmeric Latte",
                description: "Turmeric, ginger, cinnamon, steamed oat milk",
                price: "$5.25",
                badges: ["Vegan"]
            },
            {
                name: "Matcha Latte",
                description: "Premium ceremonial grade matcha with steamed milk",
                price: "$5.50"
            },
            {
                name: "Chai Spice Latte",
                description: "House-made chai blend with warm spices",
                price: "$4.75"
            }
        ]
    },
    {
        title: "Tea Selection",
        items: [
            {
                name: "Earl Grey",
                description: "Classic black tea with bergamot",
                price: "$3.50"
            },
            {
                name: "Chamomile Dreams",
                description: "Soothing chamomile with honey notes",
                price: "$3.75"
            },
            {
                name: "Green Dragon Well",
                description: "Delicate Chinese green tea",
                price: "$4.00"
            },
            {
                name: "Peppermint Fresh",
                description: "Refreshing peppermint leaves",
                price: "$3.50"
            }
        ]
    },
    {
        title: "Fresh Pastries",
        items: [
            {
                name: "Artisan Croissant",
                description: "Buttery, flaky pastry made with French butter",
                price: "$3.75",
                badges: ["Fresh Daily"]
            },
            {
                name: "Almond Danish",
                description: "Sweet pastry filled with almond cream",
                price: "$4.25"
            },
            {
                name: "Chocolate Muffin",
                description: "Rich chocolate muffin with chocolate chips",
                price: "$3.50"
            },
            {
                name: "Blueberry Scone",
                description: "Traditional scone with fresh blueberries",
                price: "$3.95"
            },
            {
                name: "Cinnamon Roll",
                description: "Warm cinnamon roll with cream cheese glaze",
                price: "$4.50",
                badges: ["Popular"]
            }
        ]
    },
    {
        title: "Brunch Favorites",
        items: [
            {
                name: "Avocado Toast",
                description: "Smashed avocado on sourdough with everything seasoning",
                price: "$8.95"
            },
            {
                name: "Breakfast Sandwich",
                description: "Scrambled eggs, cheddar, bacon on brioche",
                price: "$9.50"
            },
            {
                name: "Greek Yogurt Bowl",
                description: "House granola, fresh berries, honey drizzle",
                price: "$7.25"
            },
            {
                name: "Bella Benedict",
                description: "Poached eggs, prosciutto, hollandaise on English muffin",
                price: "$12.95",
                badges: ["Signature"]
            },
            {
                name: "Quinoa Salad Bowl",
                description: "Quinoa, roasted vegetables, tahini dressing",
                price: "$11.50",
                badges: ["Vegan"]
            }
        ]
    },
    {
        title: "Evening Cocktails",
        items: [
            {
                name: "Espresso Martini",
                description: "Vodka, coffee liqueur, fresh espresso",
                price: "$12.00",
                badges: ["Signature"]
            },
            {
                name: "Honey Lavender Gin",
                description: "Gin, lavender honey, lemon, prosecco",
                price: "$11.50"
            },
            {
                name: "Spiced Old Fashioned",
                description: "Bourbon, maple syrup, aromatic bitters",
                price: "$13.00"
            },
            {
                name: "Aperol Spritz",
                description: "Aperol, prosecco, soda water, orange",
                price: "$10.50"
            },
            {
                name: "Local Wine",
                description: "Selection of regional wines by the glass",
                price: "$8.00 - $14.00"
            }
        ]
    }
];

export default function Menu() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=600&fit=crop&crop=center"
                        alt="Beautiful coffee and pastries display"
                        width={1920}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                        Our Menu
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed">
                        Crafted with passion, served with pride
                    </p>
                </div>
            </section>

            {/* Menu Content */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Every item on our menu is carefully crafted using the finest ingredients. From our ethically sourced coffee beans
                            to our locally sourced produce, we believe that quality ingredients make all the difference.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {menuSections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                                        {section.title}
                                    </h2>
                                    <Separator className="w-24 mx-auto" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                    {section.items.map((item, itemIndex) => (
                                        <Card key={itemIndex} className="hover:shadow-lg transition-shadow duration-300">
                                            <CardHeader>
                                                <div className="flex justify-between items-start mb-2">
                                                    <CardTitle className="text-xl font-serif text-foreground">
                                                        {item.name}
                                                    </CardTitle>
                                                    <span className="text-lg font-semibold text-primary shrink-0 ml-4">
                                                        {item.price}
                                                    </span>
                                                </div>
                                                <CardDescription className="text-muted-foreground leading-relaxed">
                                                    {item.description}
                                                </CardDescription>
                                                {item.badges && (
                                                    <div className="flex gap-2 pt-2">
                                                        {item.badges.map((badge, badgeIndex) => (
                                                            <Badge
                                                                key={badgeIndex}
                                                                variant={badge === "Popular" ? "default" : badge === "Signature" ? "default" : "secondary"}
                                                                className={badge === "Popular" || badge === "Signature" ? "bg-primary text-primary-foreground" : ""}
                                                            >
                                                                {badge}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                )}
                                            </CardHeader>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Special Notes */}
                    <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
                        <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                            Special Dietary Options
                        </h3>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            We offer plant-based milk alternatives (oat, almond, soy) for all coffee drinks.
                            Many of our pastries and brunch items can be made gluten-free upon request.
                            Please inform our staff of any allergies or dietary restrictions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}