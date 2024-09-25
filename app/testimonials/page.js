import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Owner, Ballarat Bakery",
      content:
        "Q7 Technology transformed our online presence. Our e-commerce site has boosted our sales significantly! Their team was professional, responsive, and delivered beyond our expectations.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Director, Goldfields Museum",
      content:
        "The interactive website Q7 created for us has greatly enhanced our visitors' experience. They understood our unique needs as a museum and delivered a solution that's both educational and engaging.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      role: "Founder, Ballarat Tech Hub",
      content:
        "Q7's expertise in building community platforms is unmatched. They delivered beyond our expectations, creating a space that fosters collaboration among local tech enthusiasts.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "David Brown",
      role: "Manager, Lake Wendouree Tours",
      content:
        "Our booking system is now seamless thanks to Q7. It's been a game-changer for our business, allowing us to manage bookings efficiently and provide a better experience for our customers.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
    {
      name: "Lisa Green",
      role: "CEO, Ballarat Innovation Center",
      content:
        "Q7 Technology's custom web application has streamlined our operations significantly. Their team's technical expertise and understanding of our business needs were impressive.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "John Taylor",
      role: "Owner, Taylor's Auto Services",
      content:
        "As a small business owner, I was hesitant about investing in a website. Q7 made the process easy and affordable. Now, we're reaching more customers than ever before.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Client Testimonials
      </h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Don't just take our word for it. Here's what some of our satisfied
        clients have to say about Q7 Technology.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <Quote className="h-6 w-6 text-purple-500 mb-2" />
                <p className="text-gray-700 italic mb-4">
                  {testimonial.content}
                </p>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to join our satisfied clients?
        </h2>
        <p className="text-gray-600 mb-8">
          Let's discuss how we can help your business achieve its online goals.
        </p>
        <Button size="lg">Get Started</Button>
      </div>
    </div>
  );
}
