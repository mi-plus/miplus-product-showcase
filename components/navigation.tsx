"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/mi-plus-logo.png"
              alt="MI+ Logo"
              width={120}
              height={48}
              className="w-32 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-body text-mi-primary hover:text-mi-primary transition-colors">
              Home
            </Link>
            <Link
              href="/products"
              className="font-body text-mi-primary hover:text-mi-primary transition-colors">
              Products
            </Link>
            <Link
              href="/contact"
              className="font-body text-mi-primary hover:text-mi-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-body text-gray-700 hover:text-mi-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/products"
                className="font-body text-gray-700 hover:text-mi-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link
                href="/contact"
                className="font-body text-gray-700 hover:text-mi-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
