"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Coffee, X } from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Coffee className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-serif font-bold text-primary">
                            Bella Geo
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex">
                        <Button asChild className="bg-primary hover:bg-primary/90">
                            <Link href="/contact">Book a Table</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between pb-4 border-b">
                                    <Link
                                        href="/"
                                        className="flex items-center space-x-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Coffee className="h-6 w-6 text-primary" />
                                        <span className="text-xl font-serif font-bold text-primary">
                                            Bella Geo
                                        </span>
                                    </Link>
                                </div>
                                <nav className="flex flex-col space-y-4 mt-8">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-lg text-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2 rounded-md hover:bg-muted"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                                <div className="mt-auto mb-4">
                                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                                            Book a Table
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}