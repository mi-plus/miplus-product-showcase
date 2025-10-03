"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductImageGallery } from "@/components/product-image-gallery";
import { RelatedProducts } from "@/components/related-products";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Check, Share2 } from "lucide-react";

export type SpecificationKey =
  | "System Type"
  | "Total Power"
  | "Satellite Speakers"
  | "Center Channel"
  | "Subwoofer"
  | "Connectivity"
  | "LED Effects"
  | "Remote Control"
  | "Material"
  | "Box Size"
  | "Warranty"
  | "Screen Size"
  | "Resolution"
  | "Display Type"
  | "Smart Features"
  | "Voice Control"
  | "Stand Design"
  | "Audio"
  | "Design"
  | "Series"
  | "Eco Features"
  | "Color Processing"
  | "Special Processing"
  | "Mounting"
  | "Soundbar"
  | "Build Quality";
interface Product {
  id: number;
  name: string;
  images: string[];
  category: string;
  brand: string;
  inStock: boolean;
  stockCount?: number;
  description?: string;
  features: string[];
  specifications: Partial<Record<SpecificationKey, string>>;
}

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm font-body text-mi-secondary mb-8">
        <Link href="/" className="hover:text-mi-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-mi-primary">
          Products
        </Link>
        <span>/</span>
        <Link
          href={`/products?category=${product.category}`}
          className="hover:text-mi-primary">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Back Button */}
      <Button variant="ghost" size="sm" className="mb-6 -ml-2" asChild>
        <Link href="/products">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
        {/* Product Images */}
        <div>
          <ProductImageGallery
            images={product.images}
            productName={product.name}
            selectedIndex={selectedImageIndex}
            onImageSelect={setSelectedImageIndex}
          />
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <Badge variant="outline" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-4">
              {product.name}
            </h1>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span className="font-body text-sm text-green-600">
                  In Stock ({product.stockCount} available)
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="font-body text-sm text-red-600">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="font-body text-mi-secondary leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">
              Key Features
            </h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 font-body text-sm">
                  <Check className="w-4 h-4 text-mi-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <WhatsAppButton
              size="lg"
              className="w-full text-base py-3"
              message={`Hi! I'm interested in the ${product.name}. Can you provide more details about availability, pricing, and shipping?`}
            />
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share Product
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="specifications" className="font-body">
              Technical Specifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-body font-medium text-gray-700">
                          {key}:
                        </span>
                        <span className="font-body text-mi-secondary">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <RelatedProducts
        currentProductId={product.id}
        category={product.category}
      />
    </div>
  );
}
