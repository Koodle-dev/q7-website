"use client";

import Link from "next/link";
import { Laptop, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function FooterComponent() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="w-full px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Laptop className="h-6 w-6 text-purple-600" />
              <span className="font-bold text-xl">Q7 Technology</span>
            </Link>
            <p className="text-sm text-gray-600">
              Empowering Ballarat businesses with cutting-edge web solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-purple-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              <p>123 Sturt Street</p>
              <p>Ballarat, VIC 3350</p>
              <p>Phone: 0475 126 818</p>
              <p>Email: leighton.lauton@q7technology.com.au</p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-gray-600 hover:text-purple-600" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 text-gray-600 hover:text-purple-600" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-gray-600 hover:text-purple-600" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-gray-600 hover:text-purple-600" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Q7 Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
