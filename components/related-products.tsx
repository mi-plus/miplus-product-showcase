"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Star } from "lucide-react"

const relatedProducts = [
  {
    id: 1,
    name: "MIL6080",
    image: "/images/products/mil6080.png",
    rating: 4.8,
    reviews: 124,
    category: "Home Theater",
  },
  {
    id: 2,
    name: "MIL6020B",
    image: "/images/products/mil6020b.jpg",
    rating: 4.7,
    reviews: 98,
    category: "Home Theater",
  },
  {
    id: 3,
    name: "MILA4012",
    image: "/images/products/mila4012.jpg",
    rating: 4.6,
    reviews: 156,
    category: "Stereo Systems",
  },
  {
    id: 4,
    name: "MIL6090",
    image: "/images/products/mil6090.jpg",
    rating: 4.9,
    reviews: 203,
    category: "Gaming Audio",
  },
  {
    id: 5,
    name: "MIL6010B",
    image: "/images/products/mil6010b.jpg",
    rating: 4.5,
    reviews: 78,
    category: "Home Theater",
  },
  {
    id: 6,
    name: "MILS505",
    image: "/images/products/mils505.jpg",
    rating: 4.7,
    reviews: 145,
    category: "Soundbars",
  },
]

interface RelatedProductsProps {
  currentProductId: number
  category: string
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // Filter out current product and limit to 4 items
  const filteredProducts = relatedProducts.filter((product) => product.id !== currentProductId).slice(0, 4)

  if (filteredProducts.length === 0) {
    return null
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-2xl text-gray-900">Related Products</h2>
        <Button variant="outline" asChild>
          <Link href="/products">View All</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-mi-secondary font-body">({product.reviews})</span>
                </div>

                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4 line-clamp-2">{product.name}</h3>

                <div className="flex flex-col gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white font-body bg-transparent"
                    asChild
                  >
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                  <WhatsAppButton
                    size="sm"
                    className="w-full text-sm"
                    message={`Hi! I'm interested in the ${product.name}. Can you provide pricing and more details?`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
