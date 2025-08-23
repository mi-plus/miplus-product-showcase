import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/images/mi-plus-logo.png" alt="MI+ Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-heading font-bold text-xl text-mi-primary">MI+</span>
            </div>
            <p className="font-body text-gray-300 mb-6 text-sm">
              Elevate your experience with our curated product collection. Quality, innovation, and style in every
              product.
            </p>
            <WhatsAppButton
              variant="outline"
              size="sm"
              className="border-mi-primary text-mi-primary hover:bg-mi-primary hover:text-white"
              message="Hi! I'd like to learn more about MI+ products."
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-mi-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-mi-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-mi-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-mi-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="/products?category=audio" className="text-gray-300 hover:text-mi-primary transition-colors">
                  Audio
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=wearables"
                  className="text-gray-300 hover:text-mi-primary transition-colors"
                >
                  Wearables
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=accessories"
                  className="text-gray-300 hover:text-mi-primary transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=electronics"
                  className="text-gray-300 hover:text-mi-primary transition-colors"
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-mi-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-mi-primary" />
                <span className="text-gray-300">customer.care@key-e.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-mi-primary mt-0.5" />
                <span className="text-gray-300">
                  123 Business Ave
                  <br />
                  Suite 100
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm text-gray-400 mb-4 md:mb-0">© 2024 MI+. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.facebook.com/share/1MyZsDBV7q/?mibextid=LQQJ4d"
              className="text-gray-400 hover:text-mi-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/miplus_tech"
              className="text-gray-400 hover:text-mi-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://tiktok.com/@miplustech"
              className="text-gray-400 hover:text-mi-primary transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
