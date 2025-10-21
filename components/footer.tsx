import Link from "next/link";
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Coffee className="h-8 w-8 text-primary" />
                            <span className="text-2xl font-serif font-bold text-primary">
                                Bella Geo
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Your neighborhood artisan café & lounge, serving exceptional coffee,
                            fresh pastries, and creating moments of connection in a warm, welcoming atmosphere.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="/about"
                                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/menu"
                                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                            >
                                Our Menu
                            </Link>
                            <Link
                                href="/gallery"
                                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/contact"
                                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                <p className="text-muted-foreground text-sm">
                                    123 Coffee Street<br />
                                    Downtown District<br />
                                    City, ST 12345
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                <p className="text-muted-foreground text-sm">(555) 123-4567</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                                <p className="text-muted-foreground text-sm">hello@bellageo.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Hours & Social */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Hours & Social</h3>
                        <div className="space-y-2 mb-4">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-medium">Mon-Fri:</span> 7:00 AM - 9:00 PM
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-medium">Sat-Sun:</span> 8:00 AM - 10:00 PM
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                aria-label="Follow us on Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © 2024 Bella Geo Café & Lounge. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <Link
                            href="#"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}