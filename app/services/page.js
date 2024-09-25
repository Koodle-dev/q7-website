/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Server, Search, Code, Shield } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites tailored to your business needs",
      features: [
        "Responsive design",
        "User-friendly interfaces",
        "Cross-browser compatibility",
        "Performance optimization",
      ],
    },
    {
      icon: Server,
      title: "Web Hosting",
      description: "Reliable and secure hosting solutions",
      features: [
        "99.9% uptime guarantee",
        "Daily backups",
        "SSL certificates",
        "24/7 technical support",
      ],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your website's visibility in search engines",
      features: [
        "Keyword research",
        "On-page optimization",
        "Link building",
        "Performance tracking",
      ],
    },
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Tailor-made web applications for your specific needs",
      features: [
        "Scalable architecture",
        "Integration with existing systems",
        "User authentication",
        "Data visualization",
      ],
    },
    {
      icon: Shield,
      title: "Website Maintenance",
      description: "Keep your website up-to-date and secure",
      features: [
        "Regular updates",
        "Security patches",
        "Performance monitoring",
        "Content updates",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        At Q7 Technology, we offer a comprehensive range of web services to help
        your business thrive online. From custom web development to reliable
        hosting and ongoing maintenance, we've got you covered.
      </p>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
          <TabsTrigger value="all">All Services</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="hosting">Hosting</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        <TabsContent
          value="all"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </TabsContent>
        {["development", "hosting", "seo", "maintenance"].map((tab) => (
          <TabsContent
            key={tab}
            value={tab}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services
              .filter((service) => service.title.toLowerCase().includes(tab))
              .map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-8">
          Contact us today to discuss how we can help your business grow online.
        </p>
        <Button size="lg">Get in Touch</Button>
      </div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, description, features }) {
  return (
    <Card>
      <CardHeader>
        <Icon className="h-10 w-10 text-purple-600 mb-2" />
        <CardTitle className="text-black">{title}</CardTitle>
        <CardDescription className="text-gray-700">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-black">
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
