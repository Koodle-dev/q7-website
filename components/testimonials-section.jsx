"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export function TestimonialsSectionComponent() {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Owner, Ballarat Bakery",
      content:
        "Q7 Technology transformed our online presence. Our e-commerce site has boosted our sales significantly!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Chen",
      role: "Director, Goldfields Museum",
      content:
        "The interactive website Q7 created for us has greatly enhanced our visitors' experience. Highly recommended!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emma Wilson",
      role: "Founder, Ballarat Tech Hub",
      content:
        "Q7's expertise in building community platforms is unmatched. They delivered beyond our expectations.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "David Brown",
      role: "Manager, Lake Wendouree Tours",
      content:
        "Our booking system is now seamless thanks to Q7. It's been a game-changer for our business.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Don't just take our word for it. Here's what some of our satisfied
              clients have to say about Q7 Technology.
            </p>
          </div>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4 w-full">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 mb-4 text-pink-500" />
                <p className="mb-4 text-sm text-gray-600">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
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
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
