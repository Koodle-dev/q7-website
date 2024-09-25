"use client";
import { Button } from "@/components/ui/button";

export function HeroSectionComponent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Q7 Technology
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
              Ballarat's family-owned IT solutions provider. Web development and
              hosting made simple and affordable.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-blue-200 text-blue-800 hover:bg-blue-300">
              Get a Quote
            </Button>
            <Button
              variant="outline"
              className="border-pink-200 text-pink-800 hover:bg-pink-100"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
