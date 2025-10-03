import ContactHero from "@/components/contact-hero";
import ContactInfo from "@/components/contact-info";
import FAQ from "@/components/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - MI+",
  description:
    "Get in touch with MI+ for product inquiries, support, and business partnerships. Contact us via WhatsApp for instant assistance.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 bg-white">
      <main>
        <ContactHero />
        <ContactInfo />
        <FAQ />
      </main>
    </div>
  );
}
