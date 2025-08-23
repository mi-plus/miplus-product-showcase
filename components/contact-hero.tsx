import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-[#e82b05] to-[#6f888f] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-sans text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="font-serif text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Ready to discover the perfect products for your needs? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <MessageCircle className="w-8 h-8 mx-auto mb-3 text-white" />
            <h3 className="font-sans font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm text-white/80">Instant messaging</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Phone className="w-8 h-8 mx-auto mb-3 text-white" />
            <h3 className="font-sans font-semibold mb-2">Phone</h3>
            <p className="text-sm text-white/80">Direct support</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Mail className="w-8 h-8 mx-auto mb-3 text-white" />
            <h3 className="font-sans font-semibold mb-2">Email</h3>
            <p className="text-sm text-white/80">Business inquiries</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-white" />
            <h3 className="font-sans font-semibold mb-2">Location</h3>
            <p className="text-sm text-white/80">Visit our showroom</p>
          </div>
        </div>
      </div>
    </section>
  )
}
