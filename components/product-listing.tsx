"use client"

import { useState, useMemo } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { ProductSort } from "@/components/product-sort"
import { Button } from "@/components/ui/button"
import { Filter, Grid, List, ChevronLeft, ChevronRight } from "lucide-react"

const allProducts = [
  {
    id: 1,
    name: "MIL6080 Premium Home Theater System",
    image: "/images/products/mil6080.png",
    rating: 4.8,
    reviews: 124,
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Experience premium home entertainment with 3.1 surround sound and LED lighting effects",
  },
  {
    id: 2,
    name: "MIL6020B Digital Home Theater System",
    image: "/images/products/mil6020b.jpg",
    rating: 4.9,
    reviews: 89,
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Exceptional 3.1 surround sound with elegant blue LED accent lighting",
  },
  {
    id: 3,
    name: "MILA4012 Compact Stereo System",
    image: "/images/products/mila4012.jpg",
    rating: 4.7,
    reviews: 156,
    category: "Stereo Systems",
    brand: "MI+",
    inStock: true,
    description: "Compact yet powerful stereo system with modern connectivity",
  },
  {
    id: 4,
    name: "MILA6007 Complete Home Theater System",
    image: "/images/products/mila6007.png",
    rating: 4.6,
    reviews: 203,
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Complete 5.1 home theater system with comprehensive setup",
  },
  {
    id: 5,
    name: "MIL6090 RGB Gaming Audio System",
    image: "/images/products/mil6090.jpg",
    rating: 4.5,
    reviews: 78,
    category: "Gaming Audio",
    brand: "MI+",
    inStock: true,
    description: "Gaming audio system with spectacular RGB lighting effects",
  },
  {
    id: 6,
    name: "MIL6010B Blue LED Home Theater",
    image: "/images/products/mil6010b.jpg",
    rating: 4.9,
    reviews: 145,
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Powerful 3.1 surround sound with striking blue LED lighting",
  },
  {
    id: 7,
    name: "MILS505 Soundbar Collection",
    image: "/images/products/mils505.jpg",
    rating: 4.4,
    reviews: 92,
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
    description: "Versatile soundbar solutions with wireless subwoofer options",
  },
  {
    id: 8,
    name: "MIL6060 Colorful LED Audio System",
    image: "/images/products/mil6060.png",
    rating: 4.7,
    reviews: 167,
    category: "Entertainment Systems",
    brand: "MI+",
    inStock: true,
    description: "Vibrant entertainment system with multi-color LED effects",
  },
  {
    id: 9,
    name: "MIL6030B Teal LED Home Theater",
    image: "/images/products/mil6030b.jpg",
    rating: 4.8,
    reviews: 134,
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Elegant teal LED lighting with powerful 3.1 surround sound",
  },
  {
    id: 10,
    name: "MILA6005 Tower Entertainment System",
    image: "/images/products/mila6005.jpg",
    rating: 4.6,
    reviews: 98,
    category: "Entertainment Systems",
    brand: "MI+",
    inStock: true,
    description: "Tower-style entertainment system with comprehensive media playback",
  },
  {
    id: 11,
    name: "MIL6090 Premium RGB Gaming System",
    image: "/images/products/mil6090-new.jpg",
    rating: 4.7,
    reviews: 112,
    category: "Gaming Audio",
    brand: "MI+",
    inStock: true,
    description: "Premium gaming system with enhanced RGB lighting and powerful audio",
  },
  {
    id: 12,
    name: "MILS505 Professional Soundbar System",
    image: "/images/products/mils505-new.jpg",
    rating: 4.8,
    reviews: 87,
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
    description: "Professional soundbar with dual configurations and wireless subwoofers",
  },
  {
    id: 13,
    name: "MILA6007 Ultimate Home Theater",
    image: "/images/products/mila6007-new.png",
    rating: 4.9,
    reviews: 156,
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Ultimate 5.1 home theater with advanced digital processing",
  },
  {
    id: 14,
    name: "MILA6005 Professional Tower System",
    image: "/images/products/mila6005-new.jpg",
    rating: 4.6,
    reviews: 94,
    category: "Entertainment Systems",
    brand: "MI+",
    inStock: true,
    description: "Professional tower system with multiple media slots and 5.1 audio",
  },
  {
    id: 15,
    name: "MIM6085 Rainbow LED Entertainment System",
    image: "/images/products/mim6085.jpg",
    rating: 4.5,
    reviews: 123,
    category: "Entertainment Systems",
    brand: "MI+",
    inStock: true,
    description: "Spectacular rainbow LED effects with powerful 5.1 surround sound",
  },
  {
    id: 16,
    name: "MIM6065 Colorful LED Audio System",
    image: "/images/products/mim6065.jpg",
    rating: 4.7,
    reviews: 108,
    category: "Entertainment Systems",
    brand: "MI+",
    inStock: true,
    description: "Dynamic entertainment with colorful LED lighting and 5.1 audio",
  },
  {
    id: 17,
    name: "MIM602A Multimedia Entertainment Center",
    image: "/images/products/mim602a.jpg",
    rating: 4.4,
    reviews: 76,
    category: "Multimedia Systems",
    brand: "MI+",
    inStock: true,
    description: "Complete multimedia center with CD player and hexagonal design",
  },
  {
    id: 18,
    name: "MIM663A Rainbow Ring Audio System",
    image: "/images/products/mim663a.png",
    rating: 4.6,
    reviews: 91,
    category: "Entertainment Systems",
    brand: "MI+",
    inStock: true,
    description: "Stunning rainbow LED ring design with multimedia capabilities",
  },
  {
    id: 19,
    name: "MILA4012 Professional Stereo System",
    image: "/images/products/mila4012-new.jpg",
    rating: 4.8,
    reviews: 134,
    category: "Stereo Systems",
    brand: "MI+",
    inStock: true,
    description: "Professional stereo with hexagonal design and premium drivers",
  },
  {
    id: 20,
    name: "MIM662A Blue Ring Multimedia System",
    image: "/images/products/mim662a.jpg",
    rating: 4.5,
    reviews: 67,
    category: "Multimedia Systems",
    brand: "MI+",
    inStock: true,
    description: "Advanced multimedia with blue LED ring and CD player",
  },
  {
    id: 21,
    name: "MIG805S Premium Tower Home Theater",
    image: "/images/products/mig805s.jpg",
    rating: 4.9,
    reviews: 45,
    category: "Premium Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Premium 5.1 tower system with blue LED accent and cinematic audio",
  },
  {
    id: 22,
    name: "MIM6085 Enhanced Rainbow LED System",
    image: "/images/products/mim6085-v2.jpg",
    rating: 4.6,
    reviews: 78,
    category: "Entertainment Systems",
    brand: "MI+",
    inStock: true,
    description: "Enhanced rainbow LED effects with improved 5.1 surround sound",
  },
  {
    id: 23,
    name: "MIG813S LED Ring Tower System",
    image: "/images/products/mig813s.png",
    rating: 4.7,
    reviews: 52,
    category: "Premium Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Sophisticated tower system with colorful LED ring lighting",
  },
  {
    id: 24,
    name: "MIMA6506-H Rainbow Tower Entertainment",
    image: "/images/products/mima6506h.jpg",
    rating: 4.5,
    reviews: 63,
    category: "Entertainment Systems",
    brand: "MI+",
    inStock: true,
    description: "Dynamic entertainment with rainbow LED effects and tower speakers",
  },
  {
    id: 25,
    name: "MIG815S Professional RGB Tower System",
    image: "/images/products/mig815s.png",
    rating: 4.8,
    reviews: 34,
    category: "Premium Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Professional 5.1 system with RGB LED strips and ultimate audio",
  },
  {
    id: 26,
    name: "MIM6530B-H Blue LED Tower System",
    image: "/images/products/mim6530bh.jpg",
    rating: 4.6,
    reviews: 58,
    category: "Premium Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Elegant tower system with striking blue LED lighting",
  },
  {
    id: 27,
    name: "MIM6065 Advanced Colorful LED System",
    image: "/images/products/mim6065-v2.jpg",
    rating: 4.7,
    reviews: 89,
    category: "Entertainment Systems",
    brand: "MI+",
    inStock: true,
    description: "Advanced colorful LED lighting with enhanced 5.1 audio",
  },
  {
    id: 28,
    name: "MIM663A Enhanced Rainbow Ring System",
    image: "/images/products/mim663a-v2.png",
    rating: 4.6,
    reviews: 71,
    category: "Entertainment Systems",
    brand: "MI+",
    inStock: true,
    description: "Enhanced rainbow ring with improved multimedia capabilities",
  },
  {
    id: 29,
    name: "MIMA6508-H Green Ring Tower System",
    image: "/images/products/mima6508h.jpg",
    rating: 4.5,
    reviews: 46,
    category: "Premium Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Sophisticated tower with green/purple LED ring lighting",
  },
  {
    id: 30,
    name: "MIG803S Blue LED Tower Home Theater",
    image: "/images/products/mig803s.jpg",
    rating: 4.8,
    reviews: 39,
    category: "Premium Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Premium 5.1 tower home theater with blue LED accents",
  },
  {
    id: 31,
    name: "65T1 Mountain Series Ultra HD TV",
    image: "/images/products/65t1-mountain.jpg",
    rating: 4.7,
    reviews: 28,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Stunning 65-inch 4K display with natural color reproduction and smart connectivity",
  },
  {
    id: 32,
    name: "75T1 Abstract Series Ultra HD TV",
    image: "/images/products/75t1-abstract.jpg",
    rating: 4.8,
    reviews: 35,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Premium 75-inch 4K display with vibrant color technology and modern design",
  },
  {
    id: 33,
    name: "MIG9050 Ultimate Tower Home Theater System",
    image: "/images/products/mig9050.jpg",
    rating: 4.9,
    reviews: 42,
    category: "Premium Home Theater",
    brand: "MI+",
    inStock: true,
    description: "Ultimate 3.1 tower system with hexagonal design and rainbow LED ring",
  },
  {
    id: 34,
    name: "85T1 Balloon Series Ultra HD TV",
    image: "/images/products/85t1-balloons.jpg",
    rating: 4.6,
    reviews: 31,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Large 85-inch 4K display with immersive viewing and smart platform",
  },
  {
    id: 35,
    name: "75T1 Mountain Series Ultra HD TV",
    image: "/images/products/75t1-mountain.jpg",
    rating: 4.7,
    reviews: 29,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "75-inch 4K display with natural color reproduction and mountain series design",
  },
  {
    id: 36,
    name: "65T1 Venice Series Smart Television",
    image: "/images/products/65t1-venice.jpg",
    rating: 4.8,
    reviews: 33,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Elegant 65-inch smart TV with sophisticated design inspired by classic architecture",
  },
  {
    id: 37,
    name: "MIGS1801W Professional Soundbar System",
    image: "/images/products/migs1801w.jpg",
    rating: 4.7,
    reviews: 26,
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
    description: "Professional soundbar with wireless subwoofer and sleek modern design",
  },
  {
    id: 38,
    name: "55T1-A12 Abstract Series Smart TV",
    image: "/images/products/55t1-a12.jpg",
    rating: 4.6,
    reviews: 18,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "55-inch 4K display with abstract series design and vibrant color reproduction",
  },
  {
    id: 39,
    name: "55T1-B10 Voice Control Smart TV",
    image: "/images/products/55t1-b10-voice.jpg",
    rating: 4.7,
    reviews: 22,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Advanced 55-inch 4K TV with integrated voice control system and smart features",
  },
  {
    id: 40,
    name: "55T1-T5 Steel Stand Smart TV",
    image: "/images/products/55t1-t5-steel.jpg",
    rating: 4.5,
    reviews: 15,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "55-inch 4K TV with premium steel tube stand design and tropical aesthetics",
  },
  {
    id: 41,
    name: "55T1-B1 Eagle Series Smart TV",
    image: "/images/products/55t1-b1.jpg",
    rating: 4.8,
    reviews: 24,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Majestic 55-inch 4K display with eagle series nature-inspired design",
  },
  {
    id: 42,
    name: "55T1-A13 Forest Series Smart TV",
    image: "/images/products/55t1-a13.jpg",
    rating: 4.6,
    reviews: 19,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Natural 55-inch 4K TV with forest-inspired eco-friendly design",
  },
  {
    id: 43,
    name: "55T1-A25 Minimalist Smart TV",
    image: "/images/products/55t1-a25.jpg",
    rating: 4.7,
    reviews: 21,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Elegant 55-inch 4K TV with minimalist design and single-button operation",
  },
  {
    id: 44,
    name: "55T1-B10 Arctic Series Smart TV",
    image: "/images/products/55t1-b10-public.jpg",
    rating: 4.5,
    reviews: 16,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Cool 55-inch 4K display with arctic-inspired design and premium features",
  },
  {
    id: 45,
    name: "55T1-T5 Lake Reflection Smart TV",
    image: "/images/products/55t1-t5-lake.jpg",
    rating: 4.8,
    reviews: 20,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Serene 55-inch 4K TV with lake reflection series design and tranquil viewing",
  },
  {
    id: 46,
    name: "55T1-B1 Eagle Series Public Model",
    image: "/images/products/55t1-b1-public.jpg",
    rating: 4.6,
    reviews: 17,
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "Commercial-grade 55-inch 4K TV with eagle series design and enhanced durability",
  },
]

