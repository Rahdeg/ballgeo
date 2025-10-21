"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        details: ["123 Coffee Street", "Downtown District", "City, ST 12345"]
    },
    {
        icon: Phone,
        title: "Call Us",
        details: ["(555) 123-4567", "Daily: 7:00 AM - 9:00 PM"]
    },
    {
        icon: Mail,
        title: "Email Us",
        details: ["hello@bellageo.com", "We'll respond within 24 hours"]
    },
    {
        icon: Clock,
        title: "Hours",
        details: ["Mon-Fri: 7:00 AM - 9:00 PM", "Sat-Sun: 8:00 AM - 10:00 PM"]
    }
];

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values);
        setIsSubmitting(false);
        setIsSubmitted(true);
        form.reset();
    }

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1517242027094-631f8c218a0f?w=1920&h=600&fit=crop&crop=center"
                        alt="Welcoming café exterior"
                        width={1920}
                        height={600}
                        className="object-cover w-full h-full"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                        Contact Us
                    </h1>
                    <p className="text-xl md:text-2xl leading-relaxed">
                        We&apos;d love to hear from you
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            return (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader>
                                        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                                            <IconComponent className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-lg font-serif">{info.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {info.details.map((detail, detailIndex) => (
                                            <p key={detailIndex} className="text-muted-foreground text-sm">
                                                {detail}
                                            </p>
                                        ))}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                                Send Us a Message
                            </h2>
                            <Card>
                                <CardHeader>
                                    <CardDescription>
                                        Have a question, suggestion, or just want to say hello?
                                        We&apos;d love to hear from you and will get back to you as soon as possible.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {isSubmitted ? (
                                        <div className="text-center py-8">
                                            <div className="mb-4 p-3 bg-green-100 rounded-full w-fit mx-auto">
                                                <Mail className="h-8 w-8 text-green-600" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                                Message Sent!
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                            </p>
                                            <Button
                                                onClick={() => setIsSubmitted(false)}
                                                className="mt-4"
                                                variant="outline"
                                            >
                                                Send Another Message
                                            </Button>
                                        </div>
                                    ) : (
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Name</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Your full name" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Email</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="your.email@example.com" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <FormField
                                                    control={form.control}
                                                    name="subject"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Subject</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="What is this regarding?" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="message"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Message</FormLabel>
                                                            <FormControl>
                                                                <Textarea
                                                                    placeholder="Tell us more about your inquiry..."
                                                                    className="min-h-[120px]"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <Button
                                                    type="submit"
                                                    className="w-full"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? "Sending..." : "Send Message"}
                                                </Button>
                                            </form>
                                        </Form>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Map & Additional Info */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                                Find Us
                            </h2>

                            {/* Embedded Map */}
                            <div className="mb-6 h-64 bg-muted rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215313418993!2d-73.98823492404069!3d40.758896041819794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Bella Geo Café Location"
                                />
                            </div>

                            {/* Additional Info */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl font-serif">Visit Our Café</CardTitle>
                                    <CardDescription>
                                        Located in the heart of downtown, we&apos;re easily accessible by public transit
                                        and have street parking available.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Transportation</h4>
                                        <p className="text-sm text-muted-foreground">
                                            • Metro Station: Downtown Central (2 blocks)<br />
                                            • Bus Lines: 15, 23, 42<br />
                                            • Street parking available
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Follow Us</h4>
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
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}