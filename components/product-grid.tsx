"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Star, ShoppingCart } from "lucide-react"

interface Product {
  id: number
  name: string
  image: string
  rating: number
  reviews: number
  category: string
  brand: string
  inStock: boolean
  description: string
}

interface ProductGridProps {
  products: Product[]
  viewMode: "grid" | "list"
}

export function ProductGrid({ products, viewMode }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <ShoppingCart className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">No products found</h3>
        <p className="font-body text-mi-secondary">Try adjusting your filters or search terms.</p>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-48 h-48 md:h-32">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-l-lg"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-l-lg">
                      <Badge variant="secondary" className="bg-red-500 text-white">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="flex-1 p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center gap-1">
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
                      </div>

                      <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                      <p className="font-body text-sm text-mi-secondary mb-3 line-clamp-2">{product.description}</p>
                    </div>

                    <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-6">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white font-body bg-transparent"
                        asChild
                      >
                        <Link href={`/products/${product.id}`}>View Details</Link>
                      </Button>
                      <WhatsAppButton
                        size="sm"
                        className="text-sm"
                        message={`Hi! I'm interested in the ${product.name}. Can you provide pricing and more details?`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 bg-white border-0">
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-mi-primary text-white text-xs font-body">{product.category}</Badge>
              </div>
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="secondary" className="bg-red-500 text-white">
                    Out of Stock
                  </Badge>
                </div>
              )}
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

              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
              <p className="font-body text-sm text-mi-secondary mb-4 line-clamp-2">{product.description}</p>

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
  )
}
