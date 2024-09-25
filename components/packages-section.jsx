"use client";

import { Check, Rocket, Zap, Building, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PackagesSectionComponent() {
  const packages = [
    {
      name: "Starter",
      price: "$49.99",
      description: "Perfect for small businesses just getting started",
      features: [
        "Basic website design",
        "1 GB storage",
        "Custom domain",
        "SSL certificate",
        "Email support",
      ],
      color: "bg-blue-100",
      popular: false,
      Icon: Rocket,
      action: "Choose Plan",
    },
    {
      name: "Growth",
      price: "$99.99",
      description: "Ideal for growing businesses with more needs",
      features: [
        "Advanced website design",
        "5 GB storage",
        "Custom domain",
        "SSL certificate",
        "24/7 support",
        "SEO optimization",
      ],
      color: "bg-pink-100",
      popular: true,
      Icon: Zap,
      action: "Choose Plan",
    },
    {
      name: "Professional",
      price: "$149.99",
      description: "Comprehensive solution for established businesses",
      features: [
        "Custom website design",
        "20 GB storage",
        "Custom domain",
        "SSL certificate",
        "24/7 priority support",
        "SEO optimization",
        "Performance optimization",
      ],
      color: "bg-purple-100",
      popular: false,
      Icon: Building,
      action: "Choose Plan",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale operations",
      features: [
        "Fully customized website",
        "Unlimited storage",
        "Multiple custom domains",
        "Advanced security features",
        "Dedicated support team",
        "Custom integrations",
        "Advanced analytics",
        "Scalable infrastructure",
      ],
      color: "bg-green-100",
      popular: false,
      Icon: Building2,
      action: "Contact Sales",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Packages
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              We offer a range of affordable packages to suit businesses of all
              sizes. Choose the plan that best fits your needs and budget.
            </p>
          </div>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4 w-full">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.Icon;
            return (
              <Card
                key={index}
                className={`flex flex-col ${pkg.color} relative`}
              >
                {/* {pkg.popular && (
                  <Badge className="absolute top-0 right-0 m-4 bg-green-500 text-white">
                    Most Popular
                  </Badge>
                )} */}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{pkg.name}</CardTitle>
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold mb-4">
                    {pkg.price}
                    {pkg.price !== "Custom" && (
                      <span className="text-lg font-normal">/month</span>
                    )}
                  </p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      pkg.popular ? "bg-green-500 hover:bg-green-600" : ""
                    }`}
                  >
                    {pkg.action}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
