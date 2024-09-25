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
import { Check, X } from "lucide-react";

export default function PackagesPage() {
  const packages = [
    {
      name: "Starter",
      price: "$49.99",
      description: "Perfect for small businesses just getting started",
      features: [
        { name: "Basic website design", included: true },
        { name: "1 GB storage", included: true },
        { name: "Custom domain", included: true },
        { name: "SSL certificate", included: true },
        { name: "Email support", included: true },
        { name: "24/7 support", included: false },
        { name: "SEO optimization", included: false },
      ],
      color: "bg-blue-100",
      popular: false,
    },
    {
      name: "Growth",
      price: "$99.99",
      description: "Ideal for growing businesses with more needs",
      features: [
        { name: "Advanced website design", included: true },
        { name: "5 GB storage", included: true },
        { name: "Custom domain", included: true },
        { name: "SSL certificate", included: true },
        { name: "24/7 support", included: true },
        { name: "SEO optimization", included: true },
        { name: "Performance optimization", included: false },
      ],
      color: "bg-pink-100",
      popular: true,
    },
    {
      name: "Professional",
      price: "$149.99",
      description: "Comprehensive solution for established businesses",
      features: [
        { name: "Custom website design", included: true },
        { name: "20 GB storage", included: true },
        { name: "Custom domain", included: true },
        { name: "SSL certificate", included: true },
        { name: "24/7 priority support", included: true },
        { name: "SEO optimization", included: true },
        { name: "Performance optimization", included: true },
      ],
      color: "bg-purple-100",
      popular: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Packages</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Choose the perfect package for your business. We offer a range of
        options to suit your needs and budget.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <Card key={index} className={`flex flex-col ${pkg.color} relative`}>
            {pkg.popular && (
              <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
              <CardDescription className="text-lg">
                {pkg.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-6">
                {pkg.price}
                <span className="text-lg font-normal">/month</span>
              </p>
              <ul className="space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {feature.included ? (
                      <Check className="mr-2 h-5 w-5 text-green-500" />
                    ) : (
                      <X className="mr-2 h-5 w-5 text-red-500" />
                    )}
                    <span
                      className={
                        feature.included ? "text-black" : "text-gray-500"
                      }
                    >
                      {feature.name}
                    </span>
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
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Not sure which package is right for you?
        </h2>
        <p className="text-gray-600 mb-8">
          Our team is here to help you choose the best solution for your
          business needs.
        </p>
        <Button variant="outline" size="lg">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
