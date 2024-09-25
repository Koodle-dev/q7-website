"use client";

import Image from "next/image";

export function AboutUsSectionComponent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="w-full px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <Image
            alt="Q7 Technology team"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Q7 Technology
              </h2>
              <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                We're a family-owned IT solutions provider based in the heart of
                Ballarat. With our roots deeply embedded in the local community,
                we understand the unique needs of businesses in our region.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-pink-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Family-owned and operated
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-pink-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Ballarat-based, serving local businesses
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-pink-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Comprehensive web solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