const PRODUCTS_PER_PAGE = 12

export function ProductListing() {
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    categories: [] as string[],
    rating: 0,
    inStock: false,
    brands: [] as string[],
  })
  const [sortBy, setSortBy] = useState("name")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter((product) => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false
      }

      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false
      }

      // Stock filter
      if (filters.inStock && !product.inStock) {
        return false
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false
      }

      return true
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [filters, sortBy, searchQuery])

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE)

  // Reset to first page when filters change
  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleSortChange = (sort: string) => {
    setSortBy(sort)
    setCurrentPage(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
          Our <span className="text-mi-primary">Products</span>
        </h1>
        <p className="font-body text-lg text-mi-secondary max-w-2xl">
          Explore our complete collection of premium MI+ audio products designed to enhance your entertainment
          experience.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white md:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <span className="font-body text-sm text-mi-secondary">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
            {totalPages > 1 && (
              <span className="ml-2">
                (Page {currentPage} of {totalPages})
              </span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <ProductSort sortBy={sortBy} onSortChange={handleSortChange} />
          <div className="flex items-center border border-gray-200 rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`rounded-r-none ${viewMode === "grid" ? "bg-mi-primary text-white" : "text-mi-secondary"}`}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`rounded-l-none ${viewMode === "list" ? "bg-mi-primary text-white" : "text-mi-secondary"}`}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
          <ProductFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>

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
                className="border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 ${
                      currentPage === page
                        ? "bg-mi-primary text-white"
                        : "border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white"
                    }`}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="border-mi-secondary text-mi-secondary hover:bg-mi-secondary hover:text-white disabled:opacity-50"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
