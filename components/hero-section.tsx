import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white to-mi-light-gray py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <Image
                src="/images/mi-plus-logo.png"
                alt="MI+ Logo"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 mx-auto lg:mx-0 mb-4"
              />
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 md:mb-6">
              Discover the <span className="text-mi-primary">Essence</span> of MI+
            </h1>
            <p className="font-body text-lg md:text-xl text-mi-secondary mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              Elevate your experience with our curated product collection. Crafted with precision, our products blend
              style and functionality, making every moment exceptional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-mi-primary hover:bg-mi-primary/90 text-white font-body px-8 py-3" asChild>
                <a href="/products">Explore Products</a>
              </Button>
              <WhatsAppButton
                variant="outline"
                size="lg"
                className="border-mi-primary text-white hover:bg-mi-primary hover:text-white px-8 py-3"
                message="Hi! I'd like to learn more about MI+ products."
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-mi-primary/10 to-mi-secondary/10 rounded-2xl p-8 md:p-12">
              <Image
                src="/images/products/mila6005.jpg"
                alt="MI+ Product Showcase"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-mi-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-mi-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
