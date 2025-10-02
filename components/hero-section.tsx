"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/ui/hero-slider";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ProductHeader } from "@/lib/const";

export function HeroSection() {
  const slides = ProductHeader.map((item, idx) => (
    <section key={idx} className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
      {/* Background Image using next/image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 md:mb-6">
              {item.title}
            </h1>
            <p className="font-body text-lg md:text-xl text-white mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              {item.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {item.cta && (
                <Button
                  size="lg"
                  className="bg-mi-primary hover:bg-mi-primary/90 text-white font-body px-8 py-3"
                  asChild
                >
                  <a href={item.link}>{item.cta}</a>
                </Button>
              )}
              <WhatsAppButton
                variant="outline"
                size="lg"
                className="border-mi-primary text-white hover:bg-mi-primary hover:text-white px-8 py-3"
                message={`Hi! I'm interested in "${item.title}"`}
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-mi-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-mi-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  ));

  return <HeroSlider slides={slides} autoPlay intervalMs={5000} showDots />;
}
