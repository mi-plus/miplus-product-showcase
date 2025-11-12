"use client";

import { useState, useMemo } from "react";
import { ProductGrid } from "@/components/product-grid";
import { ProductFilters } from "@/components/product-filters";
import { ProductSort } from "@/components/product-sort";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List, ChevronLeft, ChevronRight } from "lucide-react";
import { allProducts } from "@/lib/const";
import { AnimatePresence, motion } from "framer-motion";
import { getAvailableSeries, filterProductsBySeries } from "@/lib/product-series";

const PRODUCTS_PER_PAGE = 12;

export function ProductListing() {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    rating: 0,
    inStock: false,
    brands: [] as string[],
  });
  const [sortBy, setSortBy] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const availableSeries = getAvailableSeries(allProducts);

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      // Search filter
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(product.category)
      ) {
        return false;
      }

      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false;
      }

      // Stock filter
      if (filters.inStock && !product.inStock) {
        return false;
      }

      // Brand filter
      if (
        filters.brands.length > 0 &&
        !filters.brands.includes(product.brand)
      ) {
        return false;
      }

      return true;
    });
    filtered = filterProductsBySeries(filtered, sortBy);

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviews - a.reviews;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [filters, sortBy, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  // Reset to first page when filters change
  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8">
        <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
          Our <span className="text-mi-primary">Products</span>
        </h1>
        <p className="font-body text-lg text-mi-secondary max-w-2xl">
          Explore our complete collection of premium MI+ audio products designed
          to enhance your entertainment experience.
        </p>
      </motion.div>
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white md:hidden">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <span className="font-body text-sm text-mi-secondary">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} found
            {totalPages > 1 && (
              <span className="ml-2">
                (Page {currentPage} of {totalPages})
              </span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <ProductSort sortBy={sortBy} onSortChange={handleSortChange} availableSeries={availableSeries} />
          <div className="flex items-center border border-gray-200 rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`rounded-r-none ${
                viewMode === "grid"
                  ? "bg-mi-primary text-white"
                  : "text-mi-secondary"
              }`}>
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`rounded-l-none ${
                viewMode === "list"
                  ? "bg-mi-primary text-white"
                  : "text-mi-secondary"
              }`}>
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:w-64 block">
              <ProductFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            </motion.div>
          )}
          {!showFilters && (
            <div className="hidden lg:block lg:w-64">
              <ProductFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            </div>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        <div className="flex-1">
          <ProductGrid products={paginatedProducts} viewMode={viewMode} />

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white disabled:opacity-50">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 ${
                        currentPage === page
                          ? "bg-mi-primary text-white"
                          : "border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white"
                      }`}>
                      {page}
                    </Button>
                  )
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white disabled:opacity-50">
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}