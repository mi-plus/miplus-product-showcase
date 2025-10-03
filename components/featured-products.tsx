"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "MIL6080 Premium Home Theater System",
      image: "/images/products/mil6080.png",
      rating: 4.8,
      reviews: 124,
      category: "Home Theater",
    },
    {
      id: 5,
      name: "MIL6090 RGB Gaming Audio System",
      image: "/images/products/mil6090.jpg",
      rating: 4.9,
      reviews: 89,
      category: "Gaming Audio",
    },
    {
      id: 8,
      name: "MIL6060 Colorful LED Audio System",
      image: "/images/products/mil6060.png",
      rating: 4.7,
      reviews: 156,
      category: "Entertainment Systems",
    },
    {
      id: 7,
      name: "MILS505 Soundbar Collection",
      image: "/images/products/mils505.jpg",
      rating: 4.6,
      reviews: 203,
      category: "Soundbars",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-mi-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
            Featured <span className="text-mi-primary">Products</span>
          </h2>
          <p className="font-body text-lg text-mi-secondary max-w-2xl mx-auto mb-8">
            Discover our most popular MI+ audio products, carefully selected for
            their exceptional quality and innovative features.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-mi-primary text-mi-primary hover:bg-mi-primary hover:text-white font-body bg-transparent"
            asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </motion.div>

        {/* Animated Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}>
              <Card className="group hover:shadow-xl transition-all duration-300 bg-white border-0">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-mi-primary text-white text-xs font-body px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-mi-secondary font-body">
                        ({product.reviews})
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white font-body bg-transparent"
                        asChild>
                        <Link href={`/products/${product.id}`}>
                          View Details
                        </Link>
                      </Button>
                      <WhatsAppButton
                        size="sm"
                        className="w-full text-sm"
                        message={`Hi! I'm interested in the ${product.name}. Can you provide more details and pricing information?`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
