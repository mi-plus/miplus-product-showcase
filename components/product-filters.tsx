"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface ProductFiltersProps {
  filters: {
    categories: string[];
    priceRange?: [number, number];
    rating: number;
    inStock: boolean;
    brands: string[];
  };
  onFiltersChange: (filters: any) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function ProductFilters({
  filters,
  onFiltersChange,
  searchQuery,
  onSearchChange,
}: ProductFiltersProps) {
  const categories = [
    "Home Theater",
    "Premium Home Theater",
    "Entertainment Systems",
    "Gaming Audio",
    "Soundbars",
    "Stereo Systems",
    "Multimedia Systems",
    "Television",
  ];
  const brands = ["MI+"];

  const safeFilters = {
    categories: filters?.categories || [],
    priceRange: filters?.priceRange || ([0, 500] as [number, number]),
    rating: filters?.rating || 0,
    inStock: filters?.inStock || false,
    brands: filters?.brands || [],
  };

  const updateFilters = (key: string, value: any) => {
    onFiltersChange({ ...safeFilters, [key]: value });
  };

  const toggleCategory = (category: string) => {
    const newCategories = safeFilters.categories.includes(category)
      ? safeFilters.categories.filter((c) => c !== category)
      : [...safeFilters.categories, category];
    updateFilters("categories", newCategories);
  };

  const toggleBrand = (brand: string) => {
    const newBrands = safeFilters.brands.includes(brand)
      ? safeFilters.brands.filter((b) => b !== brand)
      : [...safeFilters.brands, brand];
    updateFilters("brands", newBrands);
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      priceRange: [0, 500],
      rating: 0,
      inStock: false,
      brands: [],
    });
    onSearchChange("");
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-heading text-lg">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 font-body"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-heading text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={safeFilters.categories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label
                htmlFor={category}
                className="font-body text-sm cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-heading text-lg">Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={safeFilters.inStock}
              onCheckedChange={(checked) => updateFilters("inStock", checked)}
            />
            <Label
              htmlFor="in-stock"
              className="font-body text-sm cursor-pointer">
              In Stock Only
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="font-heading text-lg">Brands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={safeFilters.brands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <Label
                htmlFor={brand}
                className="font-body text-sm cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button
        variant="outline"
        onClick={clearAllFilters}
        className="w-full border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white font-body bg-transparent">
        <X className="w-4 h-4 mr-2" />
        Clear All Filters
      </Button>
    </div>
  );
}
