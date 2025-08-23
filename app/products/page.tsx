import { Navigation } from "@/components/navigation"
import { ProductListing } from "@/components/product-listing"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <ProductListing />
      </main>
      <Footer />
    </div>
  )
}
