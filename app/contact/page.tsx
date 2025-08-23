import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactInfo from "@/components/contact-info"
import FAQ from "@/components/faq"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Contact Us - MI+",
  description:
    "Get in touch with MI+ for product inquiries, support, and business partnerships. Contact us via WhatsApp for instant assistance.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <ContactHero />
        <ContactInfo />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
