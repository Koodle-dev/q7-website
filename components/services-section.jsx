"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Server, Package } from "lucide-react";

export function ServicesSectionComponent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              We offer comprehensive web solutions tailored to your needs. Our
              web development and hosting services are bundled into a single,
              convenient package.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-12">
          {/* First two cards will be side by side on large screens */}
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Globe className="w-8 h-8 text-blue-500" />
              <CardTitle className="text-2xl font-bold">
                Web Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Custom website design</li>
                <li>Responsive layouts for all devices</li>
                <li>E-commerce solutions</li>
                <li>Content Management Systems (CMS)</li>
                <li>Search Engine Optimization (SEO)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Server className="w-8 h-8 text-pink-500" />
              <CardTitle className="text-2xl font-bold">
                Website Hosting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Fast and reliable servers</li>
                <li>Daily backups</li>
                <li>SSL certificates</li>
                <li>24/7 monitoring</li>
                <li>Email hosting</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* The third card will remain full width */}
        <div className="w-full">
          <Card className="w-full bg-blue-50">
            <CardHeader className="flex flex-row items-center gap-4 justify-center">
              <Package className="w-8 h-8 text-blue-500" />
              <CardTitle className="text-2xl font-bold text-center">
                All-in-One Package
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-zinc-500 md:text-lg">
                Our services are offered as a single, comprehensive package.
                This means you get both expert web development and reliable
                hosting in one convenient solution, tailored to your specific
                needs and budget.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
